export default props => {
  let { children = null, open = false } = props

  return html`
    <div
      x-show=${open}
      @click.away=${`${open} = false`}
      x-transition:enter="transition ease-out duration-200"
      x-transition:enter-start="opacity-0 transform scale-90 -translate-y-10"
      x-transition:enter-end="opacity-100 transform scale-100"
      x-transition:leave="transition ease-in duration-100"
      x-transition:leave-start="opacity-100 transform scale-100"
      x-transition:leave-end="opacity-0 transform scale-90"
    >
      ${children}
    </div>
  `
}
