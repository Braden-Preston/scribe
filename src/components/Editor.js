import EditorToolbar from './EditorToolbar'

Alpine.data('editor', function () {
  return {
    loading: true,
    init() {
      setTimeout(async () => {
        let { default: Quill } = await import('../global/quill')
        this.quill = new Quill(this.$refs.editor, {
          theme: 'snow',
          modules: {
            toolbar: this.$refs.toolbar
          }
        })

        this.loading = false

        this.addAriaLabels()
      }, 0)
    },
    addAriaLabels() {
      this.$refs.toolbar
        .querySelectorAll('button, .ql-picker-label')
        .forEach(el => el.setAttribute('aria-label', el.className.slice(3)))
    },
    classes() {
      return tw`bg-red-500`
    }
  }
})

export default props => {
  return html`
    <div ...${props} x-data="editor" class="flex flex-1 flex-col mb-2">
      <!-- Container -->
      <div id="wrapper" x-show="!loading" class="flex-1 overflow-hidden">
        <!-- Toolbar -->
        <${EditorToolbar} />

        <!-- Edit Area -->
        <div id="editor" class="classes" x-ref="editor">
          <h1>Hello World 1</h1>
          <h2>Hello World 2</h2>
          <br />
          <p>Some initial <strong>bold</strong> text</p>
          <br />
        </div>
      </div>
      <div x-show="loading" class="flex-1 flex justify-center items-center">
        Loading...
      </div>

      <!-- Buttons -->
      <!-- <div x-init class="flex flex-col text-center">
        <button @click="$store.theme.toggle()">Toggle Dark Mode</button>
        <div class="flex gap-4 justify-center">
          <button @click="$store.theme.setColor('blue')">Blue</button>
          <button @click="$store.theme.setColor('green')">Green</button>
          <button @click="$store.theme.setColor('teal')">Teal</button>
          <button @click="$store.theme.setColor('orange')">Orange</button>
          <button @click="$store.theme.setColor('pink')">Pink</button>
          <button @click="$store.theme.setColor('red')">Red</button>
          <button @click="$store.theme.setColor('purple')">Purple</button>
        </div>
        <p x-text="$store.theme.dark" />
      </div> -->
    </div>
  `
}
