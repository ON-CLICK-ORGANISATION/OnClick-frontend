import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import type { ServiceTab } from '../data/content'

interface ServiceTabsPanelProps {
  tabs: ServiceTab[]
  icons: LucideIcon[]
  imagePrefix?: string  //  Nouveau paramètre optionnel
}

export default function ServiceTabsPanel({ tabs, icons, imagePrefix = 'aeoseogeo' }: ServiceTabsPanelProps) {
  const [activeId, setActiveId] = useState(tabs[0].id)
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0]
  const activeIndex = tabs.findIndex((tab) => tab.id === activeId)
  const ActiveIcon = icons[activeIndex] ?? icons[0]

  // Images pour chaque service (chemin dynamique selon imagePrefix)
  const serviceImages = [
    `/images/projects/${imagePrefix}-1.png`,
    `/images/projects/${imagePrefix}-2.png`,
    `/images/projects/${imagePrefix}-3.png`,
    `/images/projects/${imagePrefix}-4.png`,
    `/images/projects/${imagePrefix}-5.png`,
    `/images/projects/${imagePrefix}-6.png`,
    `/images/projects/${imagePrefix}-7.png`,
    `/images/projects/${imagePrefix}-8.png`,
  ]

  // Positions personnalisables pour chaque image (en cm)
  // x: négatif = gauche, positif = droite
  // y: négatif = haut, positif = bas
  const imagePositions = [
    { x: 0, y: 0 },     // 01
    { x: 0, y: 0 },     // 02
    { x: 0, y: 0 },     // 03
    { x: 0, y: 0 },     // 04
    { x: 0, y: 0 },     // 05
    { x: 0, y: 0 },     // 06
    { x: 0, y: 0 },     // 07
    { x: 0, y: 0 },     // 08
  ]

  const activeImage = serviceImages[activeIndex] ?? serviceImages[0]
  const activePos = imagePositions[activeIndex] ?? { x: 0, y: 0 }

  return (
    <section className="bg-white pt-2 pb-2 sm:pt-3 sm:pb-3">
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
        <div className="relative overflow-hidden rounded-[2rem] text-white shadow-2xl">
          {/* Image de fond du service actif */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + '-bg'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <img
                src={activeImage}
                alt=""
                className="h-full w-full object-cover"
                style={{
                  objectPosition: `calc(50% + ${activePos.x}cm) calc(50% + ${activePos.y}cm)`,
                }}
              />
              {/* Overlay sombre pour la lisibilité */}
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </AnimatePresence>

          {/* Contenu principal */}
          <div className="relative grid min-h-[420px] items-center px-6 py-12 sm:min-h-[480px] sm:px-12 sm:py-16 lg:min-h-[580px] lg:px-16 lg:py-20">
            {/* translateY pour monter le bloc gauche : uniquement à partir de lg, pour ne pas décaler le contenu sur mobile/tablette */}
            <div className="max-w-2xl lg:-translate-y-[2cm]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + '-icon'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="flex size-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white"
                >
                  <ActiveIcon className="size-6" strokeWidth={1.7} />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + '-content'}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    Service {String(activeIndex + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.04em]">
                    {active.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                    {active.text}
                  </p>
                  {/* Bouton "Démarrer un projet" */}
                  <Link
                    to="/demarrer-un-projet"
                    className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
                  >
                    Démarrer un projet
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Barre des boutons en forme de pilule flottante */}
          <div className="relative px-3 py-5 sm:px-5 sm:py-6">
            <div className="w-fit mx-auto rounded-full border border-white/25 bg-black/20 backdrop-blur-md px-2 py-1.5 sm:px-3 sm:py-2">
              <div className="flex gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveId(tab.id)}
                    aria-pressed={tab.id === activeId}
                    className={`shrink-0 rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition-all duration-200 whitespace-nowrap sm:px-3 sm:py-2 sm:text-[11px] ${
                      tab.id === activeId
                        ? 'bg-white text-slate-900 shadow-md'
                        : 'bg-transparent text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')} {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
