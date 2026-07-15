'use client'
import { useState } from 'react'
import VideoCard from '@/components/VideoCard'
import CTASection from '@/components/CTASection'
import SectionHeader from '@/components/SectionHeader'
import { Filter } from 'lucide-react'

// EASY TO EDIT: Change title and prompt for each video below!
const ALL_VIDEOS = [
  { 
    id: 1,
    title: 'Lemon Slicing Art', 
    prompt: 'Overhead cinematography of fresh lemons being sliced on a wooden board', 
    duration: '0:11', views: '124K', likes: '12000', 
    style: 'Food', category: 'Commercial', 
    videoUrl: 'https://www.pexels.com/download/video/11142458/',
  },
  { 
    id: 2,
    title: 'AI Generated Video', 
    prompt: 'Creative visual content generated with AI', 
    duration: '0:20', views: '287K', likes: '34000', 
    style: 'Creative', category: 'Abstract', 
    videoUrl: 'https://www.pexels.com/download/video/36864980/',
  },
  { 
    id: 3,
    title: 'Cinematic Shot', 
    prompt: 'Beautiful cinematic footage with professional camera work', 
    duration: '0:18', views: '89K', likes: '9450', 
    style: 'Cinematic', category: 'Nature', 
    videoUrl: 'https://www.pexels.com/download/video/6624892/',
  },
  { 
    id: 4,
    title: 'AI Video Sample', 
    prompt: 'Sample video showcasing AI generation capabilities', 
    duration: '0:22', views: '152K', likes: '21000', 
    style: 'AI', category: 'Fantasy', 
    videoUrl: 'https://www.pexels.com/download/video/38509905/',
  },
  { 
    id: 5,
    title: 'Creative Motion', 
    prompt: 'Dynamic motion graphics with creative visual design', 
    duration: '0:15', views: '63K', likes: '7800', 
    style: 'Motion', category: 'Abstract', 
    videoUrl: 'https://www.pexels.com/download/video/38472710/',
  },
  { 
    id: 6,
    title: 'Professional Video', 
    prompt: 'High-quality professional video content', 
    duration: '0:12', views: '91K', likes: '11000', 
    style: 'Pro', category: 'Commercial', 
    videoUrl: 'https://www.pexels.com/download/video/34209566/',
  },
  { 
    id: 7,
    title: 'Visual Storytelling', 
    prompt: 'Compelling visual narrative told through video', 
    duration: '0:25', views: '346K', likes: '52000', 
    style: 'Story', category: 'Sci-Fi', 
    videoUrl: 'https://www.pexels.com/download/video/38477364/',
  },
  { 
    id: 8,
    title: 'Artistic Vision', 
    prompt: 'Artistic video expression with unique perspective', 
    duration: '0:18', views: '213K', likes: '47000', 
    style: 'Artistic', category: 'Anime', 
    videoUrl: 'https://www.pexels.com/download/video/38361315/',
  },
  { 
    id: 9,
    title: 'Nature Footage', 
    prompt: 'Beautiful natural footage capturing the environment', 
    duration: '0:20', views: '118K', likes: '15000', 
    style: 'Nature', category: 'Nature', 
    videoUrl: 'https://www.pexels.com/download/video/37904648/',
  },
  { 
    id: 10,
    title: 'Modern Aesthetic', 
    prompt: 'Contemporary video with modern visual style', 
    duration: '0:15', views: '74K', likes: '8900', 
    style: 'Modern', category: 'Urban', 
    videoUrl: 'https://www.pexels.com/download/video/38436199/',
  },
  { 
    id: 11,
    title: 'Product Focus', 
    prompt: 'Product-focused cinematography with detailed shots', 
    duration: '0:15', views: '139K', likes: '23000', 
    style: 'Product', category: 'Commercial', 
    videoUrl: 'https://www.pexels.com/download/video/38203410/',
  },
  { 
    id: 12,
    title: 'Timeless Style', 
    prompt: 'Classic video style with timeless appeal', 
    duration: '0:20', views: '57K', likes: '7200', 
    style: 'Classic', category: 'Vintage', 
    videoUrl: 'https://www.pexels.com/download/video/16457006/',
  },
  { 
    id: 13,
    title: 'Aerial Perspective', 
    prompt: 'Stunning perspective from above with sweeping motion', 
    duration: '0:22', views: '198K', likes: '18500', 
    style: 'Aerial', category: 'Nature', 
    videoUrl: 'https://www.pexels.com/download/video/38135214/',
  },
  { 
    id: 14,
    title: 'Digital Dreams', 
    prompt: 'Dream-like digital visuals with immersive quality', 
    duration: '0:18', views: '156K', likes: '14200', 
    style: 'Digital', category: 'Sci-Fi', 
    videoUrl: 'https://www.pexels.com/download/video/37754907/',
  },
  { 
    id: 15,
    title: 'Motion Graphics', 
    prompt: 'Dynamic motion graphics with abstract visual elements', 
    duration: '0:15', views: '82K', likes: '9100', 
    style: 'Motion', category: 'Abstract', 
    videoUrl: 'https://www.pexels.com/download/video/38103690/',
  },
  { 
    id: 16,
    title: 'Urban Vibes', 
    prompt: 'Urban city vibes captured with atmospheric cinematography', 
    duration: '0:20', views: '105K', likes: '11500', 
    style: 'Urban', category: 'Urban', 
    videoUrl: 'https://www.pexels.com/download/video/35207577/',
  },
]

const CATEGORIES = ['All', 'Nature', 'Sci-Fi', 'Fantasy', 'Anime', 'Abstract', 'Commercial', 'Urban', 'Vintage']

// Purple gradients for all cards
const gradients = [
  'linear-gradient(135deg, #7c2d12, #1e0660)',
  'linear-gradient(135deg, #0f172a, #7c3aed)',
  'linear-gradient(135deg, #0c4a6e, #164e63)',
  'linear-gradient(135deg, #14532d, #1e0660)',
  'linear-gradient(135deg, #4c1d95, #0e7490)',
  'linear-gradient(135deg, #1f2937, #374151)',
  'linear-gradient(135deg, #1e1b4b, #312e81)',
  'linear-gradient(135deg, #701a75, #4c1d95)',
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? ALL_VIDEOS : ALL_VIDEOS.filter(v => v.category === activeCategory)

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: '5rem 1.5rem 2rem' }}>
        <SectionHeader 
          badge="Real Video Gallery" 
          title="Video" 
          highlight="Gallery" 
          subtitle="Hover to preview - Click for fullscreen playback" 
        />
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
          <Filter size={16} color="#6d6d8a" />
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '6px 16px', borderRadius: 9999, fontSize: 13, fontWeight: 500, cursor: 'pointer',
              background: activeCategory === cat ? 'rgba(109,59,255,0.2)' : 'rgba(255,255,255,0.04)',
              border: activeCategory === cat ? '1px solid rgba(109,59,255,0.5)' : '1px solid rgba(255,255,255,0.07)',
              color: activeCategory === cat ? '#c4c4ff' : '#6d6d8a',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <p style={{ color: '#47475d', fontSize: 13, marginBottom: 20 }}>Showing {filtered.length} videos - Hover any card to preview!</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filtered.map((v, i) => (
            <VideoCard 
              key={v.id} 
              {...v} 
              gradient={gradients[i % gradients.length]}
            />
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  )
}
