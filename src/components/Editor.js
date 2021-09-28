import EditorToolbar from './EditorToolbar'

Alpine.data('editor', () => ({
  loading: true,
  init() {
    this.$store.editor.mountEditor(this)
    this.$watch('$store.editor.loading', val => (this.loading = val))
  },
  classes() {
    return tw`bg-red-500`
  }
}))

export default props => {
  return html`
    <div ...${props} x-data="editor" class="flex flex-1 flex-col mb-2">
      <!-- Container -->
      <div
        id="wrapper"
        x-show="!loading"
        x-transition:enter="transition ease-out duration-200 origin-bottom"
        x-transition:enter-start="opacity-0 transform translate-y-5 scale-95"
        x-transition:enter-end="opacity-100 transform translate-y-0 scale-100"
        x-transition:leave="transition ease-in duration-200 origin-bottom"
        x-transition:leave-start="opacity-100 transform translate-y-0 scale-100"
        x-transition:leave-end="opacity-0 transform translate-y-5 scale-95"
        class="flex-1 overflow-hidden"
      >
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
