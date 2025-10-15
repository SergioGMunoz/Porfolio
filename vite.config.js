import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
      "@/components": path.resolve(process.cwd(), "./src/components"),
      "@/pages": path.resolve(process.cwd(), "./src/pages"),
      "@/hooks": path.resolve(process.cwd(), "./src/hooks"),
      "@/assets": path.resolve(process.cwd(), "./src/assets"),
    },
  },
})
