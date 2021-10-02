import EditorToolbar from './EditorToolbar'
import EditorContent from './EditorContent'

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
    <div ...${props} id="wrapper" class="flex overflow-hidden" x-data="editor">
      <!-- Animated Panel-->
      <div
        id="wrapper"
        x-show="!loading"
        class="flex flex-col overflow-hidden"
        x-transition:enter="transition ease-out duration-200 origin-bottom"
        x-transition:enter-start="opacity-0 transform translate-y-5 scale-95"
        x-transition:enter-end="opacity-100 transform translate-y-0 scale-100"
        x-transition:leave="transition ease-in duration-200 origin-bottom"
        x-transition:leave-start="opacity-100 transform translate-y-0 scale-100"
        x-transition:leave-end="opacity-0 transform translate-y-5 scale-95"
      >
        <!-- Toolbar Container -->
        <div class="relative">
          <${EditorToolbar} />
          <div class="bg-gray-100 h-1" />
          <div
            class="bg-gradient-to-b from-gray-100 w-[calc(100%-14px)] absolute h-5 z-10"
          ></div>
        </div>
        <!-- Content Container -->
        <div class="relative flex-1 flex flex-col overflow-hidden mx-2">
          <${EditorContent} />
          <div
            class="bg-gradient-to-t from-gray-100 w-[calc(100%-6px)] absolute bottom-5 h-5"
          ></div>
          <div class="bg-gray-100 h-6" />
        </div>
      </div>
    </div>
  `
}
