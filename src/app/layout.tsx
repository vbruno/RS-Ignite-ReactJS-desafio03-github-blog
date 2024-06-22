import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Image from 'next/image'
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
      <body
        className={`${font.className} bg-base-background h-screen max-h-[1440px]: w-full flex items-center flex-col`}
      >
        <Image
          src={'/static/image/Cover.png'}
          width={1440}
          height={296}
          alt="img cover page"
        />
        {children}
      </body>
    </html>
  )
}
