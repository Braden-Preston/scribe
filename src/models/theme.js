export default function () {
  return {
    darkMode: this.$persist(false),
    init() {
      console.log('theme initialized!')
    },
    toggle() {
      this.darkMode = !this.darkMode
    }
  }
}
