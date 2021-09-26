import EditorToolbar from './EditorToolbar'
import Quill from '../global/quill'

Alpine.data('editor', function () {
  return {
    async init() {
      let quill = new Quill(this.$refs.editor, {
        theme: 'snow',
        modules: {
          toolbar: this.$refs.toolbar
          // toolbar: [
          //   [{ header: [1, 2, false] }],
          //   ['bold', 'italic', 'underline', 'link'],
          //   [
          //     {
          //       color: [
          //         false,
          //         '#660000',
          //         '#990066',
          //         '#FFC000',
          //         '#0000FF',
          //         '#336600',
          //         '#E00000',
          //         '#ED7D31',
          //         '#0080FF',
          //         '#6033F1'
          //       ]
          //     },
          //     {
          //       background: [false, '#FFF4A3', '#FFA3D5', '#A3D4FF', '#BDFFA3']
          //     },
          //     'blockquote'
          //   ],
          //   [{ align: 'center' }, { list: 'ordered' }, { list: 'bullet' }],
          //   ['clean']
          // ]
        }
      })
    },
    classes() {
      return tw`bg-red-500`
    }
  }
})

const Ico = () => html`
  <svg viewBox="0 0 18 18">
    <polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon>
    <polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon>
  </svg>
`

export default props => {
  return html`
    <div ...${props} x-data="editor" class="flex flex-1 flex-col mb-2">
      <!-- Container -->
      <div id="wrapper" class="flex-1 overflow-hidden">
        <!-- Toolbar -->
        <${EditorToolbar} />

        <!-- Edit Area -->
        <div id="editor" class="classes" x-ref="editor">
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br /></p>
          <!-- <div>Editor, Clipboard & Tooltip</div> -->
        </div>
      </div>

      <!-- Toolbar -->
      <div class="flex px-14 gap-3">
        <div class="bg-gray-50 h-8 rounded-lg w-1/6" />
        <div class="bg-gray-50 h-8 rounded-lg w-1/4" />
        <div class="bg-gray-50 h-8 rounded-lg w-1/3" />
        <div class="bg-gray-50 h-8 rounded-lg w-1/12" />
      </div>

      <!-- Buttons -->
      <div x-init class="flex flex-col text-center">
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
      </div>
    </div>
  `
}
