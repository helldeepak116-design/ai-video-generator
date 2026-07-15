import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({ name, role, text, rating = 5, color = '#6d3bff', initials }) {
  return (
    <div className="glass card-hover" style={{
      borderRadius: 20, padding: '1.75rem',
      border: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={15} color="#f59e0b" fill="#f59e0b" />
        ))}
      </div>
      <div style={{ position: 'relative', marginBottom: 20 }}>
        <Quote size={32} color="rgba(109,59,255,0.2)" style={{ position: 'absolute', top: -4, left: -4 }} />
        <p style={{ color: '#b4b4c5', fontSize: 14, lineHeight: 1.7, paddingLeft: 16 }}>{text}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: color, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontWeight: 700, fontSize: 14, color: 'white', flexShrink: 0,
        }}>
          {initials}
        </div>
        <div>
          <p style={{ color: 'white', fontWeight: 600, fontSize: 14 }}>{name}</p>
          <p style={{ color: '#6d6d8a', fontSize: 12 }}>{role}</p>
        </div>
      </div>
    </div>
  )
}