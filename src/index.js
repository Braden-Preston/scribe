// Import vendors and globals
import './global/twind'
import './global/htm'
import './global/alpine'

// Import the root component
import App from './components/App'

// Mount the application's markup
mount(App, document.querySelector('#app'))

// Start the app
Alpine.start()
