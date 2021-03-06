// import global styles
import './index.css'

// Import vendors and globals
import './global/htm'
import './global/twind'
import './global/alpine'

// Import the root component
import App from './components/App'

// Mount the application's markup
mount(App, document.querySelector('#app'))

// Start the app
Alpine.start()
