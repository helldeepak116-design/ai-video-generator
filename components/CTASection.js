import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTASection() {
  return (
    <section style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="glass" style={{ borderRadius: 28, padding: '4rem 3rem', border: '1px solid rgba(109,59,255,0.2)', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', gap: 8, padding: '6px 16px', borderRadius: 9999, marginBottom: 24, background: 'rgba(109,59,255,0.12)', border: '1px solid rgba(109,59,255,0.3)', color: '#9d9dff', fontSize: 13 }}>
            <Zap size={13} /> No credit card required
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Ready to Create <br /><span className="gradient-text">Amazing Videos?</span>
          </h2>
          <p style={{ color: '#6d6d8a', fontSize: 18, margin: '0 auto 36px', maxWidth: 440 }}>Join 50,000+ creators using VidAI.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/signup" className="btn-primary" style={{ padding: '14px 32px' }}>Start Free Today <ArrowRight size={18} /></Link>
            <Link href="/contact" className="btn-secondary" style={{ padding: '14px 32px' }}>Talk to Sales</Link>
          </div>
        </div>
      </div>
    </section>
  )
}