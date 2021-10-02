import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import visualizer from 'rollup-plugin-visualizer'

export default defineConfig(({ command, mode }) => {
  console.log(mode, command)

  const config = {
    root: 'src',
    cacheDir: '../.yarn/cache/.vite',
    plugins: [
      // Compress assets
      compression({
        ext: 'br',
        algorithm: 'brotliCompress',
        threshold: 256,
        verbose: false,
        filter: /\.(js|css|svg)$/i
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
          app: './src/index.html'
        },
        output: {
          // Custom output naming
          assetFileNames: 'web/[name].[ext]',
          entryFileNames: 'web/[name].js',
          chunkFileNames: 'web/[name].js',
          // Put all modules in single chunk
          manualChunks: () => 'app',
        }
      }
    }
  }
  // Open a bundle visualizer
  if (mode === 'analyze') {
    config.plugins?.push(
      visualizer({
        title: 'Vite Bundle Report',
        filename: '.yarn/cache/.vite/report.html',
        brotliSize: true,
        open: true
      })
    )
  }

  return config
})
