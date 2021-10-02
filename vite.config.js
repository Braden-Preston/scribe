import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import visualizer from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  console.log(mode, command)

  const config = {
    root: 'src',
    cacheDir: '../.yarn/cache/.vite',
    plugins: [
      // Compress assets
      // compression({
      //   ext: 'br',
      //   algorithm: 'brotliCompress',
      //   threshold: 256,
      //   verbose: false,
      //   filter: file => {
      //     return /\.json/.exec(file) ? false : true
      //   }
      // })
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
      // cssCodeSplit: false,
      // minify: false,
      rollupOptions: {
        input: {
          app: path.resolve(__dirname, './src/index.html')
        },
        external: ['quill-convert'],
        output: {
          // Assign modules to chunk names
          manualChunks: id => 'app',
          // Custom output naming
          // chunkFileNames:  'asse/[name].js',
          // entryFileNames:  (chunkInfo) => {
          //   console.log(chunkInfo)
          //   return 'cats/[name]-[hash].js'
          // },
          // chunkFileNames: ({ name }) =>
          // name.endsWith('.br') ? 'assets/[name].[ext]' : '[name].js',
          // entryFileNames: (chunkInfo) => {
          //   console.log(chunkInfo)
          //   return 'assets/[name].[ext]'
          //   // return  name.endsWith('.br') ? 'assets/[name].[ext]' : '[name].js'
          // },
          // assetFileNames: 'assets/[name].[ext]'
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
