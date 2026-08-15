import { useEffect, useState, type ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'
import { cn, slugify } from '../lib/utils'

type BadgeTone =
  | 'violet'
  | 'cyan'
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'sky'
  | 'slate'

const badgeTones: Record<BadgeTone, string> = {
  violet: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  rose: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
  sky: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
  slate: 'bg-slate-500/10 text-slate-300 border-slate-500/30',
}

export function Badge({
  children,
  tone = 'slate',
  className,
}: {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-tight',
        badgeTones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function StatusBadge({
  status,
}: {
  status: 'Postulaciones Abiertas' | 'Próximamente' | 'Anual'
}) {
  const tone: Record<typeof status, BadgeTone> = {
    'Postulaciones Abiertas': 'emerald',
    Próximamente: 'amber',
    Anual: 'sky',
  }
  return (
    <Badge tone={tone[status]} className="max-w-full uppercase leading-tight">
      {status === 'Postulaciones Abiertas' && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
      )}
      {status}
    </Badge>
  )
}

export function GlassCard({
  children,
  className,
  glow = 'neutral',
}: {
  children: ReactNode
  className?: string
  glow?: 'neutral' | 'violet' | 'cyan' | 'emerald'
}) {
  const glowClass =
    glow === 'violet'
      ? 'glow-violet'
      : glow === 'cyan'
        ? 'glow-cyan'
        : glow === 'emerald'
          ? 'glow-emerald'
          : ''
  return (
    <div
      className={cn(
        'group relative rounded-2xl glass transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-slate-700',
        glowClass,
        className,
      )}
    >
      {children}
    </div>
  )
}

export function GradientAvatar({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const gradients = [
    'from-violet-500 to-cyan-500',
    'from-cyan-500 to-emerald-500',
    'from-emerald-500 to-violet-500',
    'from-fuchsia-500 to-violet-500',
  ]
  const index = name.charCodeAt(0) % gradients.length
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
  return (
    <div
      className={cn(
        'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br font-mono text-lg font-bold text-white',
        gradients[index],
        className,
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  icon,
  id,
}: {
  eyebrow: string
  title: ReactNode
  subtitle: string
  icon?: ReactNode
  id: string
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 flex items-center justify-center gap-2">
        <span>{icon}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400 sm:text-xs">
          {eyebrow}
        </span>
      </div>
      <h2
        id={id}
        className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">{subtitle}</p>
    </div>
  )
}

export function LinkButton({
  href,
  children,
  variant = 'solid',
  className,
  target = '_blank',
}: {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline' | 'ghost'
  className?: string
  target?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300'
  const styles = {
    solid:
      'bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:scale-[1.03] hover:from-violet-500 hover:to-cyan-400 glow-violet',
    outline:
      'border border-slate-700 bg-slate-900/40 text-slate-200 backdrop-blur hover:border-cyan-500/60 hover:text-cyan-300',
    ghost:
      'text-slate-300 hover:bg-slate-800/60 hover:text-white',
  }
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={cn(base, styles[variant], className)}
    >
      {children}
      <ExternalLink className={cn('h-4 w-4', variant === 'solid' && 'opacity-80')} />
    </a>
  )
}

export function useInViewThreshold<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const [ref, setRef] = useState<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return { ref: setRef, visible }
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useInViewThreshold()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { slugify }
export type { BadgeTone }