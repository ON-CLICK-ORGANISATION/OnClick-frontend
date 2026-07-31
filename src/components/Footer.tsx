import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-border bg-mist">
      <div className="container-page flex flex-col gap-8 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg tracking-[0.22em] leading-4">
            ONLY
            <br />
            CLIK
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            L'agence digitale qui aide les professionnels à exister en ligne et à développer leur activité.
          </p>
        </div>

        <div className="flex gap-14">
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Navigation</span>
            <Link className="hover:underline" to="/">
              Accueil
            </Link>
            <Link className="hover:underline" to="/services">
              Services
            </Link>
            <Link className="hover:underline" to="/realisations">
              Réalisations
            </Link>
            <Link className="hover:underline" to="/demarrer-un-projet">
              Démarrer un projet
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact</span>
            <a href="mailto:contact@onlyclik.com" className="hover:underline">
              contact@onlyclik.com
            </a>
          </div>
        </div>
      </div>

      <div className="container-page pb-8 text-xs text-muted-foreground">
        © {year} Only Clik. Tous droits réservés.
      </div>
    </footer>
  )
}
