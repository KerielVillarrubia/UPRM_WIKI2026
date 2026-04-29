import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // This 'base' tells Vite your site is at /UPRM_WIKI2026/ and not the root
  base: '/UPRM_WIKI2026/', 
  plugins: [
    react(),
  ]
});
