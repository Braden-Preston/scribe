import 'twind/shim'
import { setup } from 'twind'
import { tw, css, apply } from 'twind/css'
import { blueGray, lightBlue, green, orange, rose, violet, white, black } from 'twind/colors'

// Configure Styles

const config = {
  theme: {
    colors: {
      black: black,
      white: white,
      gray: blueGray,
      blue: lightBlue,
      purple: violet,
      orange: orange,
      green: green,
      red: rose
    }
  }
}

setup(config)

window.tw = tw
window.css = css
window.apply = apply
