import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { prompt } = await request.json()
    
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt required' }, { status: 400 })
    }

    console.log('\n===== FREE AI GENERATION =====')
    console.log('Prompt:', prompt)

    // Pollinations.ai - 100% FREE, no key needed!
    const seed = Math.floor(Math.random() * 1000000)
    const enhancedPrompt = `${prompt}, high quality, detailed, 8k, masterpiece`
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=1280&height=720&seed=${seed}&nologo=true&enhance=true`

    console.log('Generated URL:', imageUrl)

    // Fetch to verify it works
    const testResponse = await fetch(imageUrl, { method: 'HEAD' })
    console.log('Test status:', testResponse.status)

    if (!testResponse.ok) {
      return NextResponse.json({ 
        error: 'Generation service unavailable. Try again in a moment.' 
      }, { status: 503 })
    }

    console.log('✅ SUCCESS!')

    return NextResponse.json({ 
      videoUrl: imageUrl,
      isImage: true 
    })
    
  } catch (error) {
    console.error('Error:', error.message)
    return NextResponse.json({ 
      error: `Error: ${error.message}` 
    }, { status: 500 })
  }
}
