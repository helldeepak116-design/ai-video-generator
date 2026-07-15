'use client'
import { useState } from 'react'
import {
  Zap, Wand2, Settings, Type, Video,
  Clock, Palette, Music, Volume2, ChevronDown,
  Sparkles, RefreshCw, Download, Share2, Film,
  Maximize, Camera, AlertCircle, CheckCircle,
} from 'lucide-react'
import Link from 'next/link'

const STYLES = ['Cinematic', 'Realistic', 'Anime', 'Cartoon', '3D Render', 'Watercolor', 'Oil Painting', 'Pixel Art', 'Noir', 'Vintage', 'Neon', 'Minimalist']
const DURATIONS = ['5s', '10s', '15s', '30s', '60s', '2min', '5min', '10min']
const RATIOS = ['16:9', '9:16', '1:1', '4:3', '21:9']
const RESOLUTIONS = ['720p', '1080p', '2K', '4K']
const CAMERAS = ['Static', 'Pan Left', 'Pan Right', 'Zoom In', 'Zoom Out', 'Drone', 'Tracking']

const EXAMPLE_PROMPTS = [
  'A majestic eagle soaring over snow-capped mountains at golden hour, cinematic tracking shot, volumetric clouds, lens flare, 8K',
  'Neon-lit cyberpunk city street at night in heavy rain, reflections on wet pavement, flying cars, cinematic depth of field',
  'Peaceful Japanese zen garden in spring, cherry blossoms falling, soft morning light, slow camera pan, ultra realistic',
  'Underwater coral reef with tropical fish and rays of sunlight, vivid colors, smooth camera glide, documentary style',
  'Abstract fluid art, metallic iridescent liquid flowing, macro lens, dramatic studio lighting, 4K resolution',
]

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('Cinematic')
  const [duration, setDuration] = useState('15s')
  const [ratio, setRatio] = useState('16:9')
  const [resolution, setResolution] = useState('1080p')
  const [camera, setCamera] = useState('Static')
  const [creativity, setCreativity] = useState(70)
  const [motion, setMotion] = useState(50)
  const [music, setMusic] = useState(true)
  const [voice, setVoice] = useState(false)
  const [transitions, setTransitions] = useState(true)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = () => {
    if (!prompt.trim()) { setError('Please enter a prompt to generate your video.'); return }
    setError('')
    setDone(false)
    setGenerating(true)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 95) { clearInterval(interval); return p }
        return p + Math.random() * 8
      })
    }, 300)
    setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
      setTimeout(() => { setGenerating(false); setDone(true) }, 400)
    }, 5000)
  }

  const Chip = ({ label, active, onClick }) => (
    <button onClick={onClick} style={{
      padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 500,
      cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
      background: active ? 'rgba(109,59,255,0.2)' : 'rgba(255,255,255,0.04)',
      border: active ? '1px solid rgba(109,59,255,0.5)' : '1px solid rgba(255,255,255,0.07)',
      color: active ? '#c4c4ff' : '#6d6d8a',
    }}>
      {label}
    </button>
  )

  const Toggle = ({ label, icon: Icon, checked, onChange }) => (
    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '8px 0' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#b4b4c5', fontSize: 14 }}>
        <Icon size={15} color="#6d6d8a" />{label}
      </span>
      <div onClick={() => onChange(!checked)} style={{
        width: 42, height: 22, borderRadius: 11,
        background: checked ? '#6d3bff' : 'rgba(255,255,255,0.08)',
        border: `1px solid ${checked ? '#6d3bff' : 'rgba(255,255,255,0.12)'}`,
        position: 'relative', transition: 'all 0.3s', cursor: 'pointer',
      }}>
        <div style={{
          position: 'absolute', top: 2,
          left: checked ? 22 : 2, width: 16, height: 16,
          borderRadius: '50%', background: checked ? 'white' : '#6d6d8a',
          transition: 'all 0.3s',
        }} />
      </div>
    </label>
  )

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem 2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', marginBottom: 12 }}>
          <span className="gradient-text">Generate</span> Your Video
        </h1>
        <p style={{ color: '#6d6d8a', fontSize: 16 }}>Describe your vision — AI does the rest</p>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="generate-grid">
        {/* ─── LEFT PANEL ─────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Prompt */}
          <div className="glass" style={{ borderRadius: 20, padding: '1.5rem', border: '1px solid rgba(255,255,255,0.07)' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
              <Type size={16} color="#9d9dff" /> Video Prompt
            </label>
            <textarea
              value={prompt}
              onChange={e => { setPrompt(e.target.value); setError('') }}
              placeholder={"Describe your video in detail...\n\nExample: 'A majestic eagle soaring over snow-capped mountains at golden hour, cinematic tracking shot, volumetric clouds, 8K quality'"}
              style={{
                width: '100%', height: 160, padding: '12px 16px', resize: 'none',
                background: 'rgba(13,13,24,0.6)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12, color: 'white', fontSize: 14, outline: 'none',
                lineHeight: 1.6, fontFamily: 'inherit', transition: 'border-color 0.3s',
              }}
              onFocus={e => e.target.style.borderColor = '#6d3bff'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
            {error && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, color: '#f87171', fontSize: 13 }}>
                <AlertCircle size={14} /> {error}
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
              <span style={{ color: '#47475d', fontSize: 12 }}>{prompt.length}/2000</span>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {EXAMPLE_PROMPTS.slice(0, 3).map((p, i) => (
                  <button key={i} onClick={() => setPrompt(p)} style={{
                    padding: '4px 10px', borderRadius: 6, fontSize: 11, cursor: 'pointer',
                    background: 'rgba(109,59,255,0.1)', border: '1px solid rgba(109,59,255,0.2)',
                    color: '#9d9dff',
                  }}>
                    Example {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Style */}
          <div className="glass" style={{ borderRadius: 20, padding: '1.5rem', border: '1px solid rgba(255,255,255,0.07)' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 14 }}>
              <Palette size={16} color="#9d9dff" /> Art Style
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {STYLES.map(s => <Chip key={s} label={s} active={style === s} onClick={() => setStyle(s)} />)}
            </div>
          </div>

          {/* Duration + Ratio */}
          <div className="glass" style={{ borderRadius: 20, padding: '1.5rem', border: '1px solid rgba(255,255,255,0.07)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
                <Clock size={16} color="#9d9dff" /> Duration
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {DURATIONS.map(d => <Chip key={d} label={d} active={duration === d} onClick={() => setDuration(d)} />)}
              </div>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
                <Maximize size={16} color="#9d9dff" /> Aspect Ratio
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {RATIOS.map(r => <Chip key={r} label={r} active={ratio === r} onClick={() => setRatio(r)} />)}
              </div>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="glass" style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
            <button onClick={() => setShowAdvanced(!showAdvanced)} style={{
              width: '100%', padding: '1.25rem 1.5rem', background: 'none', border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', fontWeight: 600, fontSize: 14 }}>
                <Settings size={16} color="#9d9dff" /> Advanced Settings
              </span>
              <ChevronDown size={16} color="#6d6d8a" style={{ transform: showAdvanced ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </button>
            {showAdvanced && (
              <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
                {/* Resolution */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ color: '#6d6d8a', fontSize: 13, marginBottom: 10, display: 'block' }}>Resolution</label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {RESOLUTIONS.map(r => <Chip key={r} label={r} active={resolution === r} onClick={() => setResolution(r)} />)}
                  </div>
                </div>
                {/* Camera */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ color: '#6d6d8a', fontSize: 13, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Camera size={13} /> Camera Movement
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {CAMERAS.map(c => <Chip key={c} label={c} active={camera === c} onClick={() => setCamera(c)} />)}
                  </div>
                </div>
                {/* Sliders */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <label style={{ color: '#6d6d8a', fontSize: 13 }}>Creativity Level</label>
                    <span style={{ color: '#9d9dff', fontSize: 13, fontWeight: 600 }}>{creativity}%</span>
                  </div>
                  <input type="range" min={0} max={100} value={creativity} onChange={e => setCreativity(+e.target.value)}
                    style={{ width: '100%', accentColor: '#6d3bff' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                    <span style={{ color: '#47475d', fontSize: 11 }}>Conservative</span>
                    <span style={{ color: '#47475d', fontSize: 11 }}>Creative</span>
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <label style={{ color: '#6d6d8a', fontSize: 13 }}>Motion Intensity</label>
                    <span style={{ color: '#9d9dff', fontSize: 13, fontWeight: 600 }}>{motion}%</span>
                  </div>
                  <input type="range" min={0} max={100} value={motion} onChange={e => setMotion(+e.target.value)}
                    style={{ width: '100%', accentColor: '#6d3bff' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                    <span style={{ color: '#47475d', fontSize: 11 }}>Subtle</span>
                    <span style={{ color: '#47475d', fontSize: 11 }}>Dynamic</span>
                  </div>
                </div>
                {/* Toggles */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                  <Toggle label="AI Background Music" icon={Music} checked={music} onChange={setMusic} />
                  <Toggle label="AI Voiceover" icon={Volume2} checked={voice} onChange={setVoice} />
                  <Toggle label="Auto Transitions" icon={Film} checked={transitions} onChange={setTransitions} />
                </div>
              </div>
            )}
          </div>

          {/* Generate Button */}
          <button onClick={handleGenerate} disabled={generating} className="btn-primary"
            style={{ fontSize: 16, padding: '16px 24px', gap: 10, width: '100%', opacity: generating ? 0.7 : 1, cursor: generating ? 'not-allowed' : 'pointer' }}>
            {generating ? <><RefreshCw size={18} style={{ animation: 'spin 0.8s linear infinite' }} /> Generating...</> : <><Zap size={18} /> Generate Video</>}
          </button>
        </div>

        {/* ─── RIGHT PANEL ────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Preview */}
          <div className="glass" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', position: 'sticky', top: 90 }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white', fontWeight: 600, fontSize: 14 }}>
                <Video size={16} color="#9d9dff" /> Preview
              </span>
              <span style={{ color: '#6d6d8a', fontSize: 12 }}>{resolution} · {ratio} · {duration}</span>
            </div>

            {/* Video area */}
            <div style={{
              aspectRatio: '16/9', position: 'relative',
              background: 'linear-gradient(135deg, #0d0d18, #1e0660 40%, #001a2e)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
            }}>
              {!generating && !done && (
                <div style={{ textAlign: 'center' }}>
                  <Video size={48} color="rgba(109,59,255,0.3)" style={{ marginBottom: 16 }} />
                  <p style={{ color: '#47475d', fontSize: 14 }}>Enter a prompt to preview</p>
                </div>
              )}

              {generating && (
                <div style={{ textAlign: 'center', padding: '0 2rem', width: '100%' }}>
                  <div className="spinner" style={{ margin: '0 auto 20px' }} />
                  <p style={{ color: '#9d9dff', fontWeight: 600, marginBottom: 6 }}>Creating your masterpiece...</p>
                  <p style={{ color: '#47475d', fontSize: 13, marginBottom: 20 }}>{style} · {duration} · {resolution}</p>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 9999, height: 6, overflow: 'hidden', maxWidth: 300, margin: '0 auto' }}>
                    <div style={{
                      height: '100%', borderRadius: 9999,
                      background: 'linear-gradient(90deg, #6d3bff, #00d4ff)',
                      width: `${progress}%`, transition: 'width 0.4s ease',
                    }} />
                  </div>
                  <p style={{ color: '#47475d', fontSize: 12, marginTop: 10 }}>
                    {Math.round(progress)}% · Est. ~{duration === '5s' ? '30s' : '60s'} remaining
                  </p>
                  {/* Processing steps */}
                  <div style={{ marginTop: 24, textAlign: 'left', maxWidth: 280, margin: '24px auto 0' }}>
                    {[
                      { label: 'Analyzing prompt', done: progress > 15 },
                      { label: 'Generating frames', done: progress > 40 },
                      { label: 'Adding motion & effects', done: progress > 65 },
                      { label: 'Compositing & rendering', done: progress > 85 },
                      { label: 'Finalizing output', done: progress >= 100 },
                    ].map((step, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        {step.done
                          ? <CheckCircle size={14} color="#34d399" />
                          : <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.15)' }} />
                        }
                        <span style={{ color: step.done ? '#9d9dff' : '#47475d', fontSize: 13 }}>{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {done && (
                <>
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(109,59,255,0.3), transparent 60%)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 40%, rgba(0,212,255,0.15), transparent 60%)' }} />
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 2rem' }}>
                    <div style={{
                      width: 64, height: 64, borderRadius: '50%',
                      background: 'rgba(109,59,255,0.2)', border: '1px solid rgba(109,59,255,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                    }}>
                      <Sparkles size={28} color="#9d9dff" />
                    </div>
                    <p style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Video Generated!</p>
                    <p style={{ color: '#6d6d8a', fontSize: 13, marginBottom: 24 }}>
                      {style} · {duration} · {resolution}
                    </p>
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <button className="btn-primary" style={{ gap: 8, fontSize: 14, padding: '10px 20px' }}>
                        <Download size={16} /> Download
                      </button>
                      <button className="btn-secondary" style={{ gap: 8, fontSize: 14, padding: '10px 20px' }}>
                        <Share2 size={16} /> Share
                      </button>
                      <button onClick={() => { setDone(false); setPrompt('') }} className="btn-secondary" style={{ gap: 8, fontSize: 14, padding: '10px 20px' }}>
                        <RefreshCw size={16} /> New
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Config summary */}
            <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', textAlign: 'center' }}>
              {[['Style', style], ['Camera', camera], ['Quality', resolution]].map(([k, v]) => (
                <div key={k}>
                  <p style={{ color: '#47475d', fontSize: 11, marginBottom: 2 }}>{k}</p>
                  <p style={{ color: 'white', fontSize: 13, fontWeight: 600 }}>{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips */}
          <div className="glass" style={{ borderRadius: 20, padding: '1.5rem', border: '1px solid rgba(255,255,255,0.07)' }}>
            <h3 style={{ color: 'white', fontWeight: 700, fontSize: 14, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Wand2 size={16} color="#9d9dff" /> Pro Tips
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Specify camera angles: "aerial drone shot", "close-up", "wide-angle"',
                'Add lighting: "golden hour", "neon-lit", "dramatic chiaroscuro"',
                'Include mood: "epic", "peaceful", "mysterious", "energetic"',
                'Use quality tags: "8K", "photorealistic", "film grain", "bokeh"',
                'Describe motion: "slow motion", "timelapse", "smooth tracking"',
              ].map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: 8 }}>
                  <span style={{ color: '#6d3bff', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>→</span>
                  <span style={{ color: '#6d6d8a', fontSize: 13, lineHeight: 1.5 }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .generate-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  )
}