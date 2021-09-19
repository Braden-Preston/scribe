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
    },
    boxShadow: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      red: '0 4px 6px -1px rgba(251, 113, 133, 0.20), 0 1px 6px -1px rgba(251, 113, 133, 0.50)',
      blue: '0 4px 6px -1px rgba(56, 189, 248, 0.20), 0 1px 6px -1px rgba(56, 189, 248, 0.50)',
      green: '0 4px 6px -1px rgba(74, 222, 128, 0.20), 0 1px 6px -1px rgba(74, 222, 128, 0.50)',
      orange: '0 4px 6px -1px rgba(251, 146, 60, 0.20), 0 1px 6px -1px rgba(251, 146, 60, 0.50)',
      purple: '0 4px 6px -1px rgba(167, 139, 250, 0.20), 0 1px 6px -1px rgba(167, 139, 250, 0.50)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    }
  }
}

setup(config)

window.tw = tw
window.css = css
window.apply = apply
