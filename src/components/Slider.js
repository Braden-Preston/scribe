export default () => {
  let styles = {
    root: `

    `
  }

  let data = () => ({
    get active() {
      let color = this.$store.theme.color

      return tw`
        text-white
        rounded-lg w-32 
        bg-gradient-to-r 
        from-${color}-500 
        to-${color}-300 
        shadow-${color} 
        hover:ring-${color}-300 
        hover:ring-4 
        transition-all 
        !outline-none
      `
    }
  })

  return html`
    <div x-data=${data} class="flex-1 flex justify-center">
      <div class="bg-gray-200 rounded-lg flex gap-0 shadow-inner">
        <button :class="active">Tweak</button>
        <button class="rounded-lg w-32 !outline-none">Export</button>
      </div>
    </div>
  `
}
