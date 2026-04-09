/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Avoid eagerly preloading many code-split chunks on first load.
    // Dynamic chunks will still preload when actually requested via __vitePreload.
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('/node_modules/react/') ||
              id.includes('/node_modules/react-dom/') ||
              id.includes('/node_modules/scheduler/')
            ) return 'react-core';
            if (id.includes('lucide-react') || id.includes('@heroicons/react')) return 'icons-vendor';
            if (id.includes('@headlessui/react')) return 'ui-vendor';
            if (id.includes('@firebase/auth') || id.includes('firebase/auth')) return 'firebase-auth';
            if (id.includes('@firebase/firestore') || id.includes('firebase/firestore')) return 'firebase-firestore';
            if (id.includes('@firebase/storage') || id.includes('firebase/storage')) return 'firebase-storage';
            if (id.includes('firebase')) return 'firebase-core';
            if (id.includes('jspdf')) return 'jspdf-vendor';
            if (id.includes('html2canvas')) return 'html2canvas-vendor';
            if (id.includes('@google/genai')) return 'ai-vendor';
            if (id.includes('framer-motion')) return 'motion-vendor';
          }

          if (id.includes('/src/ai/')) return 'ai-runtime';
          if (id.includes('/src/components/tools/DoughyAssistantPanel')) return 'assistant-panel';
          if (id.includes('/src/components/tools/DoughyAssistantShell')) return 'assistant-shell';
          if (id.includes('/src/components/tools/DoughRescueModal')) return 'assistant-rescue';
          if (id.includes('/src/components/AssistantPage.tsx')) return 'assistant-page';
          if (id.includes('/src/components/styles/AiStyleBuilderModal')) return 'style-builder';
          if (id.includes('/src/pages/mylab/levain/components/LevainAssistant')) return 'levain-assistant';
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
    exclude: [...configDefaults.exclude, 'functions/**'],
  },
})
