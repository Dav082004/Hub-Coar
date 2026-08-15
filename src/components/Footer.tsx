import { Code2, Github, Heart, Linkedin, Rocket, Zap } from 'lucide-react'

const USEFUL_LINKS = [
  { label: 'Oracle Next Education', href: 'https://www.oracle.com/lad/education/oracle-next-education/' },
  { label: 'GitHub Skills', href: 'https://skills.github.com/' },
  { label: 'Kaggle Learn', href: 'https://www.kaggle.com/learn' },
  { label: 'FreeCodeCamp', href: 'https://www.freecodecamp.org/espanol/' },
  { label: 'Aspire Leaders', href: 'https://www.aspireleaders.org/' },
  { label: 'GitHub Education', href: 'https://education.github.com/' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500">
                <Zap className="h-5 w-5 text-white" fill="currentColor" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-extrabold tracking-tight text-white">
                  De Espectadores
                </span>
                <span className="block text-sm font-extrabold tracking-tight text-gradient">
                  a Creadores
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Hub tecnológico y de oportunidades para estudiantes COAR. Tu
              despegue hacia la industria tech comienza aquí.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://github.com/Dav082004/Hub-Coar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Repositorio en GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-slate-600 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-slate-600 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              Enlaces Útiles
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {USEFUL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
              Del Taller COAR
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              «De Espectadores a Creadores» es un proyecto educativo del taller
              <span className="text-slate-200"> IA & Futuro Tech | COAR </span>
              para inspirar a la próxima generación de creadores en español.
            </p>
            <a
              href="https://github.com/Dav082004/Hub-Coar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-2 text-xs font-semibold text-slate-200 transition-all duration-300 hover:border-emerald-500/50 hover:text-emerald-300"
            >
              <Code2 className="h-4 w-4" />
              Código abierto en GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <p className="inline-flex items-center gap-1.5">
            Hecho en COAR con
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
            para la comunidad estudiantil.
          </p>
          <p className="inline-flex items-center gap-1.5 font-mono">
            <Rocket className="h-3.5 w-3.5 text-cyan-400" />
            De Espectadores a Creadores · 2026
          </p>
        </div>
      </div>
    </footer>
  )
}