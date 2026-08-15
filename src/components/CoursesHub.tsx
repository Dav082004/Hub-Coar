import { useMemo, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import {
  Award,
  BookOpen,
  Brain,
  Database,
  Filter,
  Gamepad2,
  Globe,
  GraduationCap,
  Languages,
  Library,
  Sparkles,
  Terminal,
  type LucideIcon,
} from 'lucide-react'
import { COURSES_DATA, COURSE_CATEGORIES, type CourseItem } from '../data/hubData'
import { Badge, GlassCard, Reveal, SectionHeader, LinkButton } from './ui'
import { cn, normalize } from '../lib/utils'

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  IA: Sparkles,
  'Machine Learning': Brain,
  'Desarrollo Web': Globe,
  Lógica: Terminal,
  'Bases de Datos': Database,
  Videojuegos: Gamepad2,
}

const CATEGORY_KEY: Record<string, string> = {
  Todas: 'todas',
  IA: 'ia',
  'Machine Learning': 'machine-learning',
  'Desarrollo Web': 'desarrollo-web',
  Lógica: 'logica',
  'Bases de Datos': 'bases-de-datos',
  Videojuegos: 'videojuegos',
}

const LANGUAGES = ['Todos', 'Español', 'Inglés'] as const
const LEVELS = ['Todos', 'Introductorio', 'Intermedio'] as const

function categoryTone(category: CourseItem['category']): 'violet' | 'cyan' | 'emerald' | 'amber' | 'sky' | 'rose' {
  const map = {
    IA: 'violet',
    'Machine Learning': 'cyan',
    'Desarrollo Web': 'emerald',
    Lógica: 'amber',
    'Bases de Datos': 'sky',
    Videojuegos: 'rose',
  } as const
  return map[category]
}

function CourseCard({ course }: { course: CourseItem }) {
  const Icon = CATEGORY_ICONS[course.category] ?? BookOpen
  return (
    <GlassCard glow="violet" className="flex h-full flex-col p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300',
            'border-violet-500/30 bg-violet-500/10 text-violet-300 group-hover:scale-110 group-hover:bg-violet-500/20',
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-slate-500">
          #{course.id.padStart(3, '0')}
        </span>
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-1.5">
        <Badge tone={categoryTone(course.category)}>{course.category}</Badge>
        <Badge tone={course.free ? 'emerald' : 'slate'}>Gratuito</Badge>
        {course.certificate && <Badge tone="cyan">Certificado</Badge>}
      </div>

      <h3 className="mb-1.5 text-lg font-bold leading-snug text-white">{course.title}</h3>
      <p className="mb-2 font-mono text-xs text-slate-500">{course.provider}</p>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
        {course.description}
      </p>

      <div className="mb-4 flex items-center gap-4 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Languages className="h-3.5 w-3.5 text-cyan-400" />
          {course.language}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
          {course.level}
        </span>
      </div>

      <LinkButton href={course.url} className="w-full">
        Empezar a Aprender
      </LinkButton>
    </GlassCard>
  )
}

export function CoursesHub({ query }: { query: string }) {
  const [category, setCategory] = useState<string>('todas')
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>('Todos')
  const [level, setLevel] = useState<(typeof LEVELS)[number]>('Todos')

  const filtered = useMemo(() => {
    const q = normalize(query)
    return COURSES_DATA.filter((course) => {
      if (category !== 'todas' && CATEGORY_KEY[course.category] !== category) return false
      if (language !== 'Todos' && course.language !== language) return false
      if (level !== 'Todos' && course.level !== level) return false
      if (!q) return true
      const haystack = normalize(
        `${course.title} ${course.provider} ${course.category} ${course.description} ${course.language}`,
      )
      return haystack.includes(q)
    })
  }, [category, language, level, query])

  const active = query.trim().length > 0
  const hasResults = filtered.length > 0

  return (
    <section id="capacitaciones" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="titulo-capacitaciones"
          eyebrow="Hub de Capacitación"
          icon={<Library className="h-4 w-4 text-violet-400" />}
          title={
            <>
              Cursos y <span className="text-gradient">certificaciones gratuitas</span>
            </>
          }
          subtitle="Filtra por categoría, idioma y nivel. Todos los recursos son gratuitos y 100% en línea."
        />

        <div
          className={cn(
            'mb-10 transition-all duration-500',
            active && 'rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-4 sm:p-6',
          )}
        >
          {active && (
            <p className="mb-4 flex items-center gap-2 font-mono text-xs text-cyan-300">
              <Filter className="h-3.5 w-3.5" />
              {filtered.length} resultado{filtered.length !== 1 && 's'} para «{query}» en
              Capacitaciones
            </p>
          )}
          <Tabs.Root value={category} onValueChange={setCategory} className="w-full">
            <Tabs.List
              className="scrollbar-hide -mx-4 flex flex-nowrap gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
              aria-label="Categorías de cursos"
            >
              {COURSE_CATEGORIES.map((cat) => {
                const key = CATEGORY_KEY[cat]
                const Icon = cat === 'Todas' ? BookOpen : CATEGORY_ICONS[cat] ?? BookOpen
                return (
                  <Tabs.Trigger
                    key={key}
                    value={key}
                    className={cn(
                      'inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl border px-3 py-2 font-mono text-xs font-medium tracking-tight transition-all duration-300 sm:px-3.5',
                      category === key
                        ? 'border-cyan-500/60 bg-cyan-500/15 text-cyan-300 glow-cyan'
                        : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:text-slate-200',
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {cat}
                  </Tabs.Trigger>
                )
              })}
            </Tabs.List>
          </Tabs.Root>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                <Languages className="h-3.5 w-3.5" />
                Idioma
              </span>
              <div className="flex rounded-lg border border-slate-800 bg-slate-900/50 p-1">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={cn(
                      'shrink-0 cursor-pointer rounded-md px-2.5 py-1.5 text-xs font-medium transition-all sm:px-3',
                      language === lang
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'text-slate-400 hover:text-slate-200',
                    )}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                <GraduationCap className="h-3.5 w-3.5" />
                Nivel
              </span>
              <div className="flex flex-wrap rounded-lg border border-slate-800 bg-slate-900/50 p-1">
                {LEVELS.map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setLevel(lvl)}
                    className={cn(
                      'shrink-0 cursor-pointer rounded-md px-2.5 py-1.5 text-xs font-medium transition-all sm:px-3',
                      level === lvl
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'text-slate-400 hover:text-slate-200',
                    )}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {hasResults ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course, i) => (
              <Reveal key={course.id} delay={(i % 3) * 90}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="glass mx-auto max-w-lg rounded-2xl p-10 text-center">
            <Award className="mx-auto h-10 w-10 text-slate-500" />
            <h3 className="mt-4 text-lg font-bold text-white">
              Sin coincidencias en cursos
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Ajusta los filtros o prueba otra palabra clave.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}