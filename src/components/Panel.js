import Icon from './Icon'
import Slider from './Slider'
import Menu from '../icons/Menu'
import Trash from '../icons/Trash'

const Panel = props => {
  const styles = {
    root: `bg-gray-100 rounded-2xl rounded-b-none flex flex-col flex-1 w-full max-w-5xl overflow-hidden gap-3`
  }

  return html`
    <!-- Container -->
    <div class=${styles.root}>
      <!-- Header -->
      <div class="flex pt-3 px-3">
        <!-- Menu -->
        <div
          class="group rounded-lg h-8 w-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
        >
          <${Icon} ...${{ size: 'sm', icon: Menu, shrink: true }} />
        </div>
        <div
          class="flex flex-col justify-center h-8 w-20 text-center font-medium"
        >
          Actions
        </div>
        <${Slider} />
        <!-- Clear -->
        <div
          class="group rounded-lg h-8 w-8 flex items-center justify-center hover:(bg-red-100 text-red-700) transition-all cursor-pointer"
        >
          <${Icon} ...${{ size: 'sm', icon: Trash, shrink: true }} />
        </div>
      </div>
      <!-- Toolbar -->
      <div class="flex px-14 gap-3">
        <div class="bg-white h-8 rounded-lg w-1/6" />
        <div class="bg-white h-8 rounded-lg w-1/4" />
        <div class="bg-white h-8 rounded-lg w-1/3" />
        <div class="bg-white h-8 rounded-lg w-1/12" />
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
