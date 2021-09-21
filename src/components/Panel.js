import PanelBar from './PanelBar'

const Panel = props => {
  let styles = {
    root: `bg-gray-100 rounded-2xl rounded-b-none flex flex-col flex-1 w-full max-w-5xl overflow-hidden gap-3`
  }

  let data = () => ({
    mode: 'edit',
    toggle(mode) { 
      this.mode = mode
    }
  })

  return html`
    <!-- Container -->
    <div x-data=${data} x-props=${{ test: true }} class=${styles.root}>
      <!-- Header -->
      <${PanelBar} />

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
        <p x-text="$store.theme.dark" />
        <div class="flex gap-4 justify-center">
          <button @click="$store.theme.switch('blue')">Blue</button>
          <button @click="$store.theme.switch('green')">Green</button>
          <button @click="$store.theme.switch('orange')">Orange</button>
          <button @click="$store.theme.switch('red')">Red</button>
          <button @click="$store.theme.switch('purple')">Purple</button>
        </div>
        <p x-text="$store.theme.color" />
      </div>

      <!-- Editor -->
      <div class="flex flex-1 justify-end">
        <div class="h-1/3 w-2 rounded-full bg-gray-300 mr-3" />
      </div>
    </div>
  `
}
export default Panel
