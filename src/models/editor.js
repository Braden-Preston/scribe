export default {
  loading: true,
  code: null,

  mountEditor(el) {
    setTimeout(async () => {
      // Get element bindings
      this.$refs = el.$refs
      this.editor = this.$refs.editor
      this.toolbar = this.$refs.toolbar

      // Lazily import modules
      let { default: Quill, sampleDelta } = await import('../global/quill')

      // Set some sample data
      this.$refs.editor.innerHTML = sampleDelta

      // Create a new editor
      this.quill = new Quill(this.editor, {
        theme: 'snow',
        modules: {
          toolbar: this.toolbar
        }
      })

      this.loading = false

      // For accessibility
      this.addAriaLabels()
    }, 50)
  },

  addAriaLabels() {
    this.$refs.toolbar
      .querySelectorAll('button, .ql-picker-label')
      .forEach(el => el.setAttribute('aria-label', el.className.slice(3)))
  },

  async convertToHTML() {
    let { QuillConverter } = await import('../global/quill')
    let editorDelta = this.quill.getContents().ops

    let converter = new QuillConverter(editorDelta, {
      inlineStyles: true,
      multiLineParagraph: true
    })
    let code = converter.convert()
      .replaceAll(/<br\/>+<br\/>/g, '</p><p>')
      .replaceAll(/<\/(p|h1|h2|brblockquote)>/g, '</$1>\n')
      .replaceAll(/<br\/>/g, '<br/>\n')
      .replaceAll(/<\/p>/g, `</p>\n`)
      // .replaceAll(/<p>/g, `<p>\n`)

    this.code = code

    // let fn = (i) => {
    //   console.log(i)
    // }

    // let htx = htm.bind(fn)
    // let parsed = htx`${code}`
    console.log(code)

    // console.log(parsed)

    // console.log(pretty(code))

    // this.code = pretty(code)

    // console.log(pretty(this.code))

    // console.log('HTML', this.code)
  }
}