import Ribbon from './Ribbon'
import PanelBar from './PanelBar'
import Exporter from './Exporter'
import Editor from './Editor'

const Panel = props => {
  let styles = {
    root: `flex flex-col flex-1 max-w-5xl my-0 mx-2 md:mx-4 lg:mx-0`,
    container: `bg-gray-100 rounded-lg !rounded-b-none flex flex-col flex-1 overflow-hidden gap-3`
  }

  let data = function () {
    return {
      mode: this.$persist('editor'),
      setMode(mode) {
        this.mode = mode
      }
    }
  }

  return html`
    <!-- Container -->
    <div x-data=${data} x-props=${{ test: true }} class=${styles.root}>
      <div class=${styles.container}>
        <!-- Header -->
        <${PanelBar} />

        <!-- Editor -->
        <div x-show="mode == 'editor'">
          <${Editor} />
        </div>

        <!-- Exporter -->
        <div x-show="mode == 'export'" class="flex-1 flex overflow-hidden">
          <${Exporter} />
        </div>
      </div>

      <!-- Ribbon -->
      <div x-show="$store.theme.dark == false">
        <${Ribbon} ...${{ variant: 'light' }} />
      </div>
      <div x-show="$store.theme.dark == true">
        <${Ribbon} ...${{ variant: 'dark' }} />
      </div>
    </div>
  `
}
export default Panel
