import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === 'gh' ? '/ellipsys-site-v0.1.2/' : '/',
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
  build: {
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild'
  },
  server: { port: 5173, strictPort: false }
}));
