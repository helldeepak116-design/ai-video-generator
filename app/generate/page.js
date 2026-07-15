'use client'
import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import {
  Zap, Type, ImageIcon, Clock, Palette,
  Sparkles, RefreshCw, Download, Share2,
  AlertCircle, CheckCircle, Lock, Info, Maximize
} from 'lucide-react'

const STYLES = ['Cinematic', 'Realistic', 'Anime', 'Cartoon', '3D Render', 'Watercolor', 'Oil Painting', 'Pixel Art', 'Neon', 'Vintage']

const EXAMPLE_PROMPTS = [
  'A majestic eagle soaring over snow-capped mountains at golden hour',
  'Cyberpunk city street at night with neon lights and rain',
  'Peaceful zen garden with cherry blossoms falling',
  'Astronaut floating in colorful nebula, ultra realistic',
  'Enchanted forest with glowing mushrooms and fireflies',
]

export default function GeneratePage() {
  const { isSignedIn, user, isLoaded } = useUser()
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('Cinematic')
  const [generating, setGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [videoUrl, setVideoUrl] = useState('')
  const [error, setError] = useState('')
  const [history, setHistory] = useState([])
  const [statusMsg, setStatusMsg] = useState('')

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt!')
      return
    }
    setError('')
    setGenerating(true)
    setVideoUrl('')
    setProgress(0)
    setStatusMsg('Analyzing prompt...')

    let currentProgress = 0
    const messages = [
      { at: 10, msg: 'Understanding your prompt...' },
      { at: 30, msg: 'AI is thinking...' },
      { at: 50, msg: 'Generating visual...' },
      { at: 75, msg: 'Applying style...' },
      { at: 90, msg: 'Almost done!' },
    ]

    const interval = setInterval(() => {
      currentProgress = Math.min(currentProgress + Math.random() * 8, 95)
      setProgress(currentProgress)
      const m = [...messages].reverse().find(x => currentProgress >= x.at)
      if (m) setStatusMsg(m.msg)
    }, 300)

    try {
      const response = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `${prompt}, ${style} style` }),
      })

      const data = await response.json()
      clearInterval(interval)
      
      if (!response.ok) throw new Error(data.error || 'Generation failed')
      
      // Preload the image
      const img = new Image()
      img.onload = () => {
        setProgress(100)
        setStatusMsg('Complete!')
        setTimeout(() => {
          setVideoUrl(data.videoUrl)
          setGenerating(false)
          setHistory(prev => [{ url: data.videoUrl, prompt, style }, ...prev.slice(0, 5)])
        }, 400)
      }
      img.onerror = () => {
        setGenerating(false)
        setError('Failed to load. Try again!')
      }
      img.src = data.videoUrl
      
    } catch (err) {
      clearInterval(interval)
      setGenerating(false)
      setError(err.message)
    }
  }

  const handleDownload = () => {
    if (!videoUrl) return
    const link = document.createElement('a')
    link.href = videoUrl
    link.download = `imgai-${Date.now()}.jpg`
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShare = async () => {
    if (!videoUrl) return
    if (navigator.share) {
      try {
        await navigator.share({ title: 'AI Creation', text: prompt, url: videoUrl })
      } catch {}
    } else {
      navigator.clipboard.writeText(videoUrl)
      alert('Link copied to clipboard!')
    }
  }

  const Chip = ({ label, active, onClick }) => (
    <button onClick={onClick} style={{
      padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: 'pointer',
      background: active ? 'rgba(109,59,255,0.2)' : 'rgba(255,255,255,0.04)',
      border: active ? '1px solid rgba(109,59,255,0.5)' : '1px solid rgba(255,255,255,0.07)',
      color: active ? '#c4c4ff' : '#6d6d8a',
    }}>{label}</button>
  )

  if (isLoaded && !isSignedIn) {
    return (
      <div style={{ paddingTop: 80, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glass" style={{ maxWidth: 480, padding: '3rem', borderRadius: 24, border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center', margin: '2rem' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(109,59,255,0.15)', border: '1px solid rgba(109,59,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <Lock size={32} color="#9d9dff" />
          </div>
          <h2 style={{ color: 'white', fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Login Required</h2>
          <p style={{ color: '#6d6d8a', marginBottom: 24 }}>Sign up FREE to create AI content!</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Link href="/signup" className="btn-primary" style={{ fontSize: 14 }}>Sign Up Free</Link>
            <Link href="/login" className="btn-secondary" style={{ fontSize: 14 }}>Log In</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem 2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', marginBottom: 12 }}>
          <span className="gradient-text">Generate</span> with AI
        </h1>
        <p style={{ color: '#6d6d8a', fontSize: 16 }}>
          {user?.firstName ? `Hey ${user.firstName}! ` : ''}100% FREE Real AI Generation
        </p>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="generate-grid">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="glass" style={{ borderRadius: 20, padding: '1.5rem', border: '1px solid rgba(255,255,255,0.07)' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
              <Type size={16} color="#9d9dff" /> Your Prompt
            </label>
            <textarea
              value={prompt}
              onChange={e => { setPrompt(e.target.value); setError('') }}
              placeholder="Describe what you want to create..."
              style={{
                width: '100%', height: 140, padding: '12px 16px', resize: 'none',
                background: 'rgba(13,13,24,0.6)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12, color: 'white', fontSize: 14, outline: 'none',
                fontFamily: 'inherit', lineHeight: 1.6,
              }}
            />
            {error && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 8, color: '#f87171', fontSize: 13, padding: 10, background: 'rgba(248,113,113,0.1)', borderRadius: 8 }}>
                <AlertCircle size={14} style={{ flexShrink: 0, marginTop: 2 }} /> {error}
              </div>
            )}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
              {EXAMPLE_PROMPTS.slice(0, 3).map((p, i) => (
                <button key={i} onClick={() => setPrompt(p)} style={{
                  padding: '4px 10px', borderRadius: 6, fontSize: 11, cursor: 'pointer',
                  background: 'rgba(109,59,255,0.1)', border: '1px solid rgba(109,59,255,0.2)',
                  color: '#9d9dff',
                }}>Example {i + 1}</button>
              ))}
            </div>
          </div>

          <div className="glass" style={{ borderRadius: 20, padding: '1.5rem', border: '1px solid rgba(255,255,255,0.07)' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 14 }}>
              <Palette size={16} color="#9d9dff" /> Art Style
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {STYLES.map(s => <Chip key={s} label={s} active={style === s} onClick={() => setStyle(s)} />)}
            </div>
          </div>

          <div className="glass" style={{ borderRadius: 20, padding: '1.5rem', border: '1px solid rgba(52,211,153,0.3)', background: 'rgba(52,211,153,0.05)' }}>
            <h3 style={{ color: '#34d399', fontWeight: 700, fontSize: 14, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle size={16} /> 100% FREE Forever
            </h3>
            <ul style={{ color: '#b4b4c5', fontSize: 13, lineHeight: 1.8, paddingLeft: 20 }}>
              <li>Powered by Pollinations.ai</li>
              <li>Real AI generation in seconds</li>
              <li>Unlimited generations</li>
              <li>HD quality output</li>
              <li>Downloadable and shareable</li>
            </ul>
          </div>

          <button onClick={handleGenerate} disabled={generating} className="btn-primary"
            style={{ fontSize: 16, padding: '16px 24px', gap: 10, width: '100%', opacity: generating ? 0.7 : 1, cursor: generating ? 'not-allowed' : 'pointer' }}>
            {generating ? <><RefreshCw size={18} style={{ animation: 'spin 0.8s linear infinite' }} /> Generating...</> : <><Zap size={18} /> Generate with AI (FREE)</>}
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="glass" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', fontWeight: 600, fontSize: 14 }}>
                <ImageIcon size={16} color="#9d9dff" /> Preview
              </span>
              <span style={{ color: '#34d399', fontSize: 12, fontWeight: 600 }}>REAL AI - FREE</span>
            </div>

            <div style={{
              aspectRatio: '16/9', position: 'relative',
              background: 'linear-gradient(135deg, #0d0d18, #1e0660 40%, #001a2e)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
            }}>
              {!generating && !videoUrl && (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <Sparkles size={48} color="rgba(109,59,255,0.3)" style={{ marginBottom: 16 }} />
                  <p style={{ color: '#47475d', fontSize: 14 }}>Enter a prompt and click Generate</p>
                  <p style={{ color: '#47475d', fontSize: 12, marginTop: 4 }}>Free AI creation!</p>
                </div>
              )}

              {generating && (
                <div style={{ textAlign: 'center', padding: '2rem', width: '100%' }}>
                  <div style={{ width: 40, height: 40, border: '3px solid rgba(255,255,255,0.1)', borderTopColor: '#7c5cff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 20px' }} />
                  <p style={{ color: '#9d9dff', fontWeight: 600, marginBottom: 6 }}>{statusMsg}</p>
                  <p style={{ color: '#47475d', fontSize: 13, marginBottom: 20 }}>{style} - Just a few seconds!</p>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 9999, height: 6, overflow: 'hidden', maxWidth: 300, margin: '0 auto' }}>
                    <div style={{
                      height: '100%', borderRadius: 9999,
                      background: 'linear-gradient(90deg, #6d3bff, #00d4ff)',
                      width: `${progress}%`, transition: 'width 0.3s',
                    }} />
                  </div>
                  <p style={{ color: '#47475d', fontSize: 12, marginTop: 10 }}>{Math.round(progress)}%</p>
                </div>
              )}

              {videoUrl && !generating && (
                <img src={videoUrl} alt="AI Generated" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
            </div>

            {videoUrl && !generating && (
              <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 10, justifyContent: 'center' }}>
                <button onClick={handleDownload} className="btn-primary" style={{ gap: 8, fontSize: 13, padding: '8px 16px' }}>
                  <Download size={14} /> Download
                </button>
                <button onClick={handleShare} className="btn-secondary" style={{ gap: 8, fontSize: 13, padding: '8px 16px' }}>
                  <Share2 size={14} /> Share
                </button>
                <button onClick={() => { setVideoUrl(''); setPrompt('') }} className="btn-secondary" style={{ gap: 8, fontSize: 13, padding: '8px 16px' }}>
                  <RefreshCw size={14} /> New
                </button>
              </div>
            )}
          </div>

          {history.length > 0 && (
            <div className="glass" style={{ borderRadius: 20, padding: '1.5rem', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: 14, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Clock size={16} color="#9d9dff" /> Your Creations
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {history.map((item, i) => (
                  <img key={i} src={item.url} alt=""
                    onClick={() => { setVideoUrl(item.url); setPrompt(item.prompt) }}
                    style={{
                      aspectRatio: '16/9', borderRadius: 8, cursor: 'pointer',
                      border: '1px solid rgba(255,255,255,0.05)', width: '100%',
                      objectFit: 'cover',
                    }} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media(max-width:768px){.generate-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}
