import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const font = Nunito({ subsets: ['latin'], weight: '400', style: 'normal' })

export const metadata: Metadata = {
  title: 'Github Blog',
  description: 'Desafio 3 - ReactJS - Rocketseat',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
