import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/forums': {
        target: 'https://fora-backend.onrender.com',
        changeOrigin: true,
        
      }
    }
  }
})