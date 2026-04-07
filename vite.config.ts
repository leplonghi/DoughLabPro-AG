/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) return 'react-vendor';
            if (id.includes('@firebase/auth') || id.includes('firebase/auth')) return 'firebase-auth';
            if (id.includes('@firebase/firestore') || id.includes('firebase/firestore')) return 'firebase-firestore';
            if (id.includes('@firebase/storage') || id.includes('firebase/storage')) return 'firebase-storage';
            if (id.includes('firebase')) return 'firebase-core';
            if (id.includes('jspdf')) return 'jspdf-vendor';
            if (id.includes('html2canvas')) return 'html2canvas-vendor';
            if (id.includes('@google/genai')) return 'ai-vendor';
            if (id.includes('framer-motion')) return 'motion-vendor';
          }

          if (id.includes('/src/ai/') || id.includes('/src/components/tools/DoughyAssistant')) {
            return 'assistant';
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
