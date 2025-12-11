import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tyler - Portfolio',
  description: 'Portfolio website for Tyler, University Student at Oregon State University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

