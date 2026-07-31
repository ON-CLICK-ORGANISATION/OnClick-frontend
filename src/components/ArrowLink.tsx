import ArrowIcon from './ArrowIcon'

export default function ArrowLink({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <ArrowIcon className="size-4" />
    </span>
  )
}
