import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CoursesHub } from './components/CoursesHub'
import { ProgramsSection } from './components/ProgramsSection'
import { ReferentsSection } from './components/ReferentsSection'
import { Footer } from './components/Footer'
import { cn } from './lib/utils'

export default function App() {
  const [query, setQuery] = useState('')
  const active = query.trim().length > 0

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-night">
      <Navbar />
      <main>
        <Hero query={query} setQuery={setQuery} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              'mb-6 flex flex-wrap items-center gap-2 transition-all duration-300',
              active ? 'opacity-100' : 'opacity-0 pointer-events-none',
            )}
            aria-hidden={!active}
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
              Resultados para «{query}»
            </span>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="cursor-pointer rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1 font-mono text-[11px] text-slate-300 transition-colors hover:border-rose-500/50 hover:text-rose-300"
            >
              Limpiar
            </button>
          </div>
        </div>

        <CoursesHub query={query} />
        <ReferentsSection query={query} />
        <ProgramsSection query={query} />
      </main>
      <Footer />
    </div>
  )
}