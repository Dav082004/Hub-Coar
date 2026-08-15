import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: '/<repo>/' is required for GitHub Pages sub-path hosting
export default defineConfig({
  base: '/Hub-Coar/',
  plugins: [react(), tailwindcss()],
})