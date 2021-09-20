import Icon from './Icon'
import Slider from './Slider'
import Menu from '../icons/Menu'
import Help from '../icons/Help'
import IconButton from './IconButton'

export default () => {
  let styles = {
    root: 'flex pt-3 px-3',
    left: 'flex-1 flex justify-start',
    center: 'flex-1 flex justify-center',
    right: 'flex-1 flex justify-end',
    buttonText: 'flex flex-col justify-center px-2 text-center font-medium'
  }

  return html`
    <div class=${styles.root}>
      <!-- Action Menu -->
      <div class=${styles.left}>
        <div class="cursor-pointer inline-flex">
          <${IconButton} ...${{ icon: Menu }} />
          <span class=${styles.buttonText}>Actions</span>
        </div>
      </div>

      <!-- Mode Switcher -->
      <div class=${styles.center}>
        <${Slider} />
      </div>

      <div class=${styles.right}>
        <div class="cursor-pointer inline-flex">
          <!-- <div class=${styles.buttonText}>Help</div> -->
          <${IconButton} ...${{ icon: Help }} />
        </div>
      </div>
    </div>
  `
}
