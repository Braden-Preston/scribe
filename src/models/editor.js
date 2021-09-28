export default {
  loading: true,

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
  }
}