import Link from 'next/link'
import {
  Play, ArrowRight, Sparkles, Zap, Star,
  Image as ImageIcon, Wand2, Globe, Shield, Layers,
  Palette, Music, Clock, Type, Cpu, Download,
} from 'lucide-react'
import StatsBar from '@/components/StatsBar'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'
import SectionHeader from '@/components/SectionHeader'

const features = [
  { icon: Type, title: 'Text to Image', description: 'Describe any scene in natural language. Our AI transforms your words into stunning images.', accent: '#6d3bff' },
  { icon: Wand2, title: 'AI Magic Editor', description: 'Edit with intelligent tools that understand context. Remove, add, or modify elements effortlessly.', accent: '#00d4ff' },
  { icon: Palette, title: '50+ Art Styles', description: 'Cinematic, anime, cartoon, watercolor, 3D render, neon, vintage, and many more.', accent: '#f472b6' },
  { icon: ImageIcon, title: 'HD Quality', description: 'Generate stunning HD images with rich detail and vibrant colors instantly.', accent: '#34d399' },
  { icon: Globe, title: '30+ Languages', description: 'Create images from prompts in over 30 languages automatically.', accent: '#f59e0b' },
  { icon: Zap, title: 'Lightning Fast', description: 'Generate high-quality images in under 10 seconds with our optimized AI infrastructure.', accent: '#f97316' },
  { icon: Shield, title: 'Commercial Rights', description: 'Full commercial license on all generated content. Use anywhere without restrictions.', accent: '#a78bfa' },
  { icon: Layers, title: 'Batch Processing', description: 'Generate hundreds of images simultaneously. Perfect for large marketing campaigns.', accent: '#60a5fa' },
  { icon: Clock, title: 'Instant Results', description: 'Real AI generation in seconds, not minutes. Unlimited free creations!', accent: '#fb923c' },
]

const steps = [
  { icon: Type, step: '01', title: 'Write Your Prompt', description: 'Describe your image idea in detail. Be specific about style, mood, and content.' },
  { icon: Cpu, step: '02', title: 'AI Generates Image', description: 'Our advanced AI processes your prompt and creates a stunning image in seconds.' },
  { icon: Wand2, step: '03', title: 'Customize & Refine', description: 'Fine-tune with our editor. Adjust style, colors, composition, and more.' },
  { icon: Download, step: '04', title: 'Export & Share', description: 'Download in HD quality. Share directly to any social platform instantly.' },
]

const testimonials = [
  { name: 'Sarah Chen', role: 'Content Creator - 500K Subs', initials: 'SC', color: '#ec4899', rating: 5, text: 'ImgAI completely transformed my workflow. What used to take me hours in Photoshop now takes seconds. The quality is absolutely mind-blowing.' },
  { name: 'Marcus Johnson', role: 'Marketing Director at TechCorp', initials: 'MJ', color: '#3b82f6', rating: 5, text: 'We use ImgAI for all our social media graphics. ROI increased 340% in just 2 months. Our clients love the professional quality.' },
  { name: 'Emily Rodriguez', role: 'Designer - 2M Followers', initials: 'ER', color: '#8b5cf6', rating: 5, text: 'The best AI image tool I have tried. The cinematic quality is on par with professional editing suites. Total game changer!' },
  { name: 'David Park', role: 'Startup Founder & CEO', initials: 'DP', color: '#10b981', rating: 5, text: 'Saved us $50K+ in design costs. ImgAI delivers professional results that our clients absolutely love. Amazing tool!' },
  { name: 'Lisa Wang', role: 'Brand Manager at NovaCo', initials: 'LW', color: '#f59e0b', rating: 5, text: 'The text-to-image feature is mind-blowing. We create personalized campaigns at massive scale now. Absolutely revolutionary.' },
  { name: 'Alex Thompson', role: 'Freelance Designer', initials: 'AT', color: '#06b6d4', rating: 5, text: 'I was skeptical at first, but ImgAI exceeded all my expectations. Its now an essential part of my creative toolkit!' },
]

export default function Home() {
  return (
    <>
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
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 20px', borderRadius: 9999, marginBottom: 32,
            background: 'rgba(109,59,255,0.12)', border: '1px solid rgba(109,59,255,0.3)',
            color: '#9d9dff', fontSize: 13, fontWeight: 600,
          }}>
            <Sparkles size={14} /> Powered by Next-Gen AI - 100% FREE
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: 'white',
          }}>
            Create Stunning Images<br />
            <span className="gradient-text">With the Power of AI</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#6d6d8a',
            maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7,
          }}>
            Transform any idea into professional-quality AI images in seconds.
            Describe it, generate it, share it - no design skills required.
          </p>

          <div className="glass" style={{
            borderRadius: 20, padding: 8, maxWidth: 680, margin: '0 auto 24px',
            border: '1px solid rgba(109,59,255,0.2)',
          }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder='e.g. "A cinematic sunset over mountains with epic clouds..."'
                style={{
                  flex: 1, minWidth: 200, padding: '14px 16px',
                  background: 'transparent', border: 'none', color: 'white',
                  fontSize: 15, outline: 'none',
                }}
              />
              <Link href="/generate" className="btn-primary" style={{ gap: 8, whiteSpace: 'nowrap' }}>
                <Zap size={16} /> Generate Image
              </Link>
            </div>
          </div>

          <p style={{ color: '#47475d', fontSize: 13, marginBottom: 48 }}>
            No credit card required - Unlimited free generations - Instant results
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/generate" style={{
              display: 'flex', alignItems: 'center', gap: 8,
              color: '#9d9dff', textDecoration: 'none', fontSize: 15, fontWeight: 500,
            }}>
              Start creating now <ArrowRight size={16} />
            </Link>
            <Link href="/gallery" style={{
              display: 'flex', alignItems: 'center', gap: 10,
              color: '#6d6d8a', textDecoration: 'none', fontSize: 15,
            }}>
              <div className="glass" style={{
                width: 40, height: 40, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <Play size={14} color="white" fill="white" style={{ marginLeft: 2 }} />
              </div>
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      <StatsBar />

      <section style={{ padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ right: '-15%', top: '20%' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader
            badge="Packed with Features"
            title="Everything You Need to"
            highlight="Create Amazing Images"
            subtitle="State-of-the-art AI tools that make professional image creation accessible to everyone."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {features.map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-blue" style={{ left: '-10%', top: '30%' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader title="How It" highlight="Works" subtitle="Create professional AI images in four simple steps." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', position: 'relative' }}>
            {steps.map((step, i) => (
              <div key={i} className="glass card-hover" style={{ borderRadius: 20, padding: '2rem', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 64, fontWeight: 900, color: 'rgba(109,59,255,0.08)', lineHeight: 1, marginBottom: 16 }}>{step.step}</div>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(109,59,255,0.12)', border: '1px solid rgba(109,59,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <step.icon size={22} color="#9d9dff" />
                </div>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: '#6d6d8a', fontSize: 14, lineHeight: 1.7 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ right: '-10%', top: '0' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader title="Loved by" highlight="50,000+ Creators" subtitle="Join thousands of creators and businesses already using ImgAI." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
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

      <CTASection />
    </>
  )
}
