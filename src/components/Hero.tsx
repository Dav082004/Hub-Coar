import { useState, type Dispatch, type FormEvent, type SetStateAction } from 'react'
import { BookOpen, Globe, Rocket, Search, Sparkles, X } from 'lucide-react'

export function Hero({
  query,
  setQuery,
}: {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}) {
  const [focused, setFocused] = useState(false)

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      document.getElementById('capacitaciones')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -left-32 h-[30rem] w-[30rem] animate-float rounded-full bg-violet-600/25 blur-[120px]" />
        <div
          className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] animate-float rounded-full bg-cyan-500/20 blur-[120px]"
          style={{ animationDelay: '-3s' }}
        />
        <div
          className="absolute -bottom-32 left-1/3 h-[24rem] w-[24rem] animate-float rounded-full bg-emerald-500/15 blur-[120px]"
          style={{ animationDelay: '-6s' }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-center backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-cyan-300" />
          <span className="font-mono text-[10px] leading-tight tracking-wide text-cyan-300 sm:text-xs">
            Taller IA & Futuro Tech | COAR Edition
          </span>
        </div>

        <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          El Futuro no se espera,{' '}
          <span className="text-gradient">se construye.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Tu portal de despegue hacia el mundo tecnológico. Encuentra cursos
          introductorios, programas internacionales y los mentores que
          impulsarán tu carrera.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 max-w-2xl"
          role="search"
          aria-label="Búsqueda de recursos"
        >
          <div
            className={`relative flex items-center gap-2 rounded-2xl border px-4 transition-all duration-300 ${
              focused
                ? 'border-cyan-500/50 bg-slate-900/80 glow-cyan'
                : 'border-slate-700 bg-slate-900/60'
            } backdrop-blur-md`}
          >
            <Search
              className={`h-5 w-5 shrink-0 transition-colors ${focused ? 'text-cyan-300' : 'text-slate-500'}`}
            />
            <label htmlFor="global-search" className="sr-only">
              Buscar cursos, programas o referentes
            </label>
            <input
              id="global-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Busca cursos, programas o referentes…"
              className="h-14 w-full min-w-0 bg-transparent text-base text-white placeholder-slate-500 outline-none sm:text-sm"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Limpiar búsqueda"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Filtra en tiempo real todo el catálogo: {`>`} escribe y baja a las
            secciones destacadas.
          </p>
        </form>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => goTo('capacitaciones')}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:from-violet-500 hover:to-cyan-400 glow-violet sm:w-auto"
          >
            <BookOpen className="h-4 w-4" />
            Explorar Cursos
          </button>
          <button
            type="button"
            onClick={() => goTo('programas')}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:border-cyan-500/60 hover:text-cyan-300 sm:w-auto"
          >
            <Globe className="h-4 w-4" />
            Programas Globales
          </button>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-500">
          {[
            { icon: <BookOpen className="h-3.5 w-3.5 text-violet-400" />, label: '12+ rutas gratuitas' },
            { icon: <Globe className="h-3.5 w-3.5 text-cyan-400" />, label: '5 programas internacionales' },
            { icon: <Rocket className="h-3.5 w-3.5 text-emerald-400" />, label: '9+ referentes en español' },
          ].map((item) => (
            <span key={item.label} className="inline-flex items-center gap-1.5">
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}