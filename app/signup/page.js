'use client'

import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function SignupPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1.5rem 2rem', position: 'relative' }}>
      <div className="orb-purple" style={{ top: '20%', right: '15%' }} />
      <div className="orb-blue" style={{ bottom: '10%', left: '15%' }} />

      <div style={{ width: '100%', maxWidth: 440, position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 20 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, #6d3bff, #00d4ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(109,59,255,0.4)' }}>
              <Sparkles size={22} color="white" />
            </div>
            <span style={{ fontSize: 22, fontWeight: 900, color: 'white' }}>Vid<span className="gradient-text">AI</span></span>
          </Link>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: 'white', marginBottom: 6 }}>Create your account</h1>
          <p style={{ color: '#6d6d8a', fontSize: 15 }}>Start creating AI videos for free</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SignUp 
            routing="hash"
            signInUrl="/login"
            forceRedirectUrl="/generate"
          />
        </div>
      </div>
    </div>
  )
}