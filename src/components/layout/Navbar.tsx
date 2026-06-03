'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  // {href: '/projects', label: 'projects'},
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-white/[0.06] bg-[#0c0c0c]/90 px-8 backdrop-blur-sm">
      <Link href="/" className="font-mono text-[13px] tracking-wide text-white">
        huda<span className="text-violet-500">.</span>dev
      </Link>
      <nav className="flex items-center gap-7">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'font-mono text-[11px] tracking-[0.12em] transition-colors',
              pathname === href ? 'text-white' : 'text-white/35 hover:text-white/80'
            )}
          >
            {label}
          </Link>
        ))}
        <a
          href="#contact"
          className="rounded border border-violet-500/35 px-4 py-1.5 font-mono text-[11px] tracking-[0.1em] text-violet-400 transition-colors hover:bg-violet-500/10"
        >
          contact
        </a>
      </nav>
    </header>
  )
}
