import './globals.css'

import type { Metadata } from 'next'
import { PlusJakartaSans } from '@/lib/fonts'
import { RootContainer } from '@/components'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'App Router',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen', PlusJakartaSans.className)}>
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  )
}
