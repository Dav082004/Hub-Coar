import { useMemo } from 'react'
import {
  Github,
  MessageCircle,
  Mic,
  Twitter,
  Twitch,
  Users,
  Youtube,
} from 'lucide-react'
import { INFLUENCERS_DATA, type TechInfluencer } from '../data/hubData'
import { Badge, GlassCard, GradientAvatar, Reveal, SectionHeader, type BadgeTone } from './ui'
import { cn, normalize } from '../lib/utils'

const CHANNELS = [
  { key: 'youtube', label: 'YouTube', icon: Youtube, color: 'text-red-400 hover:text-red-300' },
  { key: 'twitch', label: 'Twitch', icon: Twitch, color: 'text-purple-400 hover:text-purple-300' },
  { key: 'github', label: 'GitHub', icon: Github, color: 'text-slate-300 hover:text-white' },
  { key: 'twitter', label: 'Twitter', icon: Twitter, color: 'text-sky-400 hover:text-sky-300' },
] as const

function categoryTone(category: string): BadgeTone {
  switch (category) {
    case 'IA':
      return 'violet'
    case 'Frontend':
      return 'cyan'
    case 'Full-Stack':
      return 'emerald'
    case 'Desarrollo Web':
      return 'emerald'
    default:
      return 'slate'
  }
}

function ReferentCard({ influencer }: { influencer: TechInfluencer }) {
  const glow =
    influencer.category === 'IA'
      ? 'violet'
      : influencer.category === 'Frontend'
        ? 'cyan'
        : 'neutral'

  return (
    <GlassCard glow={glow} className="flex h-full flex-col p-6">
      <div className="mb-4 flex items-center gap-4">
        <GradientAvatar name={influencer.name} />
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-white">{influencer.name}</h3>
          <p className="font-mono text-xs text-cyan-400">{influencer.handle}</p>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <Badge tone={categoryTone(influencer.category)}>{influencer.category}</Badge>
        <span className="font-mono text-[11px] text-slate-500">{influencer.specialty}</span>
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">{influencer.bio}</p>

      <div className="flex flex-wrap items-center gap-2 border-t border-slate-800 pt-4">
        {CHANNELS.filter((c) => influencer.channels[c.key]).map((channel) => (
          <a
            key={channel.key}
            href={influencer.channels[channel.key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${influencer.name} en ${channel.label}`}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600',
              channel.color,
            )}
          >
            <channel.icon className="h-4 w-4" />
          </a>
        ))}
        <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-slate-600">
          Seguir
        </span>
      </div>
    </GlassCard>
  )
}

export function ReferentsSection({ query }: { query: string }) {
  const filtered = useMemo(() => {
    const q = normalize(query)
    return INFLUENCERS_DATA.filter((ref) => {
      if (!q) return true
      const haystack = normalize(
        `${ref.name} ${ref.handle} ${ref.specialty} ${ref.category} ${ref.bio}`,
      )
      return haystack.includes(q)
    })
  }, [query])

  const active = query.trim().length > 0

  return (
    <section id="referentes" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-20 left-0 h-80 w-80 animate-glow-pulse rounded-full bg-violet-500/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="titulo-referentes"
          eyebrow="Comunidad Tech"
          icon={<Users className="h-4 w-4 text-emerald-400" />}
          title={
            <>
              Referentes en <span className="text-gradient">español</span> para seguir
              aprendiendo
            </>
          }
          subtitle="Creadores de contenido y divulgadores que hacen la tecnología accesible todos los días."
        />

        {active && (
          <p className="mb-6 flex items-center justify-center gap-2 font-mono text-xs text-emerald-300">
            <Mic className="h-3.5 w-3.5" />
            {filtered.length} referente{filtered.length !== 1 && 's'} para «{query}»
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ref, i) => (
            <Reveal key={ref.id} delay={(i % 3) * 90}>
              <ReferentCard influencer={ref} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass mx-auto mt-6 max-w-lg rounded-2xl p-10 text-center">
            <MessageCircle className="mx-auto h-10 w-10 text-slate-500" />
            <h3 className="mt-4 text-lg font-bold text-white">Sin referentes coincidentes</h3>
            <p className="mt-2 text-sm text-slate-400">Prueba buscar por nombre o especialidad.</p>
          </div>
        )}
      </div>
    </section>
  )
}