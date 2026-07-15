const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '2M+', label: 'Videos Created' },
  { value: '150+', label: 'Countries' },
  { value: '4.9★', label: 'Average Rating' },
]

export default function StatsBar() {
  return (
    <section style={{ padding: '0 0 5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="glass" style={{
          borderRadius: 20, padding: '2.5rem 3rem',
          border: '1px solid rgba(255,255,255,0.07)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '2rem', textAlign: 'center',
        }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className="gradient-text" style={{ fontSize: 36, fontWeight: 900, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: '#6d6d8a', fontSize: 14, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}