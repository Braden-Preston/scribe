import 'twind/shim'
import { setup } from 'twind'
import { tw, css, apply } from 'twind/css'
import { blueGray, lightBlue, green, orange, rose, violet } from 'twind/colors'

// Configure Styles
setup({
  theme: {
    colors: {
      gray: blueGray,
      blue: lightBlue,
      purple: violet,
      orange: orange,
      green: green,
      red: rose
    }
  }
})

window.tw = tw
window.css = css
window.apply = apply
