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
    <header className="sticky top-3 sm:top-4 z-50">
      {/* Alignement avec le hero : max-w-[1440px] mx-auto */}
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
        {/* Hauteur réduite de h-20 à h-16, padding ajusté */}
        <div className="flex h-16 items-center justify-between rounded-full border border-border bg-background/90 px-5 sm:px-6 shadow-sm backdrop-blur">
          <NavLink to="/" className="flex items-center gap-2">
            <img
                src="/images/logo-mark.png"
                alt="Only Clik"
                className="hidden md:block h-12 w-12 object-contain"
            />
            <span className="font-display text-base tracking-[0.22em] leading-4">
              ONLY CLIK
            </span>
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative py-1 text-[12.5px] font-medium text-foreground/80 transition-colors hover:text-foreground ${
                    isActive ? '!text-foreground font-bold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-primary' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Bouton agrandi : px-4.5 py-2 -> px-6 py-2.5, text-[12.5px] -> text-[13px] */}
            <NavLink
              to="/demarrer-un-projet"
              className="rounded-full bg-butter px-6 py-2.5 text-[13px] font-semibold text-butter-foreground transition-opacity hover:opacity-85"
            >
              Démarrer un projet
            </NavLink>
            <button
              aria-label="Menu"
              className="md:hidden"
              onClick={() => setOpen((o) => !o)}
            >
              <svg viewBox="0 0 24 24" className="size-5.5" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="mt-2 flex flex-col gap-4 rounded-3xl border border-border bg-background/95 px-5 py-4 shadow-sm backdrop-blur md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
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
      </div>
    </header>
  )
}
