'use client'

import { PropsWithChildren } from 'react'
import { Navbar } from '../navbar'
import { usePathname } from 'next/navigation'

const disabledNavbar = ['/login', '/register']

export const RootContainer = ({ children }: PropsWithChildren) => {
  const pathname = usePathname()
  return (
    <>
      {!disabledNavbar.includes(pathname) && <Navbar />}
      <main className="mx-auto w-full max-w-4xl py-8">{children}</main>
    </>
  )
}
