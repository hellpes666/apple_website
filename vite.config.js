import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    sourcemap: true
  },
  
  server: {
    host: true // Позволяет доступ к серверу по IP-адресу
  }
})