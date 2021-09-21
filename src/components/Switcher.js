let buttons = [
  {
    mode: 'edit',
    label: 'Tweak'
  },
  {
    mode: 'export',
    label: 'Export'
  }
]

export default () => {
  let styles = {
    root: 'flex-1 flex justify-center',
    baseBtn: 'w-32 h-8 rounded-lg !outline-none',
    switcher: 'bg-gray-200 rounded-lg flex gap-0'
  }

  let data = () => ({
    get activeBtn() {
      let color = this.$store.theme.color
      return tw`
        text-white
        bg-gradient-to-r 
        from-${color}-500 
        to-${color}-300 
        shadow-${color}
        transition-all
      `
    }
  })

  return html`
    <div x-data=${data} class=${styles.root}>
      <div class=${styles.switcher}>
        ${buttons.map(
          btn => html`
            <button
              class=${styles.baseBtn}
              @click=${`mode = '${btn.mode}'`}
              :class=${`mode == '${btn.mode}' && activeBtn`}
            >
              ${btn.label}
            </button>
          `
        )}
      </div>
    </div>
  `
}
