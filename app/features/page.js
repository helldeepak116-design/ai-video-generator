import SectionHeader from '@/components/SectionHeader'
import FeatureCard from '@/components/FeatureCard'
import CTASection from '@/components/CTASection'
import {
  Video, Wand2, Globe, Zap, Shield, Layers, Palette, Music, Clock,
  Camera, Mic, Type, Share2, Smartphone, MonitorPlay,
  Sliders, Film, Image, BookOpen, Cpu, Download,
} from 'lucide-react'

const categories = [
  {
    title: 'AI Generation',
    features: [
      { icon: Type, title: 'Text to Video', description: 'Describe any scene in natural language and watch AI turn it into stunning video footage with matching visuals, motion, and atmosphere.', accent: '#6d3bff' },
      { icon: Image, title: 'Image to Video', description: 'Upload any image and bring it to life. AI adds natural motion, cinematic camera movements, particle effects, and dynamic animations.', accent: '#00d4ff' },
      { icon: Film, title: 'Video to Video', description: 'Transform existing footage with AI. Change style, mood, lighting, and environment while preserving the original motion and content.', accent: '#f472b6' },
      { icon: Cpu, title: 'Multi-Scene Storyboard', description: 'Create complex multi-scene videos. Our AI intelligently transitions between scenes with consistent style and smooth narrative flow.', accent: '#34d399' },
    ],
  },
  {
    title: 'Creative Tools',
    features: [
      { icon: Palette, title: '50+ Art Styles', description: 'Cinematic, cartoon, anime, watercolor, oil painting, 3D render, pixel art, noir, vintage, neon and many more creative styles to choose from.', accent: '#f472b6' },
      { icon: Camera, title: 'Virtual Camera', description: 'Control virtual camera movements — pan, tilt, zoom, dolly, crane shots, whip pans, and complex cinematic tracking shots.', accent: '#6d3bff' },
      { icon: Wand2, title: 'AI Magic Editor', description: 'Edit intelligently with AI that understands context. Remove unwanted objects, change backgrounds, extend scenes, and modify elements.', accent: '#00d4ff' },
      { icon: Sliders, title: 'Fine-Tune Controls', description: 'Adjust creativity, motion intensity, color grading, aspect ratio, frame rate, and dozens of other parameters to perfect your video.', accent: '#f59e0b' },
    ],
  },
  {
    title: 'Audio & Language',
    features: [
      { icon: Music, title: 'AI Music Generation', description: 'Auto-generate royalty-free background music that perfectly matches the mood, pace, and energy of your video content automatically.', accent: '#34d399' },
      { icon: Mic, title: 'AI Voiceover', description: 'Generate natural-sounding voiceovers in 100+ voices and 30+ languages with emotional expression, pacing, and professional quality.', accent: '#6d3bff' },
      { icon: Globe, title: '30+ Languages', description: 'Create videos with subtitles and voiceovers in over 30 languages. Perfect for reaching global audiences with localized content.', accent: '#00d4ff' },
      { icon: BookOpen, title: 'Auto Subtitles', description: 'Automatically generate accurate, timed subtitles in any language. Customize fonts, colors, animations, and positioning easily.', accent: '#f472b6' },
    ],
  },
  {
    title: 'Export & Scale',
    features: [
      { icon: MonitorPlay, title: '4K Resolution', description: 'Export videos up to 4K (3840×2160) with HDR support, perfect color grading, and cinema-quality output for any screen.', accent: '#f59e0b' },
      { icon: Download, title: 'Multiple Formats', description: 'Export in MP4, WebM, MOV, AVI, and GIF. Each format optimized for its platform — social media, web, broadcast, or archival.', accent: '#6d3bff' },
      { icon: Share2, title: 'Direct Publishing', description: 'Publish directly to YouTube, TikTok, Instagram Reels, Twitter, and LinkedIn with platform-optimized formats and metadata.', accent: '#34d399' },
      { icon: Layers, title: 'Batch Processing', description: 'Generate hundreds of videos simultaneously from a single prompt list or CSV. Perfect for large-scale content marketing campaigns.', accent: '#00d4ff' },
    ],
  },
  {
    title: 'Platform & Access',
    features: [
      { icon: Zap, title: 'Lightning Fast', description: 'Our optimized GPU infrastructure generates videos in under 2 minutes. Priority processing ensures Business users get results instantly.', accent: '#f59e0b' },
      { icon: Smartphone, title: 'Mobile Friendly', description: 'Create and edit videos on any device. Our fully responsive interface works flawlessly on phones, tablets, and desktops.', accent: '#f472b6' },
      { icon: Shield, title: 'Commercial Rights', description: 'Full commercial rights on all generated content. Use in ads, social media, presentations, products, and client projects freely.', accent: '#34d399' },
      { icon: Clock, title: 'Up to 10 Min Videos', description: 'Create long-form videos up to 10 minutes long. Perfect for YouTube, online courses, corporate presentations, and explainer videos.', accent: '#6d3bff' },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Header */}
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ top: 0, left: '25%' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', marginBottom: 20 }}>
            All <span className="gradient-text">Features</span>
          </h1>
          <p style={{ color: '#6d6d8a', fontSize: 18, lineHeight: 1.7 }}>
            Discover every tool that makes VidAI the most powerful AI video generation platform on the market.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        {categories.map((cat, ci) => (
          <section key={ci} style={{ paddingBottom: '5rem' }}>
            <h2 style={{
              fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 28,
              paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.07)',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ width: 8, height: 28, borderRadius: 4, background: 'linear-gradient(180deg, #6d3bff, #00d4ff)', display: 'inline-block' }} />
              {cat.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {cat.features.map((f, fi) => <FeatureCard key={fi} {...f} />)}
            </div>
          </section>
        ))}
      </div>

      <CTASection />
    </div>
  )
}