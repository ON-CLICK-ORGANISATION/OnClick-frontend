import { useMemo } from 'react'
import { motion } from 'framer-motion'

const COLORS = ['var(--color-primary)', 'var(--color-magenta)', 'var(--color-lemon)', 'oklch(0.88 0.005 260)']

function seededRandom(seed: number) {
  let value = seed
  return () => {
    value = (value * 9301 + 49297) % 233280
    return value / 233280
  }
}

interface DotSwirlProps {
  className?: string
  count?: number
  seed?: number
}

export default function DotSwirl({ className = '', count = 40, seed = 42 }: DotSwirlProps) {
  const dots = useMemo(() => {
    const rand = seededRandom(seed)
    return Array.from({ length: count }, (_, i) => {
      const cx = +(rand() * 400).toFixed(2)
      const cy = +(70 + rand() * 160).toFixed(2)
      // Amplitude & timing du mouvement de dérive (organique, chaque point est différent)
      const dx = 8 + rand() * 22
      const dy = 8 + rand() * 22
      const duration = 5 + rand() * 6
      const delay = rand() * 4
      return {
        cx,
        cy,
        r: +(1.8 + rand() * 4).toFixed(2),
        fill: COLORS[i % COLORS.length],
        opacity: +(0.35 + rand() * 0.65).toFixed(2),
        dx,
        dy,
        duration,
        delay,
      }
    })
  }, [count, seed])

  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      {dots.map((d, i) => (
        <motion.circle
          key={i}
          r={d.r}
          fill={d.fill}
          initial={{ cx: d.cx, cy: d.cy, opacity: 0 }}
          animate={{
            cx: [d.cx - d.dx, d.cx + d.dx, d.cx - d.dx * 0.5, d.cx - d.dx],
            cy: [d.cy + d.dy, d.cy - d.dy, d.cy - d.dy * 0.4, d.cy + d.dy],
            opacity: d.opacity,
          }}
          transition={{
            cx: { duration: d.duration, delay: d.delay, repeat: Infinity, ease: 'easeInOut' },
            cy: { duration: d.duration, delay: d.delay, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.8, delay: d.delay * 0.2 },
          }}
        />
      ))}
    </svg>
  )
}
