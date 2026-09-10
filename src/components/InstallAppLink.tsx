import { useState } from 'react'
import { Smartphone, Share, PlusSquare } from 'lucide-react'
import { useInstallPrompt } from './hooks/useInstallPrompt'

export default function InstallAppLink({ className = '' }: { className?: string }) {
  const { canInstall, isIos, isStandalone, promptInstall } = useInstallPrompt()
  const [showIosHint, setShowIosHint] = useState(false)

  if (isStandalone) return null

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (canInstall) {
      await promptInstall()
      return
    }
    if (isIos) {
      setShowIosHint((v) => !v)
      return
    }
    // Ni prompt natif disponible, ni iOS détecté (ex: navigateur qui ne supporte pas l'installation) :
    // on affiche quand même les instructions génériques.
    setShowIosHint((v) => !v)
  }

  return (
    <div className="relative w-fit">
      <a
        href="#"
        onClick={handleClick}
        className={className}
        style={{ color: '#00D4F5' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
        onMouseLeave={e => (e.currentTarget.style.color = '#00D4F5')}
      >
        <Smartphone size={13} />
        Télécharger l'application mobile
      </a>

      {showIosHint && (
        <div className="absolute bottom-full left-0 mb-2 w-64 rounded-xl bg-white p-4 text-xs text-[#0d3a44] shadow-xl z-20">
          <p className="font-semibold mb-2">Installer l'application :</p>
          <p className="flex items-center gap-1.5 mb-1.5">
            <Share size={13} className="shrink-0" /> Appuyez sur « Partager »
          </p>
          <p className="flex items-center gap-1.5">
            <PlusSquare size={13} className="shrink-0" /> Puis « Sur l'écran d'accueil »
          </p>
          <button
            type="button"
            onClick={() => setShowIosHint(false)}
            className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-[#0d3a44]/50 hover:text-[#0d3a44]"
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  )
}
