'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const pageLinks = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
]
const anchorLinks = [
  { href: '#projects', label: 'work' },
  { href: '#skills', label: 'skills' },
]

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const contactHref = isHome ? '#contact' : '/#contact'

  return (
    <>
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-white/[0.06] bg-[#0c0c0c]/90 px-6 backdrop-blur-sm md:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-mono text-[13px] tracking-wide text-white"
        >
          huda<span className="text-violet-500">.</span>dev
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {pageLinks.map(({ href, label }) => (
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
          {isHome &&
            anchorLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] tracking-[0.12em] text-white/35 transition-colors hover:text-white/80"
              >
                {label}
              </a>
            ))}
          <a
            href={contactHref}
            className="rounded border border-violet-500/35 px-4 py-1.5 font-mono text-[11px] tracking-[0.1em] text-violet-400 transition-colors hover:bg-violet-500/10"
          >
            contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={cn(
              'block h-px w-5 bg-white/60 transition-all duration-200',
              open && 'translate-y-[7px] rotate-45'
            )}
          />
          <span
            className={cn(
              'block h-px w-5 bg-white/60 transition-all duration-200',
              open && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block h-px w-5 bg-white/60 transition-all duration-200',
              open && '-translate-y-[7px] -rotate-45'
            )}
          />
        </button>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-14 z-40 flex flex-col bg-[#0a0a0a]/97 backdrop-blur-md transition-all duration-300 md:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        style={{ height: 'calc(100dvh - 56px)' }}
      >
        <nav className="flex flex-col px-6 pt-6">
          {pageLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                'border-b border-white/[0.05] py-4 font-mono text-sm tracking-[0.15em] transition-colors',
                pathname === href ? 'text-white' : 'text-white/45 hover:text-white'
              )}
            >
              {label}
            </Link>
          ))}
          {isHome &&
            anchorLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.05] py-4 font-mono text-sm tracking-[0.15em] text-white/45 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          <a
            href={contactHref}
            onClick={() => setOpen(false)}
            className="mt-6 rounded-lg border border-violet-500/35 px-5 py-3 text-center font-mono text-sm tracking-[0.12em] text-violet-400 transition-colors hover:bg-violet-500/10"
          >
            contact
          </a>
        </nav>
      </div>
    </>
  )
}
