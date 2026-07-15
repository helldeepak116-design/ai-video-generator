import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'

export default function PricingCard({ name, price, period, description, features, popular, cta, href = '/signup' }) {
  return (
    <div style={{
      position: 'relative',
      background: popular
        ? 'linear-gradient(135deg, rgba(109,59,255,0.15), rgba(0,212,255,0.05))'
        : 'rgba(255,255,255,0.03)',
      border: popular ? '1px solid rgba(109,59,255,0.5)' : '1px solid rgba(255,255,255,0.07)',
      borderRadius: 24, padding: '2.5rem 2rem',
      boxShadow: popular ? '0 0 40px rgba(109,59,255,0.15)' : 'none',
    }} className="card-hover">
      {popular && (
        <div style={{
          position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, #6d3bff, #00d4ff)',
          padding: '6px 20px', borderRadius: 9999,
          display: 'flex', alignItems: 'center', gap: 6,
          fontSize: 12, fontWeight: 700, color: 'white', whiteSpace: 'nowrap',
          boxShadow: '0 4px 20px rgba(109,59,255,0.4)',
        }}>
          <Sparkles size={12} /> Most Popular
        </div>
      )}

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ color: '#9d9dff', fontSize: 13, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>{name}</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 4, marginBottom: 8 }}>
          <span style={{ fontSize: 48, fontWeight: 900, color: 'white', lineHeight: 1 }}>${price}</span>
          {period && <span style={{ color: '#6d6d8a', marginBottom: 8 }}>/{period}</span>}
        </div>
        <p style={{ color: '#6d6d8a', fontSize: 14 }}>{description}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: '2rem' }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <div style={{
              width: 20, height: 20, borderRadius: 6,
              background: 'rgba(109,59,255,0.2)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1,
            }}>
              <Check size={12} color="#9d9dff" />
            </div>
            <span style={{ color: '#b4b4c5', fontSize: 14 }}>{f}</span>
          </div>
        ))}
      </div>

      <Link href={href} className={popular ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', textAlign: 'center' }}>
        {cta || 'Get Started'}
      </Link>
    </div>
  )
}