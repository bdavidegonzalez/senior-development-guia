import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 'base' debe ser el nombre de tu repositorio si publicas en username.github.io/repo/
  // Usar './' permite que funcione en cualquier subcarpeta (relativo)
  base: './',
  build: {
    outDir: 'dist',
  }
})
