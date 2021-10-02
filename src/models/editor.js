import sampleDelta from '../assets/sampleDelta'

// Global Alpine store for editor
export default {
  loading: true,
  code: null,

  mountEditor(el) {
    setTimeout(async () => {
      // Get some element bindings
      this.editor = document.querySelector('#editor')
      this.toolbar = document.querySelector('#toolbar')
      // Lazily import modules
      let lazy = await import('../global/quill')
      let { default: Quill } = lazy

      // Set some sample data
      this.editor.innerHTML = sampleDelta

      // Create a new editor
      this.quill = new Quill(this.editor, {
        theme: 'snow',
        bounds: this.editor,
        formats: validFormats,
        modules: {
          toolbar: this.toolbar
        },
        clipboard: {
          matchers: []
        }
      })

      this.loading = false

      // For accessibility
      this.addAriaLabels(this.toolbar)
    }, 50)
  },

  addAriaLabels(el) {
    el.querySelectorAll('button, .ql-picker-label').forEach(el =>
      el.setAttribute('aria-label', el.className.slice(3))
    )
  },

  async convertToHTML() {
    let lazy = await import('../global/quill')
    let editorDelta = this.quill.getContents().ops

    let converter = new lazy.QuillConverter(editorDelta, {
      linkTarget: '',
      encodeHtml: false,
      multiLineParagraph: true,
      inlineStyles: {
        color(value, { attributes }) {
          if (!attributes.link) {
            return `color:${value};`
          }
        },
        background(value, { attributes }) {
          if (!attributes.link) {
            return `background:${value};`
          }
        }
      },
      customTagAttributes({ attributes }) {
        if (attributes.link) {
          let hostname = new URL(attributes.link).hostname
          if (hostname != 'www.thepathoftruth.com') {
            return { target: '_blank' }
          }
        }
      },
      customTag(format) {
        if (format == 'break') {
          return 'hr'
        }
      }
    })

    let code = converter
      .convert()
      .replaceAll(/<br\/>+<br\/>/g, '</p><p>')
      .replaceAll(/<\/(p|h1|h2|brblockquote)>/g, '</$1>\n')
      .replaceAll(/<br\/>/g, '<br/>\n')
      .replaceAll(/<\/p>/g, `</p>\n`)

    this.code = code
    return this.code
  }
}

// Temp until custom quill bundle
const validFormats = [
  'background',
  'bold',
  'color',
  'italic',
  'link',
  'underline',
  'blockquote',
  'header',
  'list',
  'align',
  'break'
]

const bindings = {}
