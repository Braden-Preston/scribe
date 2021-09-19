import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

// Import stores / models
// import theme from '../models/theme'

// Enable plugins
Alpine.plugin(persist)

// Create alpine data / stores
// Alpine.store('theme', theme())

Alpine.data('theme', function () {
  return {
    darkMode: this.$persist(false),
    init() {
      console.log('theme initialized!')
    },
    toggle() {
      this.darkMode = !this.darkMode
    }
  }
})

// Export the main instance
export default Alpine

window.Alpine = Alpine
