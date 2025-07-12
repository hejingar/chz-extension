import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: '.' // means dist/manifest.json
        },
        {
          src: 'popup.html',
          dest: '.' // means dist/popup.html
        },
        {
          src: 'icon.svg',
          dest: '.',
          rename: 'icon.png'
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup.tsx'),
        background: resolve(__dirname, 'src/background.ts'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          const name = chunkInfo.name;
          if (name === 'background') return 'background.js';
          if (name === 'popup') return 'popup.js';
          return '[name].js';
        },
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'popup.css';
          }
          return '[name].[ext]';
        }
      }
    },
    target: 'es2015',
    minify: false
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    global: 'globalThis',
  }
})