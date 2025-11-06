import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mini-Project1-React/',         // 👈 importante para Vercel y Netlify
})
