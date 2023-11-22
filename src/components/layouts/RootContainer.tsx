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
      <main className="mx-auto w-full max-w-3xl py-16">{children}</main>
    </>
  )
}
