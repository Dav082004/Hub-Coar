import { useMemo } from 'react'
import { CalendarDays, Check, Globe2, Orbit, Target, Users } from 'lucide-react'
import { PROGRAMS_DATA, type InternationalProgram } from '../data/hubData'
import { GlassCard, LinkButton, Reveal, SectionHeader, StatusBadge } from './ui'
import { normalize } from '../lib/utils'

function ProgramCard({ program }: { program: InternationalProgram }) {
  return (
    <GlassCard glow="cyan" className="flex h-full flex-col p-6">
      <div className="mb-1 flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
          <Orbit className="h-5 w-5" />
        </span>
        <StatusBadge status={program.status} />
      </div>

      <div className="mb-3">
        <h3 className="text-lg font-bold leading-snug text-white">{program.name}</h3>
        <p className="mt-1 font-mono text-xs text-slate-500">{program.organization}</p>
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
        {program.description}
      </p>

      <div className="mb-5 space-y-2.5 text-sm">
        <p className="flex items-start gap-2 text-slate-300">
          <Users className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
          <span className="font-medium">Perfil:</span>
          <span className="text-slate-400">{program.targetAudience}</span>
        </p>
      </div>

      <div className="mb-5 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
        <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
          Beneficios
        </p>
        <ul className="space-y-1.5">
          {program.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-xs text-slate-300">
              <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <LinkButton href={program.url} className="w-full">
        Conocer Convocatoria
      </LinkButton>
    </GlassCard>
  )
}

export function ProgramsSection({ query }: { query: string }) {
  const filtered = useMemo(() => {
    const q = normalize(query)
    return PROGRAMS_DATA.filter((program) => {
      if (!q) return true
      const haystack = normalize(
        `${program.name} ${program.organization} ${program.description} ${program.targetAudience} ${program.benefits.join(' ')}`,
      )
      return haystack.includes(q)
    })
  }, [query])

  const active = query.trim().length > 0

  return (
    <section id="programas" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-0 h-80 w-80 animate-glow-pulse rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="titulo-programas"
          eyebrow="Oportunidades Globales"
          icon={<Globe2 className="h-4 w-4 text-cyan-400" />}
          title={
            <>
              Programas internacionales{' '}
              <span className="text-gradient">& liderazgo</span>
            </>
          }
          subtitle="Becas, comunidades y programas globales a los que puedes postular desde el colegio."
        />

        {active && (
          <p className="mb-6 flex items-center justify-center gap-2 font-mono text-xs text-cyan-300">
            <Target className="h-3.5 w-3.5" />
            {filtered.length} resultado{filtered.length !== 1 && 's'} para «{query}» en Programas
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program, i) => (
            <Reveal key={program.id} delay={(i % 3) * 90}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass mx-auto mt-6 max-w-lg rounded-2xl p-10 text-center">
            <CalendarDays className="mx-auto h-10 w-10 text-slate-500" />
            <h3 className="mt-4 text-lg font-bold text-white">
              Sin convocatorias coincidentes
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Prueba con otra palabra clave. Nuevas postulaciones llegan cada mes.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}