import { NavLink } from 'react-router-dom'
import { House, BriefcaseBusiness, FolderKanban } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Accueil', icon: House },
  { to: '/services', label: 'Services', icon: BriefcaseBusiness },
  { to: '/realisations', label: 'Réalisations', icon: FolderKanban },
]

export default function Header() {
  return (
    <header className="sticky top-3 z-50 sm:top-4">
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
        <div className="flex h-16 items-center justify-between rounded-full border border-border bg-background/90 px-5 shadow-sm backdrop-blur sm:px-6">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/images/logo-mark.png"
              alt="Only Clik"
              className="block h-8 w-8 shrink-0 object-contain md:h-12 md:w-12"
            />
            <span className="font-display text-base leading-4 tracking-[0.22em]">
              ONLY CLIK
            </span>
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative flex items-center gap-2 py-1 text-[12.5px] font-medium text-foreground/80 transition-colors hover:text-foreground ${
                      isActive ? '!text-foreground font-bold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-primary' : ''
                    }`
                  }
                >
                  <Icon size={14} />
                  {link.label}
                </NavLink>
              )
            })}
          </nav>

          <NavLink
            to="/demarrer-un-projet"
            className="hidden shrink-0 rounded-full bg-butter px-6 py-2.5 text-[13px] font-semibold text-butter-foreground transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Démarrer un projet
          </NavLink>
        </div>
      </div>

      <nav className="fixed inset-x-0 bottom-3 z-50 px-3 md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around rounded-full border border-border/80 bg-background/90 p-2 shadow-[0_18px_38px_rgba(15,23,42,0.14)] backdrop-blur-xl">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-full px-2 py-2 text-[10px] font-semibold transition-all ${
                    isActive ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
              >
                <Icon size={18} />
                <span className="truncate">{link.label}</span>
              </NavLink>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
