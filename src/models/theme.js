export default {
  dark: false,
  color: 'blue',
  init() {
    console.log('theme initialized!')
  },
  toggle() {
    this.dark = !this.dark
  },
  setColor(color) {
    this.color = color
  }
}
