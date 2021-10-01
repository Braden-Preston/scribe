import Switcher from './Switcher'
import Create from './Create'
import IconButton from './IconButton'
import Help from '../icons/Help'

let styles = {
  root: `flex pt-3 px-3 z-50`,
  left: `flex-1 flex justify-start relative`,
  right: `flex-1 flex justify-end`,
  center: `flex-1 flex justify-center`
}

export default () => html`
  <div class=${styles.root}>
    <!-- Action Menu -->
    <div class=${styles.left}>
      <${Create} />
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
