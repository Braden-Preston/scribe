import 'twind/shim'
import { setup } from 'twind'
import { tw, css, apply } from 'twind/css'
import { blueGray, lightBlue, green, orange, rose, violet, white, black } from 'twind/colors'

// Configure Styles
const config = {
  theme: {
    extend: {
      colors: {
        gray: blueGray,
        blue: lightBlue, // lapiz
        purple: violet, // amethyst
        orange: orange, // amber
        green: green, // emerald
        red: rose // ruby
      },
      boxShadow: {
        red: '0 4px 6px -1px rgba(251, 113, 133, 0.20), 0 1px 6px -1px rgba(251, 113, 133, 0.50)',
        blue: '0 4px 6px -1px rgba(56, 189, 248, 0.20), 0 1px 6px -1px rgba(56, 189, 248, 0.50)',
        green: '0 4px 6px -1px rgba(74, 222, 128, 0.20), 0 1px 6px -1px rgba(74, 222, 128, 0.50)',
        orange: '0 4px 6px -1px rgba(251, 146, 60, 0.20), 0 1px 6px -1px rgba(251, 146, 60, 0.50)',
        purple: '0 4px 6px -1px rgba(167, 139, 250, 0.20), 0 1px 6px -1px rgba(167, 139, 250, 0.50)',
      },
    }
  }
}

setup(config)

window.tw = tw
window.css = css
window.apply = apply
