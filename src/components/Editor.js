import Quill from '../global/quill'

Alpine.data('editor', function () {
  // import Quill from '../global/quill'

  return {
    async init() {
      console.log('before')

      // let rest = ms => {
      //   return new Promise(res => {
      //     setTimeout(() => res('cat'), ms)
      //   })
      // }
      // let Quill = await import('../global/quill')

      console.log('after', Quill)

      // let quill = new Quill(this.$refs.editor, {
      //   theme: 'snow',
      //   modules: {
      //     toolbar: true
      //   }
      // })

      // console.log('quill', quill)
    }
  }
})

export default props => {
  return html`
    <div ...${props} x-data="editor" class="flex-1 flex flex-col mb-2">
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

      <!-- Editor -->
      <!-- <div class="flex flex-1 flex-col w-full border-4 border-red-400 flex-1 bg-blue-200 absolute px-4"> -->
      <div class="">
        <div class="" x-ref="editor">
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br /></p>
        </div>
      </div>
      <!-- </div> -->

      <!-- <div class="flex flex-1 justify-end bg-green-200">
        test
      </div> -->
    </div>
  `
}
