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
      { q: 'What is ImgAI?', a: 'ImgAI is an AI-powered image generation platform that turns text descriptions into professional-quality images in seconds. Simply describe what you want, and our AI creates it - no editing skills required.' },
      { q: 'How does AI image generation work?', a: 'Our AI uses advanced deep learning models trained on millions of images. When you write a text prompt, the AI interprets your description, generates the image, applies your chosen art style, and delivers stunning results instantly.' },
      { q: 'Do I need any design experience?', a: 'Not at all! ImgAI is designed for everyone - from total beginners to professional designers. Simply describe your image in plain English, pick a style, and click generate.' },
      { q: 'What kinds of images can I create?', a: 'You can create virtually any type of image: portraits, landscapes, product photos, social media graphics, marketing visuals, art pieces, illustrations, character designs, and much more.' },
    ],
  },
  {
    category: 'Pricing & Plans',
    icon: '💳',
    questions: [
      { q: 'Is there a free plan?', a: 'Yes! Our free plan includes unlimited image generations. No credit card required. You can sign up and start generating immediately.' },
      { q: 'Can I cancel my subscription anytime?', a: 'Absolutely. You can cancel at any time from your account settings. No cancellation fees whatsoever.' },
      { q: 'Do you offer refunds?', a: 'Yes, we offer a 7-day money-back guarantee on all new paid plan subscriptions. Contact our support team within 7 days for a full refund.' },
      { q: 'Is there an annual discount?', a: 'Yes! Annual plans are discounted by 40% compared to monthly billing. This is our best value option for serious creators.' },
    ],
  },
  {
    category: 'Technical Questions',
    icon: '⚙️',
    questions: [
      { q: 'What image formats and resolutions are supported?', a: 'We support JPG, PNG, and WEBP export formats. Resolutions range from HD to Ultra HD. Choose the perfect format for your needs.' },
      { q: 'How long does image generation take?', a: 'Most images are ready in under 10 seconds. Our optimized infrastructure ensures fast delivery every time.' },
      { q: 'Is there an API available?', a: 'Yes! Our Business and Enterprise plans include full REST API access with comprehensive documentation and SDKs for Python, Node.js, and Go.' },
      { q: 'What are the input prompt length limits?', a: 'Prompts can be up to 2,000 characters. We recommend being detailed and specific for the best results.' },
      { q: 'Can I use my own images as input?', a: 'Yes, our Image-to-Image feature lets you upload images and transform them with AI. Supports PNG, JPG, WEBP formats up to 10MB.' },
    ],
  },
  {
    category: 'Content & Rights',
    icon: '⚖️',
    questions: [
      { q: 'Who owns the images I generate?', a: 'You own all images you generate with ImgAI. We make no claim to ownership of your generated content. All paid plans include a full commercial license.' },
      { q: 'Can I use generated images commercially?', a: 'Yes! All Pro, Business, and Enterprise plans include full commercial rights. Use images in ads, client projects, products, social media, and more.' },
      { q: 'What content is not allowed?', a: 'Our platform prohibits generating: explicit sexual content, content depicting real people without consent, violence-promoting content, deepfakes of public figures, and anything illegal.' },
      { q: 'How does ImgAI handle data privacy?', a: 'We take privacy seriously. Your prompts and generated images are yours. We never sell personal data. Full details in our Privacy Policy.' },
    ],
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
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
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ top: 0, left: '30%' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p style={{ color: '#6d6d8a', fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>Everything you need to know about ImgAI.</p>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search questions..." className="input-field" style={{ maxWidth: 480, margin: '0 auto', display: 'block', fontSize: 15, padding: '14px 20px' }} />
        </div>
      </section>

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

          <div className="glass" style={{ borderRadius: 20, padding: '2rem', border: '1px solid rgba(109,59,255,0.2)', textAlign: 'center' }}>
            <MessageSquare size={32} color="#9d9dff" style={{ margin: '0 auto 12px', display: 'block' }} />
            <h3 style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Still have questions?</h3>
            <p style={{ color: '#6d6d8a', marginBottom: 20, fontSize: 14 }}>Our friendly support team is here to help you.</p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 14, padding: '10px 24px' }}>Contact Support</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
