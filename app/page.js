import Link from 'next/link'
import {
  Play, ArrowRight, Sparkles, Zap, Star,
  Video, Wand2, Globe, Shield, Layers,
  Palette, Music, Clock, Type, Cpu, Download,
} from 'lucide-react'
import StatsBar from '@/components/StatsBar'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'
import SectionHeader from '@/components/SectionHeader'

const features = [
  { icon: Type, title: 'Text to Video', description: 'Describe any scene in natural language. Our AI transforms your words into stunning video clips.', accent: '#6d3bff' },
  { icon: Wand2, title: 'AI Magic Editor', description: 'Edit with intelligent tools that understand context. Remove, add, or modify scenes effortlessly.', accent: '#00d4ff' },
  { icon: Palette, title: '50+ Art Styles', description: 'Cinematic, anime, cartoon, watercolor, 3D render, neon, vintage, and many more.', accent: '#f472b6' },
  { icon: Music, title: 'AI Music & Voice', description: 'Auto-generate perfectly synced background music and natural voiceovers for your videos.', accent: '#34d399' },
  { icon: Globe, title: '30+ Languages', description: 'Generate subtitles and AI voiceovers in over 30 languages automatically.', accent: '#f59e0b' },
  { icon: Zap, title: 'Lightning Fast', description: 'Generate high-quality videos in under 2 minutes with our optimized AI infrastructure.', accent: '#f97316' },
  { icon: Shield, title: 'Commercial Rights', description: 'Full commercial license on all generated content. Use anywhere without restrictions.', accent: '#a78bfa' },
  { icon: Layers, title: 'Batch Processing', description: 'Generate hundreds of videos simultaneously. Perfect for large marketing campaigns.', accent: '#60a5fa' },
  { icon: Clock, title: 'Up to 10 Min', description: 'Create long-form videos up to 10 minutes in stunning 4K resolution.', accent: '#fb923c' },
]

const steps = [
  { icon: Type, step: '01', title: 'Write Your Prompt', description: 'Describe your video idea in detail. Be specific about style, mood, and content.' },
  { icon: Cpu, step: '02', title: 'AI Generates Video', description: 'Our advanced AI processes your prompt and creates a professional video in minutes.' },
  { icon: Wand2, step: '03', title: 'Customize & Refine', description: 'Fine-tune the video with our editor. Adjust style, music, transitions, and more.' },
  { icon: Download, step: '04', title: 'Export & Share', description: 'Download in 4K MP4, WebM, or MOV. Share directly to any social platform.' },
]

const testimonials = [
  { name: 'Sarah Chen', role: 'Content Creator · 500K Subs', initials: 'SC', color: '#ec4899', rating: 5, text: 'VidAI completely transformed my workflow. What used to take me 8 hours now takes 10 minutes. The quality is absolutely mind-blowing. I use it every single day.' },
  { name: 'Marcus Johnson', role: 'Marketing Director at TechCorp', initials: 'MJ', color: '#3b82f6', rating: 5, text: 'We use VidAI for all our social media content. ROI increased 340% in just 2 months. Our clients love the professional quality. Best investment we\'ve made.' },
  { name: 'Emily Rodriguez', role: 'YouTuber · 2M Subscribers', initials: 'ER', color: '#8b5cf6', rating: 5, text: 'The best AI video tool I\'ve tried. The cinematic quality is on par with professional editing suites that cost thousands. Total game changer for creators.' },
  { name: 'David Park', role: 'Startup Founder & CEO', initials: 'DP', color: '#10b981', rating: 5, text: 'Saved us $50K+ in video production costs. VidAI delivers professional results that our clients absolutely love. Can\'t imagine our workflow without it.' },
  { name: 'Lisa Wang', role: 'Brand Manager at NovaCo', initials: 'LW', color: '#f59e0b', rating: 5, text: 'The text-to-video feature is mind-blowing. We create personalized video campaigns at massive scale now. Absolutely revolutionary for our business.' },
  { name: 'Alex Thompson', role: 'Freelance Video Editor', initials: 'AT', color: '#06b6d4', rating: 5, text: 'I was skeptical at first, but VidAI exceeded all my expectations. It\'s now an essential part of my creative toolkit. My clients keep asking how I do it so fast!' },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', position: 'relative',
        overflow: 'hidden', paddingTop: 80,
      }}>
        <div className="orb-purple" style={{ top: '10%', left: '-10%' }} />
        <div className="orb-blue" style={{ top: '30%', right: '-5%' }} />
        <div className="orb-purple" style={{ bottom: '-10%', left: '35%' }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 1.5rem', maxWidth: 900, margin: '0 auto' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 20px', borderRadius: 9999, marginBottom: 32,
            background: 'rgba(109,59,255,0.12)', border: '1px solid rgba(109,59,255,0.3)',
            color: '#9d9dff', fontSize: 13, fontWeight: 600,
          }}>
            <Sparkles size={14} /> Powered by Next-Gen AI · v3.0 Released
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: 'white',
          }}>
            Create Stunning Videos<br />
            <span className="gradient-text">With the Power of AI</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#6d6d8a',
            maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7,
          }}>
            Transform any idea into professional-quality videos in minutes.
            Describe it, generate it, share it — no editing skills required.
          </p>

          {/* Prompt Box */}
          <div className="glass" style={{
            borderRadius: 20, padding: 8, maxWidth: 680, margin: '0 auto 24px',
            border: '1px solid rgba(109,59,255,0.2)',
          }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder='e.g. "A cinematic sunset over mountains with epic music..."'
                style={{
                  flex: 1, minWidth: 200, padding: '14px 16px',
                  background: 'transparent', border: 'none', color: 'white',
                  fontSize: 15, outline: 'none',
                }}
              />
              <Link href="/generate" className="btn-primary" style={{ gap: 8, whiteSpace: 'nowrap' }}>
                <Zap size={16} /> Generate Video
              </Link>
            </div>
          </div>

          <p style={{ color: '#47475d', fontSize: 13, marginBottom: 48 }}>
            No credit card required · 5 free videos/month · Cancel anytime
          </p>

          {/* Demo Button */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/generate" style={{
              display: 'flex', alignItems: 'center', gap: 8,
              color: '#9d9dff', textDecoration: 'none', fontSize: 15, fontWeight: 500,
            }}>
              Start creating now <ArrowRight size={16} />
            </Link>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'none', border: 'none', color: '#6d6d8a',
              cursor: 'pointer', fontSize: 15,
            }}>
              <div className="glass" style={{
                width: 40, height: 40, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <Play size={14} color="white" fill="white" style={{ marginLeft: 2 }} />
              </div>
              Watch demo
            </button>
          </div>
        </div>
      </section>

      {/* ─── VIDEO PREVIEW MOCKUP ──────────────────────────── */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="glass" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
            {/* Browser bar */}
            <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
              </div>
              <div style={{ flex: 1, height: 24, background: 'rgba(255,255,255,0.05)', borderRadius: 8, maxWidth: 300, margin: '0 auto' }} />
            </div>
            {/* Content */}
            <div style={{
              aspectRatio: '16/9', position: 'relative',
              background: 'linear-gradient(135deg, #1e0660 0%, #080810 40%, #001a2e 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(109,59,255,0.2), transparent 60%)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 50%, rgba(0,212,255,0.1), transparent 60%)' }} />
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'rgba(109,59,255,0.25)', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(109,59,255,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                  cursor: 'pointer',
                }}>
                  <Play size={28} color="white" fill="white" style={{ marginLeft: 3 }} />
                </div>
                <p style={{ color: '#6d6d8a', fontSize: 14 }}>See AI Video Generation in Action</p>
              </div>
              {/* HUD overlays */}
              <div className="glass" style={{ position: 'absolute', top: 16, left: 16, padding: '4px 12px', borderRadius: 8, fontSize: 11, color: '#9d9dff', border: '1px solid rgba(109,59,255,0.3)' }}>
                4K · HDR
              </div>
              <div className="glass" style={{ position: 'absolute', top: 16, right: 16, padding: '4px 12px', borderRadius: 8, fontSize: 11, color: '#34d399', display: 'flex', alignItems: 'center', gap: 6, border: '1px solid rgba(52,211,153,0.3)' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', animation: 'pulse 1.5s infinite' }} />
                AI Processing
              </div>
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 9999, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '65%', background: 'linear-gradient(90deg, #6d3bff, #00d4ff)', borderRadius: 9999 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────── */}
      <StatsBar />

      {/* ─── FEATURES ──────────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ right: '-15%', top: '20%' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader
            badge="✨ Packed with Features"
            title="Everything You Need to"
            highlight="Create Amazing Videos"
            subtitle="State-of-the-art AI tools that make professional video creation accessible to everyone."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {features.map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-blue" style={{ left: '-10%', top: '30%' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader title="How It" highlight="Works" subtitle="Create professional AI videos in four simple steps." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', position: 'relative' }}>
            {steps.map((step, i) => (
              <div key={i} className="glass card-hover" style={{ borderRadius: 20, padding: '2rem', border: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
                <div style={{ fontSize: 64, fontWeight: 900, color: 'rgba(109,59,255,0.08)', lineHeight: 1, marginBottom: 16 }}>{step.step}</div>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'rgba(109,59,255,0.12)', border: '1px solid rgba(109,59,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
                }}>
                  <step.icon size={22} color="#9d9dff" />
                </div>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: '#6d6d8a', fontSize: 14, lineHeight: 1.7 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ right: '-10%', top: '0' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader title="Loved by" highlight="50,000+ Creators" subtitle="Join thousands of creators and businesses already using VidAI." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
          {/* Stars summary */}
          <div style={{ textAlign: 'center', marginTop: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={24} color="#f59e0b" fill="#f59e0b" />)}
            </div>
            <p style={{ color: '#6d6d8a' }}>
              <span style={{ color: 'white', fontWeight: 700 }}>4.9 / 5</span> from over{' '}
              <span style={{ color: 'white', fontWeight: 700 }}>12,000+ reviews</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}