import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PenTool,
  Palette,
  Target,
  SearchCheck,
  Image as ImageIcon,
  Type,
  RefreshCw,
  BookOpen,
} from 'lucide-react'
import { brandTabs } from '../data/content'

const icons = [PenTool, Palette, Target, SearchCheck, ImageIcon, Type, RefreshCw, BookOpen]

export default function BrandServicesTabs() {
  const [activeId, setActiveId] = useState(brandTabs[0].id)
  const active = brandTabs.find((tab) => tab.id === activeId) ?? brandTabs[0]
  const activeIndex = brandTabs.findIndex((tab) => tab.id === activeId)
  const ActiveIcon = icons[activeIndex] ?? PenTool

  return (
    <section className="bg-white pt-2 pb-2 sm:pt-3 sm:pb-3">
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
        <div className="overflow-hidden rounded-[2rem] bg-slate-orb text-slate-orb-foreground shadow-2xl">
          <div className="grid min-h-[440px] items-center lg:grid-cols-[0.72fr_1.28fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + '-icon'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="flex size-14 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary"
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
                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">{active.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden min-h-[440px] items-center justify-center bg-gradient-to-br from-primary/25 via-slate-orb to-slate-orb p-12 lg:flex">
              <div className="relative h-[290px] w-full max-w-md">
                <div className="absolute inset-8 rounded-full border border-white/10" />
                <div className="absolute inset-16 rounded-full border border-primary/25" />
                <div className="absolute left-1/2 top-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[0.08] ring-1 ring-white/15">
                  <ActiveIcon className="size-12 text-primary" strokeWidth={1.3} />
                </div>
                <div className="absolute right-10 top-6 grid grid-cols-6 gap-3 opacity-40">
                  {Array.from({ length: 36 }).map((_, index) => (
                    <span key={index} className="size-1.5 rounded-full bg-white/70" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/10 px-4 py-4 sm:px-6">
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {brandTabs.map((tab, index) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  aria-pressed={tab.id === activeId}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors duration-200 sm:px-5 ${
                    tab.id === activeId
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-white/15 text-white/70 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')} {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
