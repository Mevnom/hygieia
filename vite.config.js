import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Hygieia.co/',  // Replace 'hygieia' with your actual repo name
})

