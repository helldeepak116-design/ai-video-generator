'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 2000)
  }

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Header */}
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ top: 0, right: '20%' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p style={{ color: '#6d6d8a', fontSize: 18, lineHeight: 1.7 }}>
            Questions, feedback, partnership? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem 5rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }} className="contact-grid">

        {/* Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { icon: Mail, label: 'Email Us', value: 'hello@vidai.com', sub: 'Reply within 24 hours' },
            { icon: Phone, label: 'Call Us', value: '+1 (555) 123-4567', sub: 'Mon–Fri, 9am–6pm PST' },
            { icon: MapPin, label: 'Visit Us', value: 'San Francisco, CA', sub: '123 AI Street, Suite 100' },
          ].map((item, i) => (
            <div key={i} className="glass card-hover" style={{ borderRadius: 18, padding: '1.5rem', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(109,59,255,0.12)', border: '1px solid rgba(109,59,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <item.icon size={18} color="#9d9dff" />
                </div>
                <div>
                  <p style={{ color: '#6d6d8a', fontSize: 12, marginBottom: 4 }}>{item.label}</p>
                  <p style={{ color: 'white', fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{item.value}</p>
                  <p style={{ color: '#47475d', fontSize: 12 }}>{item.sub}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Quick Links */}
          <div className="glass" style={{ borderRadius: 18, padding: '1.5rem', border: '1px solid rgba(255,255,255,0.07)', marginTop: 4 }}>
            <p style={{ color: 'white', fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Quick Links</p>
            {[
              { icon: MessageSquare, label: 'Live Chat', href: '#' },
              { icon: Clock, label: 'View FAQ', href: '/faq' },
              { icon: Globe, label: 'Join Discord', href: '#' },
            ].map((link, i) => (
              <a key={i} href={link.href} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', color: '#6d6d8a', textDecoration: 'none', fontSize: 14, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#9d9dff'}
                onMouseLeave={e => e.currentTarget.style.color = '#6d6d8a'}
              >
                <link.icon size={16} /> {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="glass" style={{ borderRadius: 24, padding: '2.5rem', border: '1px solid rgba(255,255,255,0.07)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <CheckCircle size={32} color="#34d399" />
              </div>
              <h3 style={{ color: 'white', fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Message Sent!</h3>
              <p style={{ color: '#6d6d8a', marginBottom: 24 }}>We'll get back to you within 24 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                className="btn-secondary" style={{ fontSize: 14 }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 style={{ color: 'white', fontWeight: 800, fontSize: 22, marginBottom: 24 }}>Send us a message</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ color: '#6d6d8a', fontSize: 13, display: 'block', marginBottom: 8 }}>Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe" className="input-field" />
                  </div>
                  <div>
                    <label style={{ color: '#6d6d8a', fontSize: 13, display: 'block', marginBottom: 8 }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com" className="input-field" />
                  </div>
                </div>
                <div>
                  <label style={{ color: '#6d6d8a', fontSize: 13, display: 'block', marginBottom: 8 }}>Topic *</label>
                  <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className="input-field" style={{ cursor: 'pointer' }}>
                    <option value="">Select a topic...</option>
                    {['General Inquiry', 'Technical Support', 'Billing', 'Enterprise Sales', 'Partnership', 'Bug Report', 'Feature Request'].map(o => (
                      <option key={o} value={o} style={{ background: '#0d0d18' }}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ color: '#6d6d8a', fontSize: 13, display: 'block', marginBottom: 8 }}>Message *</label>
                  <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help you..." rows={6}
                    style={{ width: '100%', padding: '12px 16px', resize: 'vertical', background: 'rgba(13,13,24,0.8)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, color: 'white', fontSize: 14, outline: 'none', fontFamily: 'inherit', lineHeight: 1.6, transition: 'border-color 0.3s', minHeight: 140 }}
                    onFocus={e => e.target.style.borderColor = '#6d3bff'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
                <button type="submit" disabled={sending} className="btn-primary" style={{ gap: 10, fontSize: 15, padding: '14px 24px', opacity: sending ? 0.7 : 1, cursor: sending ? 'wait' : 'pointer' }}>
                  {sending ? 'Sending...' : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}