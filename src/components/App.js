import Background from './Background'
import Panel from './Panel'
import Icon from './Icon'
import Logo from './Logo'
import Color from './icons/Color'

const App = () => html`
  <div class="bg-gray-700 h-screen w-screen relative text-gray-600">
    <!-- <${Background} /> -->
    <div class="relative flex flex-col h-full justify-between">
      <!-- Header -->
      <div class="flex justify-center">
        <div class=" flex-1 items-center flex max-w-5xl h-16 inset-3 px-3">
          <!-- App Banner -->
          <div
            class=" text-gray-100 text-2xl items-center font-bold flex gap-3"
          >
            <${Logo} />
            TPOT Scribe
          </div>

          <!-- Theme -->
          <div class="flex-1 flex items-end justify-end pr-0.5">
            <${Icon}
              ...${{ size: 'md', classes: 'text-blue-400', icon: Color }}
            />
          </div>
        </div>
      </div>

      <!-- Floating Panel -->
      <div
        class="justify-center flex flex-1 mt-1 max-h-[750px] overflow-hidden"
      >
        <${Panel} />
      </div>

      <!-- Footer -->
      <div class="mb-6 mt-3 text-center">
        <span class="text-gray-200">Designed for </span>
        <a href="https://www.thepathoftruth.com/" target="_blank" class="text-blue-400">ThePathofTruth 🌲</span>
      </div>
    </div>
  </div>
`

export default App
