import Icon from './Icon'

let styles = {
  root: 'group rounded-lg p-1.5 flex items-center justify-center hover:(bg-gray-200 text-gray-700) !outline-none transition-colors'
}

export default props => {
  let { color = 'gray', icon = null } = props

  return html`
    <button class=${styles.root} aria-label="btn">
      <${Icon} ...${{ color, icon, size: 'sm', shrink: true }} />
    </button>
  `
}
