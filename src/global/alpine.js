import Alpine from 'alpinejs'
import fern from '@ryangjchandler/fern'
import persist from '@alpinejs/persist'

// Import stores / models
import theme from '../models/theme'
import editor from '../models/editor'

// Enable plugins
Alpine.plugin(fern)
Alpine.plugin(persist)

// Create alpine data / stores
Alpine.persistedStore('theme', theme)
Alpine.store('editor', editor)

// Export the main instance
export default Alpine

window.Alpine = Alpine
