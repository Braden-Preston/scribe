let buttons = [
  {
    mode: 'editor',
    label: 'Tweak'
  },
  {
    mode: 'export',
    label: 'Export'
  }
]

let styles = {
  root: 'flex-1 flex justify-center',
  baseBtn: 'w-32 h-8 rounded-lg !outline-none',
  switcher: 'bg-gray-200 rounded-lg flex gap-0'
}

Alpine.data('switcher', () => ({
  get activeClass() {
    let color = this.$store.theme.color
    return tw`
      text-white
      bg-gradient-to-tr 
      from-${color}-500 
      to-${color}-300 
      shadow-${color}
      transition-all
    `
  }
}))

export default () => {
  return html`
    <div x-data="switcher" class=${styles.root}>
      <div class=${styles.switcher}>
        ${buttons.map(
          btn => html`
            <button
              class=${styles.baseBtn}
              @click=${`mode = '${btn.mode}'`}
              :class=${`mode == '${btn.mode}' && activeClass`}
            >
              ${btn.label}
            </button>
          `
        )}
      </div>
    </div>
  `
}
