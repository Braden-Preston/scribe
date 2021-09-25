import Background from './Background'
import Panel from './Panel'
import Icon from './Icon'
import Logo from './Logo'
import Color from '../icons/Color'


const App = () => {
  return html`
    <div
      class="bg-gray-700 h-screen w-screen relative text-gray-500 select-none"
    >
      <!-- <${Background} /> -->
      <div class="relative flex flex-col h-full justify-between">
        <div class="flex justify-center">
          <div class=" flex-1 items-center flex max-w-5xl h-16 inset-3 px-3">
            <div class=" text-gray-100 text-2xl items-center font-bold flex gap-3">
              <!-- <${Icon} ...${{ size: 'lg', icon: Color }} /> -->
              <!-- <img class="h-10 w-10" src=${Logo} /> -->
              <${Logo} />
              TPOT Scribe
            </div>
            <div class="flex-1 flex items-end justify-end pr-0.5">
              <${Icon} ...${{ size: 'md', classes: 'text-blue-400', icon: Color }} />
            </div>
          </div>
        </div>

        <div class="justify-center flex flex-1 mt-1 max-h-[750px]">
          <${Panel} />
        </div>
        <!-- Footer -->
        <div class="mb-6 mt-3 text-center">
          <span class="text-gray-200">Designed by </span>
          <span class="text-blue-400">@braden_preston</span>
        </div>
      </div>
    </div>
  `
}

export default App
