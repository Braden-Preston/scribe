import sampleDelta from '../assets/sampleDelta'
import Delta from 'quill-delta'

/* -------------------------------------------- */
/*              Alpine Editor Store             */
/* -------------------------------------------- */

export default {
  loading: true,
  code: null,

  mountEditor() {
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
          toolbar: this.toolbar,
          keyboard: {
            bindings: bindings
          },
          clipboard: {
            matchers: matchers
          }
        }
      })

      this.quill.focus()

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

/* -------------------------------------------- */
/*              Quill Customization             */
/* -------------------------------------------- */

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

/* ------------ Keyboard Shortcuts ------------ */

const bindings = {
  left: {
    key: 'L',
    shortKey: true,
    handler: function () {
      this.quill.format('align', '')
    }
  },
  center: {
    key: 'E',
    shortKey: true,
    handler: function (range) {
      let alignment = this.quill.getFormat(range).align
      this.quill.format('align', alignment == 'center' ? '' : 'center')
    }
  }
}

/* ---------- Clipboard Match Filters --------- */

export function headingMatcher(node, delta) {
  let tag = node.tagName
  return tag.startsWith('H')
    ? // H1|H2|H5|H6 become H3|H4
      delta.compose(
        new Delta().retain(delta.length(), {
          header: ['H4', 'H5', 'H6'].includes(tag) ? '2' : '1'
          // bold: false,
        })
      )
    : delta
}

export function quoteMatcher(node, delta) {
  let classes = node.getAttribute('class')
  return classes && classes.includes('uote')
    ? // Set tag as blockquote
      delta.compose(
        new Delta().retain(delta.length(), {
          blockquote: true
        })
      )
    : delta
}

const matchers = [
  [Node.ELEMENT_NODE, headingMatcher],
  [Node.ELEMENT_NODE, quoteMatcher]
]
