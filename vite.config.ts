import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: { // <-- Añade esta sección server
    port: 80, // <-- Define el puerto aquí, por ejemplo 8080
  },
});