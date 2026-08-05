import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t border-neutral-800 bg-neutral-900 text-neutral-100">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        {/* Colonne 1 : Branding & Description */}
        <div>
          <p className="font-display text-lg tracking-[0.22em] leading-4 font-bold">
            <span className="text-[#FDE68A]">ONLY CLIK</span>
          </p>
          <p className="mt-4 max-w-xs text-sm text-neutral-400">
            L'agence digitale qui aide les professionnels à exister en ligne et à développer leur activité.
          </p>
        </div>

        {/* Colonnes de liens */}
        <div className="flex gap-14">
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Navigation</span>
            <Link className="text-neutral-300 transition-colors hover:text-white hover:underline" to="/">
              Accueil
            </Link>
            <Link className="text-neutral-300 transition-colors hover:text-white hover:underline" to="/services">
              Services
            </Link>
            <Link className="text-neutral-300 transition-colors hover:text-white hover:underline" to="/realisations">
              Réalisations
            </Link>
            <Link className="text-neutral-300 transition-colors hover:text-white hover:underline" to="/demarrer-un-projet">
              Démarrer un projet
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Contact</span>
            <a href="mailto:contact@onlyclik.com" className="text-neutral-300 transition-colors hover:text-white hover:underline">
              contact@onlyclik.com
            </a>
          </div>
        </div>
      </div>

      {/* Barre de Copyright bas de page */}
      <div className="border-t border-neutral-800/80">
        <div className="container-page py-6 text-xs text-neutral-400">
          © {year} Only Clik. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}