import Icon from './Icon'

export default props => {
  let { color = 'gray', icon = null } = props

  let styles = {
    root: 'group rounded-lg p-1.5 flex items-center justify-center hover:(bg-gray-200 text-gray-700) !outline-none transition-colors'
  }

  return html`
    <button class=${styles.root}>
      <${Icon} ...${{ color, icon, size: 'sm', shrink: true }} />
    </button>
  `
}
