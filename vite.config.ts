// vite.config.ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Указываем базовый путь для GitHub Pages
  base:
    mode === 'production'
      ? '/netology_71.1_react-higher-order-component/'
      : '/',
  plugins: [react()],
}))
