import Switcher from './Switcher'
import ActionMenu from './ActionMenu'
import IconButton from './IconButton'
import Help from '../icons/Help'

export default () => {
  let styles = {
    root: `flex pt-3 px-3`,
    left: `flex-1 flex justify-start relative`,
    right: `flex-1 flex justify-end`,
    center: `flex-1 flex justify-center`
  }

  return html`
    <div class=${styles.root}>
      <!-- Action Menu -->
      <div class=${styles.left}>
        <${ActionMenu} />
      </div>

      <!-- Mode Switcher -->
      <div class=${styles.center}>
        <${Switcher} />
      </div>

      <!-- Help Button -->
      <div class=${styles.right}>
        <${IconButton} ...${{ icon: Help }} />
      </div>
    </div>
  `
}