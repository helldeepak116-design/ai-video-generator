'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react'
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'

const links = [
  { name: 'Features', href: '/features' },
  { name: 'Generate', href: '/generate' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Pricing', href: '/pricing' },
]
const moreLinks = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { isSignedIn, isLoaded } = useUser()

  useEffect(() => {
    setMounted(true)
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(13,13,24,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'linear-gradient(135deg, #6d3bff, #00d4ff)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(109,59,255,0.4)',
            }}>
              <Sparkles size={20} color="white" />
            </div>
            <span style={{ fontSize: 20, fontWeight: 800, color: 'white' }}>
              Vid<span className="gradient-text">AI</span>
            </span>
          </Link>

          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {links.map(l => (
              <Link key={l.name} href={l.href} className="nav-link" style={{
                padding: '8px 16px', color: '#9d9dff', textDecoration: 'none',
                borderRadius: 8, fontSize: 14, fontWeight: 500,
              }}>
                {l.name}
              </Link>
            ))}

            <div style={{ position: 'relative' }}>
              <button onClick={() => setDropdown(!dropdown)} style={{
                display: 'flex', alignItems: 'center', gap: 4,
                padding: '8px 16px', color: '#9d9dff', background: 'none',
                border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 500,
                cursor: 'pointer',
              }}>
                More <ChevronDown size={14} style={{ transform: dropdown ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>
              {dropdown && (
                <div className="glass" style={{
                  position: 'absolute', top: '100%', left: 0, marginTop: 8,
                  borderRadius: 12, overflow: 'hidden', minWidth: 160,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                }}>
                  {moreLinks.map(l => (
                    <Link key={l.name} href={l.href} onClick={() => setDropdown(false)} className="nav-link" style={{
                      display: 'block', padding: '12px 16px', color: '#b4b4c5',
                      textDecoration: 'none', fontSize: 14,
                    }}>
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {mounted && isLoaded ? (
              isSignedIn ? (
                <>
                  <Link href="/generate" className="btn-secondary" style={{ fontSize: 14, padding: '8px 16px' }}>
                    Dashboard
                  </Link>
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: { width: 38, height: 38 }
                      }
                    }}
                  />
                </>
              ) : (
                <>
                  <Link href="/login" style={{ color: '#9d9dff', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
                    Log In
                  </Link>
                  <Link href="/signup" className="btn-primary" style={{ fontSize: 14, padding: '10px 20px' }}>
                    Get Started Free
                  </Link>
                </>
              )
            ) : (
              <div style={{ width: 200, height: 40 }} />
            )}
          </div>

          <button onClick={() => setOpen(!open)} className="show-mobile" style={{
            background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 8,
          }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[...links, ...moreLinks].map(l => (
              <Link key={l.name} href={l.href} onClick={() => setOpen(false)} style={{
                padding: '12px 16px', color: '#9d9dff', textDecoration: 'none',
                borderRadius: 8, fontSize: 15, fontWeight: 500,
              }}>
                {l.name}
              </Link>
            ))}
            <div style={{ paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {mounted && isLoaded && (
                isSignedIn ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px' }}>
                    <UserButton afterSignOutUrl="/" />
                    <span style={{ color: '#9d9dff', fontSize: 14 }}>My Account</span>
                  </div>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setOpen(false)} className="btn-secondary" style={{ textAlign: 'center' }}>Log In</Link>
                    <Link href="/signup" onClick={() => setOpen(false)} className="btn-primary" style={{ textAlign: 'center' }}>Get Started Free</Link>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-link:hover { color: white !important; background: rgba(255,255,255,0.06); }
        @media(max-width:768px){ .hide-mobile{display:none!important} .show-mobile{display:block!important} }
        @media(min-width:769px){ .show-mobile{display:none!important} .hide-mobile{display:flex!important} }
      `}</style>
    </nav>
  )
}