import PricingCard from '@/components/PricingCard'
import CTASection from '@/components/CTASection'
import SectionHeader from '@/components/SectionHeader'
import { Check, X } from 'lucide-react'

const PLANS = [
  {
    name: 'FREE',
    price: '0',
    description: 'Try VidAI risk-free',
    features: ['5 videos/month', '720p resolution', 'Up to 15 seconds', '3 art styles', 'Community support', 'VidAI watermark'],
    cta: 'Start Free',
  },
  {
    name: 'PRO',
    price: '29',
    period: 'mo',
    description: 'For serious creators',
    popular: true,
    features: ['100 videos/month', 'Full HD 1080p', 'Up to 2 minutes', 'All 50+ art styles', 'AI music & voice', 'No watermark', 'Priority support', 'Commercial license', 'Batch export'],
    cta: 'Start 7-Day Free Trial',
  },
  {
    name: 'BUSINESS',
    price: '99',
    period: 'mo',
    description: 'For teams & agencies',
    features: ['Unlimited videos', '4K resolution', 'Up to 10 minutes', 'Custom styles', 'Full AI suite', 'No watermark', 'API access', 'Batch processing', '24/7 support', 'Team collaboration', 'Analytics dashboard'],
    cta: 'Start Business Trial',
  },
  {
    name: 'ENTERPRISE',
    price: '499',
    period: 'mo',
    description: 'For large organizations',
    features: ['Everything in Business', 'Custom AI model training', 'Dedicated GPU instances', 'White-label solution', 'SLA guarantee', 'Dedicated account manager', 'Custom integrations', 'SSO / SAML', 'On-premise option', 'Advanced security'],
    cta: 'Contact Sales',
    href: '/contact',
  },
]

const COMPARISON = [
  { feature: 'Videos per month', free: '5', pro: '100', biz: '∞', ent: '∞' },
  { feature: 'Max resolution', free: '720p', pro: '1080p', biz: '4K', ent: '4K+' },
  { feature: 'Max duration', free: '15s', pro: '2 min', biz: '10 min', ent: 'Custom' },
  { feature: 'Art styles', free: '3', pro: '50+', biz: '50+ Custom', ent: 'Unlimited' },
  { feature: 'AI Music', free: false, pro: true, biz: true, ent: true },
  { feature: 'AI Voiceover', free: false, pro: true, biz: true, ent: true },
  { feature: 'API Access', free: false, pro: false, biz: true, ent: true },
  { feature: 'Batch Processing', free: false, pro: false, biz: true, ent: true },
  { feature: 'Commercial License', free: false, pro: true, biz: true, ent: true },
  { feature: 'Watermark', free: true, pro: false, biz: false, ent: false },
  { feature: 'Support', free: 'Community', pro: 'Priority', biz: '24/7', ent: 'Dedicated' },
]

export default function PricingPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Header */}
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ top: 0, left: '30%' }} />
        <SectionHeader
          badge="💰 Simple Pricing"
          title="Transparent"
          highlight="Pricing"
          subtitle="Choose your plan. All paid plans include a 7-day free trial. No surprises."
        />
      </section>

      {/* Plans */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {PLANS.map((p, i) => <PricingCard key={i} {...p} />)}
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: 'white', textAlign: 'center', marginBottom: 32 }}>
            Compare Plans
          </h2>
          <div className="glass" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <th style={{ padding: '16px 20px', textAlign: 'left', color: '#6d6d8a', fontWeight: 600, width: '35%' }}>Feature</th>
                    {['Free', 'Pro', 'Business', 'Enterprise'].map((plan, i) => (
                      <th key={plan} style={{ padding: '16px 12px', textAlign: 'center', color: i === 1 ? '#9d9dff' : '#6d6d8a', fontWeight: 600, background: i === 1 ? 'rgba(109,59,255,0.05)' : 'transparent' }}>
                        {plan}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '13px 20px', color: '#b4b4c5' }}>{row.feature}</td>
                      {[row.free, row.pro, row.biz, row.ent].map((val, j) => (
                        <td key={j} style={{ padding: '13px 12px', textAlign: 'center', background: j === 1 ? 'rgba(109,59,255,0.03)' : 'transparent' }}>
                          {typeof val === 'boolean'
                            ? val
                              ? <Check size={16} color="#34d399" style={{ margin: '0 auto', display: 'block' }} />
                              : <X size={16} color="#47475d" style={{ margin: '0 auto', display: 'block' }} />
                            : <span style={{ color: j === 1 ? '#c4c4ff' : '#6d6d8a' }}>{val}</span>
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section style={{ padding: '0 1.5rem 5rem', textAlign: 'center' }}>
        <p style={{ color: '#6d6d8a', marginBottom: 16 }}>Have pricing questions?</p>
        <a href="/faq" style={{ color: '#9d9dff', textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>
          View our FAQ →
        </a>
      </section>

      <CTASection />
    </div>
  )
}