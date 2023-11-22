'use client'

import Link from 'next/link'
import { navlink } from '@/constants/navlink'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

export const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <header className="flex h-20 border border-neutral-800 bg-neutral-950 px-16">
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between">
        <span className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
          App Router
        </span>
        <ul className="flex items-center gap-8">
          {navlink.map((link) => (
            <li key={link.name}>
              <Link
                className={cn(
                  pathname === link['href'] ? 'text-primary' : 'text-white',
                  'scroll-m-20 text-lg font-semibold tracking-tight transition-colors first:mt-0 hover:text-primary'
                )}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          onClick={() => router.push('/login')}
          size="lg"
          className="rounded-lg"
        >
          Sign In
        </Button>
      </nav>
    </header>
  )
}
