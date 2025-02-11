import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 10000,
    strictPort: true,
    allowedHosts: ["portfolio-ahqaf.onrender.com"] // Add this line
  }
  
})

