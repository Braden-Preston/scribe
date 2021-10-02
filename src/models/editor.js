import Delta from 'quill-delta'
import sampleDelta from '../assets/sampleDelta'

/* -------------------------------------------- */
/*              Alpine Editor Store             */
/* -------------------------------------------- */

let editor = null

export default {
  code: '',
  loading: true,

  async create() {
    // Set some sample data
    // document.querySelector('#editor').innerHTML = sampleDelta

    editor = await createEditor()
    this.loading = false

    // Load previous session
    this.hydrate()

    // Start autosaving changes
    autosave(5 /* mins */, this.persist)

    // Save on page exit / reload
    window.onunload = this.persist
  },

  async persist() {
    let data = JSON.stringify(editor.getContents())
    localStorage.setItem('_x_quill', data)
  },

  async hydrate() {
    let delta = localStorage.getItem('_x_quill')
    delta && editor.setContents(JSON.parse(delta).ops)
  },

  async convert() {
    this.code = await deltaToHtml()
  },

  async clear() {
    editor.setContents([])
    editor.focus()
  },

  copy() {
    return navigator.clipboard.writeText(this.code)
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

/* --------- Editor Creation Function --------- */

async function createEditor() {
  // Lazy import
  let lazy = await import('../global/quill')
  let { default: Quill } = lazy

  // Create a new editor
  let editor = new Quill('#editor', {
    theme: 'snow',
    placeholder: '\tTo get started, begin typing here...',
    formats: validFormats,
    bounds: '#editor',
    modules: {
      toolbar: '#toolbar',
      keyboard: {
        bindings: bindings
      },
      clipboard: {
        matchers: matchers
      }
    }
  })

  // Add Aria labels for accesibility
  document
    .querySelector('#editor')
    .querySelectorAll('button, .ql-picker-label')
    .forEach(el => el.setAttribute('aria-label', el.className.slice(3)))

  editor.focus()

  return editor
}

/* ------------ Conversion Function ----------- */

async function deltaToHtml() {
  let lazy = await import('../global/quill')
  let editorDelta = editor.getContents().ops

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

  return converter
    .convert()
    .replaceAll(/<br\/>+<br\/>/g, '</p><p>')
    .replaceAll(/<\/(p|h1|h2|brblockquote)>/g, '</$1>\n')
    .replaceAll(/<br\/>/g, '<br/>\n')
    .replaceAll(/<\/p>/g, `</p>\n`)
}

/* -------------- Autosave Timer -------------- */

function autosave(minutes, save) {
  let change = new Delta()

  editor.on('text-change', function (delta) {
    change = change.compose(delta)
  })

  setInterval(() => {
    if (change.length() > 0) {
      change = new Delta()
      save()
    }
  }, 60000 * minutes)
}
