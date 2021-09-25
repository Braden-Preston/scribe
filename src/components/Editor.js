export default props => {
  return html`
    <div ...${props} class="flex-1 mb-2">
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
      <div class="flex flex-1 justify-end">
        <div class="h-1/3 w-2 rounded-full bg-gray-300 mr-3" />
      </div>
    </div>
  `
}
