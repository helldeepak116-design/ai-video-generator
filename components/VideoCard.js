'use client'

import { useState, useRef } from 'react'
import { Play, Heart, Eye, Clock, X } from 'lucide-react'

export default function VideoCard({ title, prompt, duration, views, likes, style: styleName, gradient, videoUrl }) {
  const [isHovering, setIsHovering] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(parseInt(likes) || 100)
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handleLike = (e) => {
    e.stopPropagation()
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <>
      <div 
        className="glass card-hover" 
        onClick={() => setModalOpen(true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          borderRadius: 20, overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.07)',
          cursor: 'pointer',
        }}
      >
        <div style={{
          aspectRatio: '16/9', position: 'relative', overflow: 'hidden',
          background: gradient || 'linear-gradient(135deg, #1e0660, #0d0d18)',
        }}>
          {videoUrl && (
            <video
              ref={videoRef}
              src={videoUrl}
              muted
              loop
              playsInline
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                opacity: isHovering ? 1 : 0,
                transition: 'opacity 0.4s',
              }}
            />
          )}

          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(109,59,255,0.3), transparent 60%)',
            opacity: isHovering ? 0 : 1,
            transition: 'opacity 0.4s',
          }} />
          
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            opacity: isHovering ? 0 : 1,
            transition: 'opacity 0.3s',
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(10px)',
            }}>
              <Play size={20} color="white" fill="white" style={{ marginLeft: 2 }} />
            </div>
          </div>

          {styleName && (
            <div style={{
              position: 'absolute', top: 10, left: 10, padding: '3px 10px',
              borderRadius: 9999, fontSize: 11, fontWeight: 600,
              background: 'rgba(109,59,255,0.7)', color: 'white',
              zIndex: 2,
            }}>
              {styleName}
            </div>
          )}
          <div style={{
            position: 'absolute', bottom: 10, right: 10, padding: '3px 10px',
            borderRadius: 9999, fontSize: 11, fontWeight: 600,
            background: 'rgba(0,0,0,0.7)', color: 'white',
            display: 'flex', alignItems: 'center', gap: 4,
            zIndex: 2,
          }}>
            <Clock size={10} />{duration}
          </div>
        </div>

        <div style={{ padding: '1rem 1.25rem' }}>
          <h3 style={{ color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{title}</h3>
          <p style={{ 
            color: '#47475d', fontSize: 12, marginBottom: 12,
            display: '-webkit-box', WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {prompt}
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#6d6d8a', fontSize: 12 }}>
              <Eye size={13} />{views}
            </span>
            <button onClick={handleLike} style={{
              display: 'flex', alignItems: 'center', gap: 4,
              background: 'none', border: 'none', cursor: 'pointer',
              color: liked ? '#f87171' : '#6d6d8a', fontSize: 12,
            }}>
              <Heart size={13} fill={liked ? '#f87171' : 'none'} /> {likeCount}
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', cursor: 'pointer',
          }}
        >
          <button
            onClick={() => setModalOpen(false)}
            style={{
              position: 'absolute', top: 20, right: 20,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', cursor: 'pointer',
            }}
          >
            <X size={20} />
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', width: '100%', cursor: 'default' }}>
            {videoUrl ? (
              <video src={videoUrl} controls autoPlay loop style={{ width: '100%', maxHeight: '80vh', borderRadius: 16 }} />
            ) : (
              <div style={{ aspectRatio: '16/9', background: gradient, borderRadius: 16 }} />
            )}
            <div className="glass" style={{ padding: '1.25rem', borderRadius: 16, marginTop: 20 }}>
              <h2 style={{ color: 'white', fontSize: 20, fontWeight: 700 }}>{title}</h2>
              <p style={{ color: '#b4b4c5', fontSize: 14, marginTop: 8 }}>{prompt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}