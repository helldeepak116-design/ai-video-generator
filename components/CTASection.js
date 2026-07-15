import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTASection() {
  return (
    <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb-purple" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="glass" style={{
          borderRadius: 28, padding: '4rem 3rem',
          border: '1px solid rgba(109,59,255,0.2)',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(109,59,255,0.08), transparent 70%)',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px',
              borderRadius: 9999, marginBottom: 24,
              background: 'rgba(109,59,255,0.12)', border: '1px solid rgba(109,59,255,0.3)',
              color: '#9d9dff', fontSize: 13, fontWeight: 600,
            }}>
              <Zap size={13} /> No credit card required
            </div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: 'white', marginBottom: 16, lineHeight: 1.2 }}>
              Ready to Create <br /><span className="gradient-text">Amazing Images?</span>
            </h2>
            <p style={{ color: '#6d6d8a', fontSize: 18, marginBottom: 36, maxWidth: 440, margin: '0 auto 36px' }}>
              Join 50,000+ creators using ImgAI to produce stunning images at scale.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/signup" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px', gap: 8 }}>
                Start Free Today <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ fontSize: 16, padding: '14px 32px' }}>
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
