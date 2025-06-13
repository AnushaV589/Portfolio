import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-username' and 'your-repo-name'
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // 👈 important!
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
