export default {
  dark: false,
  color: 'blue',
  init() {
    console.log('theme initialized!')
  },
  toggle() {
    this.dark = !this.dark
  },
  switch(color) {
    this.color = color
  }
}
