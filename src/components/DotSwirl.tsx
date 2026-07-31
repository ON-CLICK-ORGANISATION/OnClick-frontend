import { useMemo } from 'react'

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
    return Array.from({ length: count }, (_, i) => ({
      cx: +(rand() * 400).toFixed(2),
      cy: +(70 + rand() * 160).toFixed(2),
      r: +(1.8 + rand() * 4).toFixed(2),
      fill: COLORS[i % COLORS.length],
      opacity: +(0.35 + rand() * 0.65).toFixed(2),
    }))
  }, [count, seed])

  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} opacity={d.opacity} />
      ))}
    </svg>
  )
}
