// Import vendors and globals
import './global/htm'
import './global/twind'
import './global/alpine'

// Import the root component
import App from './components/App'

import hljs from 'highlight.js'
// import 'highlight.js/styles/base16/apprentice.css'
// import 'highlight.js/styles/base16/ashes.css'
// import 'highlight.js/styles/base16/atlas.css'
// import 'highlight.js/styles/base16/brush-trees-dark.css'
// import 'highlight.js/styles/base16/dracula.css'
// import 'highlight.js/styles/base16/eva-dim.css'
import 'highlight.js/styles/base16/framer.css' // GOOD
// import 'highlight.js/styles/base16/horizon-dark.css'
// import 'highlight.js/styles/github-dark.css'
// import 'highlight.js/styles/gradient-dark.css' // GOOD
// import 'highlight.js/styles/night-owl.css' // GOOD

// Mount the application's markup
mount(App, document.querySelector('#app'))

// Start the app
Alpine.start()

hljs.highlightAll()