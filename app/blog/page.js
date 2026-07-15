import CTASection from '@/components/CTASection'
import { Clock, ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const POSTS = [
  { title: 'The Future of AI Image Generation in 2025', excerpt: 'Explore the latest trends shaping AI image generation and how emerging technologies will transform content creation for millions of creators worldwide.', category: 'AI Trends', date: 'Jan 15, 2025', readTime: '8 min', featured: true, gradient: 'linear-gradient(135deg, #1e0660, #001a2e)', categoryColor: '#6d3bff' },
  { title: 'How to Write Perfect AI Image Prompts', excerpt: 'Master the art of prompt engineering to consistently get stunning results from AI image generators. Includes 50+ example prompts you can use today.', category: 'Tutorial', date: 'Jan 10, 2025', readTime: '6 min', gradient: 'linear-gradient(135deg, #064e3b, #0f172a)', categoryColor: '#34d399' },
  { title: '10 Ways Businesses Use AI Images to 10x ROI', excerpt: 'Real case studies of companies that transformed their marketing with AI-generated images and saw massive returns on investment.', category: 'Business', date: 'Jan 5, 2025', readTime: '10 min', gradient: 'linear-gradient(135deg, #4c1d95, #1e1b4b)', categoryColor: '#a78bfa' },
  { title: 'ImgAI v3.0: Everything That is New', excerpt: 'A complete breakdown of every new feature, improvement, and capability in our biggest release yet - real-time generation, new styles, and more.', category: 'Product', date: 'Dec 28, 2024', readTime: '5 min', gradient: 'linear-gradient(135deg, #1e0660, #0c4a6e)', categoryColor: '#00d4ff' },
  { title: 'The Ethics of AI-Generated Content', excerpt: 'A balanced, nuanced look at the ethical considerations around AI-generated content and how responsible AI companies should approach them.', category: 'Industry', date: 'Dec 20, 2024', readTime: '12 min', gradient: 'linear-gradient(135deg, #7f1d1d, #431407)', categoryColor: '#f87171' },
  { title: 'From Concept to Creation: Complete AI Image Workflow', excerpt: 'A step-by-step guide to creating professional images using AI - from initial ideation and prompting through generation and final export.', category: 'Tutorial', date: 'Dec 15, 2024', readTime: '15 min', gradient: 'linear-gradient(135deg, #78350f, #1c1917)', categoryColor: '#f59e0b' },
  { title: 'AI Images vs Traditional Design', excerpt: 'An honest cost-benefit analysis comparing AI image generation with traditional design workflows for different use cases and budgets.', category: 'Business', date: 'Dec 10, 2024', readTime: '9 min', gradient: 'linear-gradient(135deg, #0c4a6e, #164e63)', categoryColor: '#38bdf8' },
  { title: 'Top 20 AI Image Prompt Templates', excerpt: 'Our most-used, highest-performing prompt templates categorized by use case: social media, marketing, portraits, product shots, and more.', category: 'Tutorial', date: 'Dec 5, 2024', readTime: '7 min', gradient: 'linear-gradient(135deg, #14532d, #064e3b)', categoryColor: '#4ade80' },
  { title: 'Building a Content Empire with AI Images', excerpt: 'How one creator went from zero to 2M followers in 6 months using ImgAI to produce daily content across Instagram, Pinterest, and Twitter.', category: 'Case Study', date: 'Nov 28, 2024', readTime: '11 min', gradient: 'linear-gradient(135deg, #701a75, #4c1d95)', categoryColor: '#e879f9' },
]

export default function BlogPage() {
  const [featured, ...rest] = POSTS

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ top: 0, left: '30%' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            <span className="gradient-text">Blog</span> & Insights
          </h1>
          <p style={{ color: '#6d6d8a', fontSize: 18, lineHeight: 1.7 }}>
            AI image tips, tutorials, industry insights, and product updates
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div className="glass card-hover blog-featured" style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ aspectRatio: '16/10', background: featured.gradient, position: 'relative', minHeight: 260 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 40% 50%, rgba(109,59,255,0.3), transparent 60%)' }} />
            <div style={{ position: 'absolute', top: 16, left: 16 }}>
              <span style={{ padding: '4px 12px', borderRadius: 9999, fontSize: 12, fontWeight: 700, background: `${featured.categoryColor}25`, color: featured.categoryColor, border: `1px solid ${featured.categoryColor}40` }}>
                Featured
              </span>
            </div>
          </div>
          <div style={{ padding: '2.5rem' }}>
            <span style={{ padding: '4px 12px', borderRadius: 9999, fontSize: 12, fontWeight: 700, background: `${featured.categoryColor}20`, color: featured.categoryColor, marginBottom: 16, display: 'inline-block' }}>
              {featured.category}
            </span>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.3, marginBottom: 12 }}>{featured.title}</h2>
            <p style={{ color: '#6d6d8a', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{featured.excerpt}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#47475d', fontSize: 13 }}>
                <span>{featured.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={13} /> {featured.readTime} read</span>
              </div>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#9d9dff', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
                Read more <ArrowRight size={15} />
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <TrendingUp size={16} color="#9d9dff" />
          <span style={{ color: '#9d9dff', fontWeight: 600, fontSize: 14 }}>Latest Articles</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {rest.map((post, i) => (
            <article key={i} className="glass card-hover" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer' }}>
              <div style={{ aspectRatio: '16/9', background: post.gradient, position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 40% 50%, rgba(109,59,255,0.2), transparent 60%)' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ padding: '3px 10px', borderRadius: 9999, fontSize: 11, fontWeight: 700, background: `${post.categoryColor}20`, color: post.categoryColor, display: 'inline-block', marginBottom: 12 }}>
                  {post.category}
                </span>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: 16, lineHeight: 1.4, marginBottom: 10 }}>{post.title}</h3>
                <p style={{ color: '#6d6d8a', fontSize: 13, lineHeight: 1.6, marginBottom: 16, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#47475d', fontSize: 12 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={12} /> {post.readTime} read</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CTASection />
      <style>{`@media(max-width:768px){.blog-featured{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}
