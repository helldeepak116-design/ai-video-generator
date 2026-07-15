'use client'
import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

const FAQS = [
  {
    category: 'Getting Started',
    icon: '🚀',
    questions: [
      { q: 'What is VidAI?', a: 'VidAI is an AI-powered video generation platform that turns text descriptions into professional-quality videos in minutes. Simply describe what you want, and our AI creates it — no editing skills required.' },
      { q: 'How does AI video generation work?', a: 'Our AI uses advanced deep learning models trained on millions of videos. When you write a text prompt, the AI interprets your description, generates corresponding video frames, adds natural motion, applies your chosen art style, and composes it all into a smooth final video.' },
      { q: 'Do I need any video editing experience?', a: 'Not at all! VidAI is designed for everyone — from total beginners to professional creators. Simply describe your video in plain English, pick a style and duration, and click generate. The AI handles all the technical complexity.' },
      { q: 'What kinds of videos can I create?', a: 'You can create virtually any type of video: product showcases, social media content, YouTube videos, marketing ads, explainer videos, music visualizers, cinematic scenes, nature footage, abstract art, anime, and much more.' },
    ],
  },
  {
    category: 'Pricing & Plans',
    icon: '💳',
    questions: [
      { q: 'Is there a free plan?', a: 'Yes! Our free plan includes 5 video generations per month at 720p resolution. No credit card required. You can sign up and start generating immediately.' },
      { q: 'Can I cancel my subscription anytime?', a: 'Absolutely. You can cancel at any time from your account settings. Your subscription remains active until the end of your billing period, with no cancellation fees whatsoever.' },
      { q: 'Do you offer refunds?', a: 'Yes, we offer a 7-day money-back guarantee on all new paid plan subscriptions. If you\'re not satisfied for any reason, contact our support team within 7 days of purchase for a full refund.' },
      { q: 'Is there an annual discount?', a: 'Yes! Annual plans are discounted by 40% compared to monthly billing. This is our best value option for serious creators and businesses.' },
    ],
  },
  {
    category: 'Technical Questions',
    icon: '⚙️',
    questions: [
      { q: 'What video formats and resolutions are supported?', a: 'We support MP4, WebM, MOV, and AVI export formats. Resolutions range from 720p (Free plan) to 4K (3840×2160) on Business and Enterprise plans. Frame rates include 24fps, 30fps, and 60fps.' },
      { q: 'How long does video generation take?', a: 'Most 15-30 second videos are ready in under 2 minutes. Longer videos (2-10 minutes) typically take 3-8 minutes. Business plan users get priority processing, reducing wait times significantly.' },
      { q: 'Is there an API available?', a: 'Yes! Our Business and Enterprise plans include full REST API access. We provide comprehensive documentation, SDKs for Python, Node.js, and Go, and webhook support for async processing.' },
      { q: 'What are the input prompt length limits?', a: 'Prompts can be up to 2,000 characters. We recommend being detailed and specific — describe camera angles, lighting, mood, art style, and motion to get the best results.' },
      { q: 'Can I use my own images as input?', a: 'Yes, our Image-to-Video feature lets you upload images and animate them with AI. Supported image formats: PNG, JPG, WEBP. Maximum image size: 10MB.' },
    ],
  },
  {
    category: 'Content & Rights',
    icon: '⚖️',
    questions: [
      { q: 'Who owns the videos I generate?', a: 'You own all videos you generate with VidAI. We make no claim to ownership of your generated content. All paid plans include a full commercial license to use videos in any project.' },
      { q: 'Can I use generated videos commercially?', a: 'Yes! All Pro, Business, and Enterprise plans include full commercial rights. You can use generated videos in ads, client projects, products, social media, YouTube monetization, and more. The Free plan is for personal use only.' },
      { q: 'What content is not allowed?', a: 'Our platform prohibits generating: explicit sexual content, content depicting real people without consent, content promoting violence or terrorism, deepfakes of public figures, and anything illegal. Violations result in immediate account termination.' },
      { q: 'How does VidAI handle data privacy?', a: 'We take privacy seriously. Your prompts and generated videos are yours. We use generation data only to improve our AI models, in anonymized form. We never sell personal data. Full details in our Privacy Policy.' },
    ],
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16,
      }}>
        <span style={{ color: 'white', fontWeight: 600, fontSize: 15, lineHeight: 1.4 }}>{question}</span>
        <ChevronDown size={18} color="#6d6d8a" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
      </button>
      {open && (
        <div style={{ paddingBottom: 20, marginTop: -8 }}>
          <p style={{ color: '#6d6d8a', fontSize: 15, lineHeight: 1.8 }}>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [search, setSearch] = useState('')
  const filtered = search
    ? FAQS.map(cat => ({
      ...cat,
      questions: cat.questions.filter(q =>
        q.q.toLowerCase().includes(search.toLowerCase()) ||
        q.a.toLowerCase().includes(search.toLowerCase())
      )
    })).filter(cat => cat.questions.length > 0)
    : FAQS

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Header */}
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ top: 0, left: '30%' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p style={{ color: '#6d6d8a', fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>
            Everything you need to know about VidAI.
          </p>
          {/* Search */}
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="input-field"
            style={{ maxWidth: 480, margin: '0 auto', display: 'block', fontSize: 15, padding: '14px 20px' }}
          />
        </div>
      </section>

      {/* FAQ Sections */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#6d6d8a' }}>
              <HelpCircle size={48} color="#47475d" style={{ margin: '0 auto 16px', display: 'block' }} />
              <p>No questions found for "{search}"</p>
            </div>
          ) : (
            filtered.map((section, i) => (
              <div key={i} className="glass" style={{ borderRadius: 20, padding: '2rem', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h2 style={{ color: 'white', fontWeight: 800, fontSize: 18, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>{section.icon}</span> {section.category}
                </h2>
                <p style={{ color: '#47475d', fontSize: 13, marginBottom: 20 }}>{section.questions.length} questions</p>
                {section.questions.map((faq, j) => (
                  <FAQItem key={j} question={faq.q} answer={faq.a} />
                ))}
              </div>
            ))
          )}

          {/* Still need help */}
          <div className="glass" style={{ borderRadius: 20, padding: '2rem', border: '1px solid rgba(109,59,255,0.2)', textAlign: 'center' }}>
            <MessageSquare size={32} color="#9d9dff" style={{ margin: '0 auto 12px', display: 'block' }} />
            <h3 style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Still have questions?</h3>
            <p style={{ color: '#6d6d8a', marginBottom: 20, fontSize: 14 }}>
              Our friendly support team is here to help you.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 14, padding: '10px 24px' }}>
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}