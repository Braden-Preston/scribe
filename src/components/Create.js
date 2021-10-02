import Icon from './Icon'
import DropIn from './DropIn'
import IconButton from './IconButton'
import Arrow from '../icons/Arrow'
import Menu from '../icons/Menu'
import Warn from '../icons/Warn'

let styles = {
  buttonText: `flex flex-col justify-center px-2 text-center font-medium group-hover:scale-95 hidden sm:block`,
  actionBtn: `group cursor-pointer pr-1 inline-flex items-center hover:bg-gray-200 rounded-lg transition-colors absolute`,
  menu: `fixed block top-1/2 left-1/2 -translate-1/2 w-full max-w-sm`
}

Alpine.data('Create', function () {
  return {
    open: this.$persist(false)
  }
})

export default () =>
  html`
    <div x-data="Create">
      <!-- Button -->
      <div class=${styles.actionBtn} @click="open = !open">
        <${IconButton} ...${{ icon: Menu }} />
        <span class=${styles.buttonText}>New</span>
        <${Icon} ...${{ size: 'sm', icon: Arrow }} />
      </div>

      <!-- Dropdown -->
      <div class=${styles.menu}>
        <${DropIn} ...${{ open: 'open' }}>
          <div class="flex flex-col space-y-4 m-5 bg-gray-50 shadow-2xl rounded-lg overflow-hidden" >
            <div class="bg-gradient-to-tr from-blue-500 to-blue-300 space-x-4 text-white flex items-center py-3 px-4" >
              <${Icon} ...${{ classes: 'text-white h-8 w-8 mt-1', icon: Warn }} />
              <div class="text-2xl">Are you sure?</div>
            </div>
            <div class="px-4">Creating a new page will clear the editor</div>
            <div class="flex justify-right space-x-4 px-4 pb-4">
              <button
                @click="open = false"
                class="bg-gray-200 px-4 py-1 rounded-lg !outline-none"
              > Hold on
              </button>
              <button
                @click="console.log('clear'); open = false"
                class="bg-gradient-to-tr from-blue-500 to-blue-300 shadow-blue bg-blue-400 text-white px-4 py-1 rounded-lg !outline-none"
              > Continue
              </button>
            </div>
          </div>
        <//>
      </div>
    </div>
  `
