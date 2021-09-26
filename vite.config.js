import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import visualizer from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig({
  root: 'src',
  cacheDir: '../.yarn/cache/.vite',
  plugins: [
    // Compress assets
    compression({
      ext: 'br',
      algorithm: 'brotliCompress',
      threshold: 256,
      verbose: false,
      filter: file => {
        return /\.json/.exec(file) ? false : true
      }
    }),
    // Open a bundle visualizer
    process.argv.includes('--analyze') &&
      visualizer({
        filename: 'node_modules/.vite/report.html',
        brotliSize: true,
        open: true
      })
  ],
  server: {
    open: process.argv.includes('--open')
  },
  resolve: {
    alias: []
  },
  build: {
    outDir: '../build',
    manifest: true,
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, './src/index.html')
      },
      output: {
        // Custom output naming
        chunkFileNames: 'scripts/[name].js',
        entryFileNames: 'scripts/[name].js',
        assetFileNames: ({ name }) =>
          name.endsWith('.css') ? 'styles/[name].[ext]' : 'assets/[name].[ext]',

        // Assign modules to chunk names
        manualChunks: id => {
          return /(quill|highlight)/.exec(id)
            ? 'lazy'
            : /(node_modules)/.exec(id)
            ? 'core'
            : 'app'
        }
      }
    }
  }
})
