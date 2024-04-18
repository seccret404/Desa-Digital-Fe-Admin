import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  server: {
    proxy: {
      '/api': {
        target: 'https://desa-digital-bakend-jrehib3y2-seccret404s-projects.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
