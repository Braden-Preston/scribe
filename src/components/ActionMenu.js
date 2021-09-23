import Icon from './Icon'
import DropIn from './DropIn'
import IconButton from './IconButton'
import Arrow from '../icons/Arrow'
import Menu from '../icons/Menu'

export default () => {
  let styles = {
    buttonText: `flex flex-col justify-center px-2 text-center font-medium group-hover:scale-95`,
    actionBtn: `group cursor-pointer pr-1 inline-flex items-center hover:bg-gray-200 rounded-lg transition-colors absolute z-50`,
    menu: `z-20 top-11 absolute w-72 shadow-md rounded-lg backdrop-filter backdrop-blur-sm bg-white`
  }

  return html`
    <div x-data="{ open: $persist(false) }">
      <!-- Button -->
      <div class=${styles.actionBtn} @click="open = !open">
        <${IconButton} ...${{ icon: Menu }} />
        <span class=${styles.buttonText}>Actions</span>
        <${Icon} ...${{ size: 'sm', icon: Arrow }} />
      </div>

      <!-- Dropdown -->
      <${DropIn} ...${{ open: 'open' }}>
        <div class=${styles.menu}>
          <div class="text-center border-2 border-gray-300 rounded-lg m-2 py-8">
            New
          </div>
          <div class="text-center border-2 border-gray-300 rounded-lg m-2 py-8">
            Recent
          </div>
          <div class="text-center py-3 mb-3">Clear</div>
        </div>
      <//>
    </div>
  `
}
