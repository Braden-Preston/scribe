import Icon from './Icon'
import Copy from '../icons/Copy'

// Setup the syntax highlighter'
import hljs from 'highlight.js/lib/core'
import lang from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/base16/framer.css'
hljs.registerLanguage('html', lang)

let styles = {
  root: `flex flex-1 flex-col mb-4 overflow-hidden`,
  preview: `bg-gray-700 mx-3 mb-4 p-4 flex-1 rounded-lg overflow-auto`,
  button: `flex items-center gap-2 h-8 py-1 px-4 rounded-lg text-center text-white bg-gradient-to-tr from-blue-500 to-blue-300 shadow-blue cursor-pointer !outline-none`
}

Alpine.data('exporter', () => ({
  code: '',
  html: '',

  init() {
    this.$watch('$store.editor.code', val => {
      this.code = val
    })
  },

  html() {
    return hljs.highlight(this.code, { language: 'html' }).value
  },

  async copyText() {
    this.code = await this.$store.editor.convertToHTML()
    await navigator.clipboard.writeText(this.code)
  }
}))

export default props => html`
  <div ...${props} x-data="exporter" class=${styles.root}>
    <div class="font-medium text-center my-1">HTML Output</div>

    <!-- Code Preview -->
    <pre class=${styles.preview}>
      <code class="language-html whitespace-pre-line text-[#c3c3c3]" style='background: transparent;' x-html="html" />
    </pre>

    <!-- Copy Button -->
    <div class="justify-center flex">
      <button @click="copyText" class=${styles.button}>
        Copy Text
        <${Icon} ...${{ size: 'sm', classes: 'text-white', icon: Copy }} />
      </button>
    </div>
  </div>
`
