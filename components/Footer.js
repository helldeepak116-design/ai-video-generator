'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'

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
  return (
    <footer style={{ background: '#080810', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          padding: '3rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
          alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 4 }}>Stay in the loop</h3>
            <p style={{ color: '#6d6d8a', fontSize: 14 }}>Get AI video tips & updates.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input type="email" placeholder="your@email.com" className="input-field" style={{ width: 260 }} />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>

        <div style={{
          padding: '3rem 0', display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem',
        }}>
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, #6d3bff, #00d4ff)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Sparkles size={16} color="white" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>
                Vid<span className="gradient-text">AI</span>
              </span>
            </Link>
            <p style={{ color: '#6d6d8a', fontSize: 13, lineHeight: 1.6 }}>
              Create stunning AI videos from text in minutes.
            </p>
          </div>

          {Object.entries(cols).map(([cat, items]) => (
            <div key={cat}>
              <h4 style={{ color: 'white', fontSize: 13, fontWeight: 600, marginBottom: 16 }}>{cat}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <Link key={item.name} href={item.href} className="footer-link" style={{
                    color: '#6d6d8a', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s',
                  }}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', flexWrap: 'wrap', gap: '1rem',
          alignItems: 'center', justifyContent: 'space-between',
        }}>
          <p style={{ color: '#47475d', fontSize: 13 }}>© {new Date().getFullYear()} VidAI. All rights reserved.</p>
          <p style={{ color: '#47475d', fontSize: 13 }}>Built with ❤️ & Next.js</p>
        </div>
      </div>
      <style>{`.footer-link:hover { color: #9d9dff !important; }`}</style>
    </footer>
  )
}