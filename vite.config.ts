import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({	
base: '/KNIO_PROEKT/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
