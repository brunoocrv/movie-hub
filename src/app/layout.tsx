import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'movie hub',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
