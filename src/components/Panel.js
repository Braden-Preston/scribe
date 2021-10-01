import Ribbon from './Ribbon'
import PanelBar from './PanelBar'
import Exporter from './Exporter'
import Editor from './Editor'
import Menu from '../icons/Menu'

let styles = {
  root: `flex flex-col flex-1 max-w-5xl my-0 mx-2 md:mx-4 lg:mx-0 overflow-hidden`,
  container: `bg-gray-100 rounded-lg !rounded-b-none flex flex-col flex-1 gap-3 overflow-hidden`
}

Alpine.data('panel', function () {
  return {
    mode: this.$persist('editor'),
    setMode(mode) {
      this.mode = mode
    }
  }
})

export default () => html`
  <!-- Container -->
  <div x-data="panel" x-props=${{ test: true }} class=${styles.root}>
    <div class=${styles.container}>
      <!-- Header -->
      <${PanelBar} />

      <!-- Editor -->
      <${Editor} ...${{ 'x-show': "mode == 'editor'" }} />

      <!-- Exporter -->
      <${Exporter} ...${{ 'x-show': "mode == 'export'" }} />
    </div>

    <!-- Ribbon -->
    <${Ribbon} ...${{ dark: '$store.theme.dark' }} />
  </div>
`
