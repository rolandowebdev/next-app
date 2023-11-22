import { navlink } from '@/constants/navlink'
import Link from 'next/link'

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className="fixed left-0 top-20 z-10 min-h-screen w-[248px] bg-muted pt-7">
        <ul className="flex flex-col items-center gap-6">
          {navlink.map((link) => (
            <li key={link.name}>
              <Link
                className="scroll-m-20 text-lg font-semibold tracking-tight transition-colors first:mt-0 hover:text-primary active:text-primary"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </>
  )
}
