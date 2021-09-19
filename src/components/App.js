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

  console.log(Alpine.data('theme'))

  return html`
    <div class="bg-gray-500 h-screen w-screen relative text-gray-600">
      <!-- <${Background} /> -->
      <div class="relative flex flex-col h-full">
        <button class="bg-blue-300 h-8 w-8">Clr</button>
        <div class="justify-center flex flex-1 pt-20">
          <${Panel} />
        </div>
        <!-- Footer -->
        <div class="my-8 text-center">
          <span class="text-gray-200">created by </span>
          <span class="text-blue-400">@braden_preston</span>
          <${Icon} ...${{ color: 'green', icon: Color }} />
        </div>
      </div>
    </div>
  `
}

export default App
