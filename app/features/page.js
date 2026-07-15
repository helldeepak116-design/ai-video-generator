import SectionHeader from '@/components/SectionHeader'
import FeatureCard from '@/components/FeatureCard'
import CTASection from '@/components/CTASection'
import {
  Image as ImageIcon, Wand2, Globe, Zap, Shield, Layers, Palette, Music, Clock,
  Camera, Type, Share2, Smartphone, MonitorPlay,
  Sliders, Film, BookOpen, Cpu, Download,
} from 'lucide-react'

const categories = [
  {
    title: 'AI Generation',
    features: [
      { icon: Type, title: 'Text to Image', description: 'Describe any scene in natural language and watch AI turn it into stunning imagery with matching visuals, colors, and atmosphere.', accent: '#6d3bff' },
      { icon: ImageIcon, title: 'Image to Image', description: 'Upload any image and transform it. AI applies new styles, moods, or completely reimagines your original.', accent: '#00d4ff' },
      { icon: Wand2, title: 'AI Enhancement', description: 'Upscale and enhance existing images. Fix low resolution, remove noise, improve details automatically.', accent: '#f472b6' },
      { icon: Cpu, title: 'Multi-Style Blend', description: 'Combine multiple art styles in a single image. Create unique hybrids like anime meets watercolor.', accent: '#34d399' },
    ],
  },
  {
    title: 'Creative Tools',
    features: [
      { icon: Palette, title: '50+ Art Styles', description: 'Cinematic, cartoon, anime, watercolor, oil painting, 3D render, pixel art, noir, vintage, neon and more.', accent: '#f472b6' },
      { icon: Camera, title: 'Style Presets', description: 'Professional camera settings - portrait mode, macro, wide angle, tilt-shift, and more effects.', accent: '#6d3bff' },
      { icon: Wand2, title: 'AI Magic Editor', description: 'Edit intelligently with AI. Remove objects, change backgrounds, add elements, or modify colors instantly.', accent: '#00d4ff' },
      { icon: Sliders, title: 'Fine-Tune Controls', description: 'Adjust creativity, style strength, color grading, composition, and dozens of other parameters.', accent: '#f59e0b' },
    ],
  },
  {
    title: 'Language & Global',
    features: [
      { icon: Globe, title: '30+ Languages', description: 'Create images from prompts in over 30 languages. Perfect for global content creation.', accent: '#00d4ff' },
      { icon: BookOpen, title: 'Prompt Assistant', description: 'AI helps improve your prompts for better results. Get suggestions and enhancements automatically.', accent: '#f472b6' },
      { icon: Type, title: 'Multi-Prompt Support', description: 'Combine multiple prompts to create complex scenes with detailed control over each element.', accent: '#34d399' },
    ],
  },
  {
    title: 'Export & Share',
    features: [
      { icon: MonitorPlay, title: 'HD Resolution', description: 'Export images up to HD resolution with perfect color grading and quality output for any use.', accent: '#f59e0b' },
      { icon: Download, title: 'Multiple Formats', description: 'Export in JPG, PNG, WEBP formats. Each optimized for its use case - web, print, or social media.', accent: '#6d3bff' },
      { icon: Share2, title: 'Direct Publishing', description: 'Share directly to Instagram, Twitter, Pinterest, and Facebook with optimized formats.', accent: '#34d399' },
      { icon: Layers, title: 'Batch Processing', description: 'Generate hundreds of images from a single prompt list. Perfect for marketing campaigns.', accent: '#00d4ff' },
    ],
  },
  {
    title: 'Platform & Access',
    features: [
      { icon: Zap, title: 'Lightning Fast', description: 'Optimized infrastructure generates images in under 10 seconds. Instant results every time.', accent: '#f59e0b' },
      { icon: Smartphone, title: 'Mobile Friendly', description: 'Create and edit on any device. Our responsive interface works flawlessly on phones and tablets.', accent: '#f472b6' },
      { icon: Shield, title: 'Commercial Rights', description: 'Full commercial rights on all generated content. Use in ads, products, and client projects freely.', accent: '#34d399' },
      { icon: Clock, title: 'Unlimited Free', description: 'Create unlimited images completely free forever. No credit card, no hidden fees.', accent: '#6d3bff' },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ top: 0, left: '25%' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', marginBottom: 20 }}>
            All <span className="gradient-text">Features</span>
          </h1>
          <p style={{ color: '#6d6d8a', fontSize: 18, lineHeight: 1.7 }}>
            Discover every tool that makes ImgAI the most powerful AI image generation platform on the market.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        {categories.map((cat, ci) => (
          <section key={ci} style={{ paddingBottom: '5rem' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 28, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 12 }}>
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
