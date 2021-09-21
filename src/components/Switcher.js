export default () => {
  let styles = {
    root: 'flex-1 flex justify-center',
    switcher: 'bg-gray-200 rounded-lg flex gap-0 shadow-inner'
  }

  let data = () => ({
    get active() {
      let color = this.$store.theme.color

      return tw`
        py-1
        text-white
        rounded-lg w-32 
        bg-gradient-to-r 
        from-${color}-500 
        to-${color}-300 
        shadow-${color} 
        hover:ring-${color}-300 
        hover:ringE-4 
        !transition-all 
        !outline-none
      `
    }
  })

  return html`
    <div x-data=${data} class=${styles.root}>
      <div class=${styles.switcher}>
        <button @click="toggle('edit')" :class="active" x-text="mode">
          Tweak
        </button>
        <button @click="toggle('export')" class="rounded-lg w-32 !outline-none">
          Export
        </button>
      </div>
    </div>
  `
}
