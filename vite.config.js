import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import visualizer from 'rollup-plugin-visualizer'

let analyze = process.argv.includes('--analyze')

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../build',
    emptyOutDir: true
  },
  plugins: [
    // Compress assets
    compression({
      threshold: 256,
      verbose: false,
      algorithm: 'brotliCompress',
      ext: 'br'
    }),
    // Open a bundle visualizer
    analyze &&
      visualizer({
        filename: 'build/report.html',
        brotliSize: true,
        open: true
      })
  ]
})
