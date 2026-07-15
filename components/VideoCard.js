'use client'

import { Play, Heart, Eye, Clock } from 'lucide-react'

export default function VideoCard({ title, prompt, duration, views, likes, style: styleName, gradient }) {
  return (
    <div className="glass card-hover" style={{
      borderRadius: 20, overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{
        aspectRatio: '16/9', position: 'relative', overflow: 'hidden',
        background: gradient || 'linear-gradient(135deg, #1e0660, #0d0d18, #001a2e)',
        cursor: 'pointer',
      }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s',
          }}>
            <Play size={20} color="white" fill="white" style={{ marginLeft: 2 }} />
          </div>
        </div>

        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(109,59,255,0.3), transparent 60%)',
        }} />

        {styleName && (
          <div style={{
            position: 'absolute', top: 10, left: 10, padding: '3px 10px',
            borderRadius: 9999, fontSize: 11, fontWeight: 600,
            background: 'rgba(109,59,255,0.3)', color: '#c4c4ff',
            border: '1px solid rgba(109,59,255,0.4)', backdropFilter: 'blur(10px)',
          }}>
            {styleName}
          </div>
        )}
        <div style={{
          position: 'absolute', bottom: 10, right: 10, padding: '3px 10px',
          borderRadius: 9999, fontSize: 11, fontWeight: 600,
          background: 'rgba(0,0,0,0.5)', color: 'white',
          backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <Clock size={10} />{duration}
        </div>
      </div>

      <div style={{ padding: '1rem 1.25rem' }}>
        <h3 style={{ color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{title}</h3>
        <p style={{ color: '#47475d', fontSize: 12, marginBottom: 12, lineHeight: 1.5,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {prompt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#6d6d8a', fontSize: 12 }}>
            <Eye size={13} />{views}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#6d6d8a', fontSize: 12 }}>
            <Heart size={13} />{likes}
          </span>
        </div>
      </div>
    </div>
  )
}