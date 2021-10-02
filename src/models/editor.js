import sampleDelta from '../assets/sampleDelta'

/* -------------------------------------------- */
/*              Alpine Editor Store             */
/* -------------------------------------------- */

let editor = null
let Quill = null
let Delta = null
let Converter = null

export default {
  code: null,
  loading: true,

  async create() {
    // Set some sample data (development)
    document.querySelector('#editor').innerHTML = sampleDelta

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
    !this.code && this.convert()
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
  'divider'
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

function headingMatcher(node, delta) {
  let tag = node.tagName
  return tag.startsWith('H')
    ? // H1|H2|H5|H6 become H3|H4
      delta.compose(
        new Delta().retain(delta.length(), {
          header: ['H4', 'H5', 'H6'].includes(tag) ? '4' : '3',
          bold: false
        })
      )
    : delta
}

function quoteMatcher(node, delta) {
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

/* ---------- Custom Toolbar Types --------- */

function getDividerBlot() {
  let BlockEmbed = Quill.import('blots/block/embed')

  class DividerBlot extends BlockEmbed {}
  DividerBlot.className = 'ql-divider'
  DividerBlot.blotName = 'divider'
  DividerBlot.tagName = 'hr'

  return DividerBlot
}

function handleDivider() {
  let { index } = this.quill.getSelection(true)
  let line = this.quill.getLines(index, 1)[0]
  let preLine = this.quill.getIndex(line)
  let isEmptyLine = line.length() == 1
  let isLineStart = index == preLine
  isEmptyLine && this.quill.deleteText(index, 1)
  this.quill.insertEmbed(index + 0, 'divider', true, 'user')
  this.quill.setSelection(isLineStart ? index + 1 : index + 2, 'api')
}

/* --------- Editor Creation Function --------- */

async function createEditor() {
  // Lazy import
  let modules = await import('../global/quill')
  Quill = modules.default
  Converter = modules.QuillConverter
  Delta = Quill.import('delta')

  // Create a new editor
  let editor = new Quill('#editor', {
    theme: 'snow',
    placeholder: '\tTo get started, begin typing here...',
    formats: validFormats,
    bounds: '#editor',
    modules: {
      keyboard: {
        bindings: bindings
      },
      clipboard: {
        matchers: matchers
      },
      toolbar: {
        container: '#toolbar',
        handlers: { divider: handleDivider }
      }
    }
  })

  // Register custom formats
  Quill.register(getDividerBlot())

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
  let editorDelta = editor.getContents().ops
  let converter = new Converter(editorDelta, {
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
    customTag(format, { attributes }) {
      return format == 'header' ? (attributes.header == 3 ? 'h3' : 'h4') : null
    }
  })

  converter.renderCustomWith(
    customOp => customOp.insert.type === 'divider' && `</p><hr/>\n\n<p>`
  )

  return (
    converter
      .convert()
      .replaceAll(/<br\/><br\/>/g, '</p><p>')
      .replaceAll(/<\/(p|h3|h4|blockquote)>/g, '</$1>\n\n')
      .replaceAll(/<br\/><\/p>/g, '</p>')
      .replaceAll(/<br\/>/g, '<br/>\n')
      .replaceAll(/\n<p><\/p>\n/g, '')
  )
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
