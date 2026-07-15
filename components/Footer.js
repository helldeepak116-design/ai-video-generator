'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, CheckCircle } from 'lucide-react'

const NEWSLETTER_URL = 'https://formspree.io/f/YOUR-NEWSLETTER-ID'

const cols = {
  Product: [
    { name: 'Features', href: '/features' },
    { name: 'Generate', href: '/generate' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Pricing', href: '/pricing' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  Resources: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Docs', href: '#' },
    { name: 'Community', href: '#' },
  ],
  Legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const response = await fetch(NEWSLETTER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email, subject: 'New Newsletter Subscriber!', message: `New subscriber: ${email}` }),
      })
      if (response.ok) {
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 5000)
      }
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  return (
    <footer style={{ background: '#080810', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ padding: '3rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 4 }}>Stay in the loop</h3>
            <p style={{ color: '#6d6d8a', fontSize: 14 }}>Get AI creation tips & product updates.</p>
          </div>
          {subscribed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', borderRadius: 12, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)' }}>
              <CheckCircle size={18} color="#34d399" />
              <span style={{ color: '#34d399', fontSize: 14, fontWeight: 600 }}>Subscribed! Check your email 📧</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 8 }}>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="input-field" style={{ width: 260 }} />
              <button type="submit" disabled={loading} className="btn-primary" style={{ whiteSpace: 'nowrap', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>

        <div style={{ padding: '3rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem' }}>
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #6d3bff, #00d4ff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={16} color="white" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>Img<span className="gradient-text">AI</span></span>
            </Link>
            <p style={{ color: '#6d6d8a', fontSize: 13, lineHeight: 1.6 }}>Create stunning AI images from text in seconds. 100% free.</p>
          </div>
          {Object.entries(cols).map(([cat, items]) => (
            <div key={cat}>
              <h4 style={{ color: 'white', fontSize: 13, fontWeight: 600, marginBottom: 16 }}>{cat}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <Link key={item.name} href={item.href} className="footer-link" style={{ color: '#6d6d8a', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ color: '#47475d', fontSize: 13 }}>© {new Date().getFullYear()} ImgAI. All rights reserved.</p>
          <p style={{ color: '#47475d', fontSize: 13 }}>Built with ❤️ & Next.js</p>
        </div>
      </div>
      <style>{`.footer-link:hover { color: #9d9dff !important; }`}</style>
    </footer>
  )
}
