import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => {
  // Choose the manifest file based on the mode (chrome / firefox)
	const manifestFile = `manifest.${mode}.json`
	const outDir = `dist-${mode}`

	return {
		plugins: [
			react(),
			viteStaticCopy({
			targets: [
				{
				src: manifestFile,
				dest: '.', // becomes dist/manifest.json
				rename: 'manifest.json'
				}
			]
			})
		],
		build: {
			outDir: outDir,
			rollupOptions: {
			input: {
				popup: resolve(__dirname, 'popup.html'),
				background: resolve(__dirname, 'src/background.ts'),
			},
			output: {
				entryFileNames: (chunkInfo) => {
				return chunkInfo.name === 'background' ? 'background.js' : '[name].js'
				},
				chunkFileNames: '[name].js',
				assetFileNames: '[name].[ext]'
			}
			},
			target: 'es2015',
			minify: false
		},
		define: {
			'process.env.NODE_ENV': JSON.stringify('production')
		},
		optimizeDeps: {
			include: ['react', 'react-dom']
		}
	}
})
