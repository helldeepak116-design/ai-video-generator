import CTASection from '@/components/CTASection'
import StatsBar from '@/components/StatsBar'
import { Target, Heart, Award, Globe, Users, Eye } from 'lucide-react'

const TEAM = [
  { name: 'Alex Rivera', role: 'CEO & Co-Founder', color: '#6d3bff', bio: 'Former Google DeepMind researcher with 10+ years in AI.' },
  { name: 'Sarah Kim', role: 'CTO & Co-Founder', color: '#00d4ff', bio: 'Stanford PhD in Computer Vision. Built AI systems at Meta.' },
  { name: 'James Chen', role: 'Head of AI Research', color: '#f472b6', bio: 'Published 30+ papers on generative video models and diffusion.' },
  { name: 'Maria Santos', role: 'VP of Engineering', color: '#34d399', bio: 'Led engineering at Runway and Adobe. 15 years experience.' },
  { name: 'David Park', role: 'Head of Design', color: '#f59e0b', bio: 'Award-winning product designer formerly at Apple and Figma.' },
  { name: 'Emma Wilson', role: 'VP of Marketing', color: '#fb923c', bio: 'Scaled multiple AI SaaS startups from 0 to 100K+ users.' },
]

const VALUES = [
  { icon: Target, title: 'Innovation First', desc: 'We push boundaries of what AI can create, shipping features that were science fiction 2 years ago.' },
  { icon: Users, title: 'Creator-Centric', desc: 'Every feature we build starts by deeply understanding the real needs of content creators.' },
  { icon: Heart, title: 'Accessibility', desc: 'Professional video creation should be available to everyone, not just those with big budgets.' },
  { icon: Award, title: 'Quality Obsession', desc: 'We never compromise on output quality. Every pixel, every frame, every transition must be perfect.' },
  { icon: Globe, title: 'Global Impact', desc: 'Serving creators in 150+ countries across every language and culture is our privilege and mission.' },
  { icon: Eye, title: 'Transparency', desc: "We're open about our AI models, how data is handled, and what our technology can and cannot do." },
]

const TIMELINE = [
  { year: '2023 Q1', event: 'VidAI founded with $5M seed funding from a16z & YC' },
  { year: '2023 Q3', event: 'Private beta launched with 500 hand-picked early adopters' },
  { year: '2023 Q4', event: 'Public launch — 10,000 users in first week' },
  { year: '2024 Q1', event: 'Series A: $25M raised, team grew to 45 people' },
  { year: '2024 Q2', event: 'v2.0: 4K support, AI music, and 50+ styles launched' },
  { year: '2024 Q4', event: '50K+ active users, 2M+ videos generated globally' },
  { year: '2025 Q1', event: 'v3.0: Real-time generation & Enterprise tier launched' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ top: 0, right: '20%' }} />
        <div className="orb-blue" style={{ bottom: 0, left: '10%' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', marginBottom: 24 }}>
            About <span className="gradient-text">VidAI</span>
          </h1>
          <p style={{ color: '#6d6d8a', fontSize: 18, lineHeight: 1.8, maxWidth: 600, margin: '0 auto' }}>
            We're on a mission to democratize video creation. Founded in 2023, we combine
            cutting-edge AI research with intuitive design to make professional video
            production accessible to everyone on Earth.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '3rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 24 }}>Our Story</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                "VidAI was born from a simple frustration: creating quality videos was too expensive, too slow, and required too many specialized skills. A talented idea shouldn't require a $100K production budget.",
                "Our founders — AI researchers from Stanford and MIT — believed advances in generative AI could fundamentally change this. They set out to build AI that could understand creative direction and produce stunning videos from plain text.",
                "Today, VidAI serves 50,000+ creators, businesses, and enterprises worldwide, generating millions of videos that power content across every major platform. We're just getting started.",
              ].map((p, i) => (
                <p key={i} style={{ color: '#6d6d8a', fontSize: 16, lineHeight: 1.8 }}>{p}</p>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="glass" style={{ borderRadius: 24, padding: '2rem', border: '1px solid rgba(255,255,255,0.07)' }}>
            <h3 style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 24 }}>Our Journey</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {TIMELINE.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: i < TIMELINE.length - 1 ? 24 : 0, position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#6d3bff', border: '2px solid #1e0660', marginTop: 4 }} />
                    {i < TIMELINE.length - 1 && <div style={{ width: 2, flex: 1, background: 'rgba(109,59,255,0.2)', marginTop: 4 }} />}
                  </div>
                  <div style={{ paddingBottom: i < TIMELINE.length - 1 ? 4 : 0 }}>
                    <p style={{ color: '#9d9dff', fontSize: 12, fontWeight: 700, marginBottom: 4 }}>{item.year}</p>
                    <p style={{ color: '#b4b4c5', fontSize: 14, lineHeight: 1.5 }}>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Values */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: 'white', textAlign: 'center', marginBottom: 48 }}>
            Our <span className="gradient-text">Values</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {VALUES.map((v, i) => (
              <div key={i} className="glass card-hover" style={{ borderRadius: 20, padding: '1.75rem', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(109,59,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <v.icon size={22} color="#9d9dff" />
                </div>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: '#6d6d8a', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: 'white', textAlign: 'center', marginBottom: 48 }}>
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {TEAM.map((member, i) => (
              <div key={i} className="glass card-hover" style={{ borderRadius: 20, padding: '2rem', border: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%', background: member.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, fontWeight: 800, color: 'white', margin: '0 auto 16px',
                  boxShadow: `0 8px 24px ${member.color}40`,
                }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{member.name}</h3>
                <p style={{ color: member.color, fontSize: 13, fontWeight: 600, marginBottom: 10 }}>{member.role}</p>
                <p style={{ color: '#6d6d8a', fontSize: 13, lineHeight: 1.6 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}