import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output directory is correct
    rollupOptions: {
      // Ensure entry point is properly configured
      input: './index.html',
    },
  },
});
