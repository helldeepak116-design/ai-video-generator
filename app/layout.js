import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ImgAI - AI Image Generator | Create Stunning Visuals Instantly',
  description: 'Transform your ideas into stunning AI-generated images in seconds. 100% free unlimited AI generation!',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#6d3bff',
          colorBackground: '#0d0d18',
          colorInputBackground: '#161625',
          colorInputText: '#ffffff',
          colorText: '#ffffff',
          colorTextSecondary: '#9d9dff',
          borderRadius: '12px',
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
