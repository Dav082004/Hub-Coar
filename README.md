# De Espectadores a Creadores

Hub Tecnológico y de Oportunidades para Estudiantes COAR. Portal de despegue hacia el mundo tech: cursos gratuitos, programas internacionales y referentes en español.

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo
npm run build   # build de producción en /dist
npm run preview # previsualizar el build
```

## Desarrollo

- React + TypeScript + Vite + Tailwind CSS
- Datos en `src/data/hubData.ts` (cursos, programas, referentes)

## Deploy

Al hacer push a `main`, el workflow `.github/workflows/deploy.yml` publica la app en GitHub Pages: `https://Dav082004.github.io/Hub-Coar/`