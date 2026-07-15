export default function SectionHeader({ badge, title, highlight, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      {badge && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 16px', borderRadius: 9999, marginBottom: 20,
          background: 'rgba(109,59,255,0.12)', border: '1px solid rgba(109,59,255,0.25)',
          color: '#9d9dff', fontSize: 13, fontWeight: 500,
        }}>
          {badge}
        </div>
      )}
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 16 }}>
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p style={{ color: '#6d6d8a', fontSize: 18, maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}