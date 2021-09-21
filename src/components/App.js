import Background from './Background'
import Panel from './Panel'
import Icon from './Icon'
import Color from '../icons/Color'

const styles = css({
  '&::before': { content: '"🙁 "' },
  '&::after': { content: '" 😊"' }
})

const App = () => {
  const todos = ['cat', 'dog', 'steve']

  let active = true

  return html`
    <div
      class="bg-gray-500 h-screen w-screen relative text-gray-500 select-none"
    >
      <!-- <${Background} /> -->
      <div class="relative flex flex-col h-full gap-2">
        <div class="h-20">Header</div>
        <div class="justify-center flex flex-1">
          <${Panel} />
        </div>
        <!-- Footer -->
        <div class="mb-6 text-center">
          <span class="text-gray-200">Designed by </span>
          <span class="text-blue-400">@braden_preston</span>
        </div>
      </div>
    </div>
  `
}

export default App
