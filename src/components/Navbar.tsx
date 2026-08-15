import { useEffect, useState } from 'react'
import { Github, Menu, Rocket, X, Zap } from 'lucide-react'
import { cn } from '../lib/utils'

const LINKS = [
  { label: 'Capacitaciones', href: '#capacitaciones' },
  { label: 'Referentes', href: '#referentes' },
  { label: 'Programas', href: '#programas' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass-strong border-x-0 border-t-0'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 transition-transform duration-300 group-hover:scale-110">
            <Zap className="h-5 w-5 text-white" fill="currentColor" />
          </span>
          <span className="leading-tight">
            <span className="block text-[13px] font-extrabold tracking-tight text-white sm:text-sm">
              De Espectadores
            </span>
            <span className="block text-[13px] font-extrabold tracking-tight text-gradient sm:text-sm">
              a Creadores
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/60 hover:text-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="https://github.com/Dav082004/Hub-Coar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:from-violet-500 hover:to-cyan-400 glow-violet"
          >
            <Rocket className="h-4 w-4" />
            Acceso a Recursos
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200 md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong mx-4 mb-4 rounded-xl p-4 md:hidden">
          <ul className="space-y-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/Dav082004/Hub-Coar"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Github className="h-4 w-4" />
            Acceso a Recursos
          </a>
        </div>
      )}
    </header>
  )
}