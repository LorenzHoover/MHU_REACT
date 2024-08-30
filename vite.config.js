import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Ensures correct path resolution for production
  plugins: [react()],
  server: {
    port: 3000, // Your development server port
  },
  build: {
    outDir: 'dist', // Default output directory for build files
  },
});
