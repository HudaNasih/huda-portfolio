export default function Footer() {
  const links = [
    { label: 'github', href: 'https://github.com/HudaNasih' },
    { label: 'linkedin', href: 'https://linkedin.com' },
    { label: '@thedudadoodle', href: 'https://instagram.com/thedudadoodle' },
  ]

  return (
    <footer className="flex flex-col items-start gap-4 border-t border-white/[0.06] px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
      <span className="font-mono text-[10px] tracking-wider text-white/20 uppercase">
        © {new Date().getFullYear()} Huda Nasih
      </span>
      <div className="flex items-center gap-5">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.1em] text-white/25 transition-colors hover:text-white/55"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
