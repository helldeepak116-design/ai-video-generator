export default function FeatureCard({ icon: Icon, title, description, accent = '#6d3bff' }) {
  return (
    <div className="glass card-hover" style={{
      borderRadius: 20, padding: '1.75rem',
      border: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: `${accent}18`, border: `1px solid ${accent}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
      }}>
        <Icon size={22} color={accent} />
      </div>
      <h3 style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{title}</h3>
      <p style={{ color: '#6d6d8a', fontSize: 14, lineHeight: 1.7 }}>{description}</p>
    </div>
  )
}