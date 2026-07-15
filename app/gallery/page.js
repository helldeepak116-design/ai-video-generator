'use client'
import { useState } from 'react'
import VideoCard from '@/components/VideoCard'
import CTASection from '@/components/CTASection'
import SectionHeader from '@/components/SectionHeader'
import { Filter } from 'lucide-react'

const ALL_VIDEOS = [
  { title: 'Mountain Sunset', prompt: 'Cinematic timelapse over snow mountains', duration: '0:15', views: '12.4K', likes: '1200', style: 'Cinematic', category: 'Nature', videoUrl: 'https://cdn.pixabay.com/video/2022/12/18/143388-782506657_large.mp4', gradient: 'linear-gradient(135deg, #7c2d12, #1e0660)' },
  { title: 'Cyberpunk City', prompt: 'Neon city at night with rain reflections', duration: '0:30', views: '28.7K', likes: '3400', style: 'Sci-Fi', category: 'Sci-Fi', videoUrl: 'https://cdn.pixabay.com/video/2023/10/03/183017-871881153_large.mp4', gradient: 'linear-gradient(135deg, #0f172a, #7c3aed)' },
  { title: 'Ocean Waves', prompt: 'Peaceful ocean at golden hour sunrise', duration: '0:20', views: '8.9K', likes: '945', style: 'Realistic', category: 'Nature', videoUrl: 'https://cdn.pixabay.com/video/2024/03/19/204059-925128870_large.mp4', gradient: 'linear-gradient(135deg, #0c4a6e, #164e63)' },
  { title: 'Forest Magic', prompt: 'Magical forest with fireflies and mist', duration: '0:25', views: '15.2K', likes: '2100', style: 'Fantasy', category: 'Fantasy', videoUrl: 'https://cdn.pixabay.com/video/2020/07/30/45960-446430388_large.mp4', gradient: 'linear-gradient(135deg, #14532d, #1e0660)' },
  { title: 'Abstract Fluid', prompt: 'Colorful fluid dynamics simulation', duration: '0:10', views: '6.3K', likes: '780', style: 'Abstract', category: 'Abstract', videoUrl: 'https://cdn.pixabay.com/video/2020/02/22/32478-393867238_large.mp4', gradient: 'linear-gradient(135deg, #4c1d95, #0e7490)' },
  { title: 'Product Showcase', prompt: 'Luxury product with cinematic lighting', duration: '0:15', views: '9.1K', likes: '1100', style: 'Commercial', category: 'Commercial', videoUrl: 'https://cdn.pixabay.com/video/2022/11/12/139303-771111926_large.mp4', gradient: 'linear-gradient(135deg, #1f2937, #374151)' },
  { title: 'Space Nebula', prompt: 'Flying through colorful nebula in space', duration: '0:45', views: '34.6K', likes: '5200', style: 'Cinematic', category: 'Sci-Fi', videoUrl: 'https://cdn.pixabay.com/video/2023/08/13/175056-855564592_large.mp4', gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)' },
  { title: 'Cherry Blossom', prompt: 'Anime cherry blossoms in Japanese garden', duration: '0:12', views: '21.3K', likes: '4700', style: 'Anime', category: 'Anime', videoUrl: 'https://cdn.pixabay.com/video/2023/03/13/154164-807990093_large.mp4', gradient: 'linear-gradient(135deg, #701a75, #4c1d95)' },
  { title: 'Coral Reef', prompt: 'Underwater reef with tropical fish', duration: '0:30', views: '11.8K', likes: '1500', style: 'Realistic', category: 'Nature', videoUrl: 'https://cdn.pixabay.com/video/2018/08/16/17756-286031863_large.mp4', gradient: 'linear-gradient(135deg, #0c4a6e, #064e3b)' },
  { title: 'City Drone', prompt: 'Drone around skyscraper at sunset', duration: '0:18', views: '7.4K', likes: '890', style: 'Cinematic', category: 'Urban', videoUrl: 'https://cdn.pixabay.com/video/2019/03/21/22067-326024757_large.mp4', gradient: 'linear-gradient(135deg, #1c1917, #292524)' },
  { title: 'Chocolate Pour', prompt: 'Slow motion chocolate over strawberries', duration: '0:10', views: '13.9K', likes: '2300', style: 'Commercial', category: 'Commercial', videoUrl: 'https://cdn.pixabay.com/video/2016/10/19/6027-188245334_large.mp4', gradient: 'linear-gradient(135deg, #431407, #7c2d12)' },
  { title: 'Vintage Road Trip', prompt: 'Super 8 vintage desert road trip', duration: '0:40', views: '5.7K', likes: '720', style: 'Vintage', category: 'Vintage', videoUrl: 'https://cdn.pixabay.com/video/2020/09/08/48708-459653075_large.mp4', gradient: 'linear-gradient(135deg, #78350f, #92400e)' },
]

const CATEGORIES = ['All', 'Nature', 'Sci-Fi', 'Fantasy', 'Anime', 'Abstract', 'Commercial', 'Urban', 'Vintage']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? ALL_VIDEOS : ALL_VIDEOS.filter(v => v.category === activeCategory)

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: '5rem 1.5rem 2rem' }}>
        <SectionHeader badge="🎬 Real Videos - Hover to Preview!" title="Video" highlight="Gallery" subtitle="Hover to play • Click for fullscreen • Like with heart" />
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
        <p style={{ color: '#47475d', fontSize: 13, marginBottom: 20 }}>Showing {filtered.length} videos - Hover to preview!</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filtered.map((v, i) => <VideoCard key={i} {...v} />)}
        </div>
      </div>

      <CTASection />
    </div>
  )
}