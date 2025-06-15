// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 set '/' if deployed at root
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
