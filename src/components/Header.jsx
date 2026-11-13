import { useState } from 'react'
import { CalendarCheck, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { useScrollProgress } from '../hooks/useInView.js'

export const NAV_LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#para-quem', label: 'Para quem é' },
  { href: '#impacto', label: 'Impacto' },
]

export function CtaButton({ className = '', size = 'md', href = '#adotar', children = 'Solicitar demonstração' }) {
  const sizing = size === 'lg' ? 'px-7 py-3.5 text-base' : 'px-5 py-2.5 text-sm'
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-accent-400 font-bold whitespace-nowrap text-navy-950 shadow-[0_10px_30px_-8px_rgb(249_130_7/0.7)] transition hover:-translate-y-0.5 hover:bg-accent-300 hover:shadow-[0_14px_36px_-8px_rgb(249_130_7/0.85)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300 ${sizing} ${className}`}
    >
      <CalendarCheck className={`transition group-hover:rotate-[-8deg] ${size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'}`} />
      {children}
    </a>
  )
}

// Barra de progresso da página
function ScrollProgress() {
  const p = useScrollProgress(null)
  return (
    <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/5" aria-hidden="true">
      <div className="h-full bg-gradient-to-r from-accent-600 to-accent-300" style={{ width: `${p * 100}%` }} />
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy-950/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Principal">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent-400 after:transition-transform hover:text-white hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CtaButton />
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-white hover:bg-white/10 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-white/8 px-4 pt-2 pb-5 md:hidden">
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <CtaButton className="mt-3 w-full" />
        </div>
      )}

      <ScrollProgress />
    </header>
  )
}
