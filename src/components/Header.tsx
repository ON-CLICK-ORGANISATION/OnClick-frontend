import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        {/*<NavLink to="/" className="font-display text-lg tracking-[0.22em] leading-4">*/}
        {/*  ONLY CLIK*/}
        {/*</NavLink>*/}
        <NavLink to="/" className="flex items-center gap-2">
          <img
              src="/images/logo-mark.svg"
              alt="Only Clik"
              className="hidden md:block h-14 w-15 object-contain"
          />
          <span className="font-display text-lg tracking-[0.22em] leading-4">
    ONLY CLIK
  </span>
        </NavLink>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground ${
                  isActive ? '!text-foreground font-bold' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/demarrer-un-projet"
            className="rounded-full bg-butter px-5 py-2.5 text-[13px] font-semibold text-butter-foreground transition-opacity hover:opacity-85"
          >
            Démarrer un projet
          </NavLink>
          <button
            aria-label="Menu"
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-page flex flex-col gap-4 border-t border-border py-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium text-foreground/80 hover:text-foreground ${
                  isActive ? 'font-bold text-foreground' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
