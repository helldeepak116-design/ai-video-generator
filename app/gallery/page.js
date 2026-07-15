'use client'
import { useState } from 'react'
import VideoCard from '@/components/VideoCard'
import CTASection from '@/components/CTASection'
import SectionHeader from '@/components/SectionHeader'
import { Filter, TrendingUp, Clock, Star } from 'lucide-react'

const ALL_VIDEOS = [
  { title: 'Mountain Sunset Timelapse', prompt: 'Cinematic timelapse of sunset over snow-capped mountains with volumetric clouds and golden light', duration: '0:15', views: '12.4K', likes: '1.2K', style: 'Cinematic', gradient: 'linear-gradient(135deg, #7c2d12, #1e0660)', category: 'Nature' },
  { title: 'Cyberpunk City Streets', prompt: 'Neon-lit cyberpunk city at night with rain reflections on wet pavement and flying vehicles overhead', duration: '0:30', views: '28.7K', likes: '3.4K', style: 'Sci-Fi', gradient: 'linear-gradient(135deg, #0f172a, #7c3aed)', category: 'Sci-Fi' },
  { title: 'Ocean Waves at Dawn', prompt: 'Peaceful ocean waves crashing on pristine beach at golden hour sunrise, ultra realistic', duration: '0:20', views: '8.9K', likes: '945', style: 'Realistic', gradient: 'linear-gradient(135deg, #0c4a6e, #164e63)', category: 'Nature' },
  { title: 'Enchanted Forest', prompt: 'Magical forest with glowing mushrooms, fireflies, and ethereal mist floating in moonlight', duration: '0:25', views: '15.2K', likes: '2.1K', style: 'Fantasy', gradient: 'linear-gradient(135deg, #14532d, #1e0660)', category: 'Fantasy' },
  { title: 'Abstract Fluid Motion', prompt: 'Colorful fluid dynamics simulation with metallic iridescent surfaces and dramatic studio lighting', duration: '0:10', views: '6.3K', likes: '780', style: 'Abstract', gradient: 'linear-gradient(135deg, #4c1d95, #0e7490)', category: 'Abstract' },
  { title: 'Product Showcase', prompt: 'Luxury watch rotation on marble surface with dramatic cinematic lighting and reflections', duration: '0:15', views: '9.1K', likes: '1.1K', style: 'Commercial', gradient: 'linear-gradient(135deg, #1f2937, #374151)', category: 'Commercial' },
  { title: 'Space Nebula Journey', prompt: 'Flying through a colorful nebula in deep space with stars, cosmic dust and aurora-like phenomena', duration: '0:45', views: '34.6K', likes: '5.2K', style: 'Cinematic', gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)', category: 'Sci-Fi' },
  { title: 'Anime Cherry Blossoms', prompt: 'Anime girl walking through falling cherry blossom petals in a Japanese garden, spring vibes', duration: '0:12', views: '21.3K', likes: '4.7K', style: 'Anime', gradient: 'linear-gradient(135deg, #701a75, #4c1d95)', category: 'Anime' },
  { title: 'Underwater Coral Reef', prompt: 'Vivid underwater coral reef with tropical fish and sunlight rays penetrating crystal clear water', duration: '0:30', views: '11.8K', likes: '1.5K', style: 'Realistic', gradient: 'linear-gradient(135deg, #0c4a6e, #064e3b)', category: 'Nature' },
  { title: 'City Architecture Drone', prompt: 'Drone shot circling around modern glass skyscraper reflecting golden city skyline at sunset', duration: '0:18', views: '7.4K', likes: '890', style: 'Cinematic', gradient: 'linear-gradient(135deg, #1c1917, #292524)', category: 'Urban' },
  { title: 'Chocolate Pour', prompt: 'Slow motion melted chocolate pouring over fresh strawberries with steam and beautiful bokeh', duration: '0:10', views: '13.9K', likes: '2.3K', style: 'Commercial', gradient: 'linear-gradient(135deg, #431407, #7c2d12)', category: 'Commercial' },
  { title: 'Vintage Road Trip', prompt: 'Super 8 vintage film style road trip through American deserts and mountains, 1970s aesthetic', duration: '0:40', views: '5.7K', likes: '720', style: 'Vintage', gradient: 'linear-gradient(135deg, #78350f, #92400e)', category: 'Vintage' },
]

const CATEGORIES = ['All', 'Nature', 'Sci-Fi', 'Fantasy', 'Anime', 'Abstract', 'Commercial', 'Urban', 'Vintage']
const SORTS = [
  { label: 'Trending', icon: TrendingUp },
  { label: 'Newest', icon: Clock },
  { label: 'Top Rated', icon: Star },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSort, setActiveSort] = useState('Trending')

  const filtered = activeCategory === 'All' ? ALL_VIDEOS : ALL_VIDEOS.filter(v => v.category === activeCategory)

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Header */}
      <section style={{ padding: '5rem 1.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb-purple" style={{ top: 0, right: '20%' }} />
        <SectionHeader
          badge="🎬 Community Showcase"
          title="Video"
          highlight="Gallery"
          subtitle="Explore amazing videos created by our community using VidAI"
        />
      </section>

      {/* Filters */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Category Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <Filter size={16} color="#6d6d8a" />
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: '6px 16px', borderRadius: 9999, fontSize: 13, fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
                background: activeCategory === cat ? 'rgba(109,59,255,0.2)' : 'rgba(255,255,255,0.04)',
                border: activeCategory === cat ? '1px solid rgba(109,59,255,0.5)' : '1px solid rgba(255,255,255,0.07)',
                color: activeCategory === cat ? '#c4c4ff' : '#6d6d8a',
              }}>
                {cat}
              </button>
            ))}
          </div>
          {/* Sort */}
          <div style={{ display: 'flex', gap: 6 }}>
            {SORTS.map(({ label, icon: Icon }) => (
              <button key={label} onClick={() => setActiveSort(label)} style={{
                padding: '6px 14px', borderRadius: 9999, fontSize: 13, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s',
                background: activeSort === label ? 'rgba(109,59,255,0.15)' : 'transparent',
                border: '1px solid rgba(255,255,255,0.07)',
                color: activeSort === label ? '#9d9dff' : '#6d6d8a',
              }}>
                <Icon size={13} /> {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <p style={{ color: '#47475d', fontSize: 13, marginBottom: 20 }}>
          Showing {filtered.length} videos
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filtered.map((v, i) => <VideoCard key={i} {...v} />)}
        </div>
      </div>

      <CTASection />
    </div>
  )
}