import 'twind/shim'
import { setup } from 'twind'
import { tw, css, apply } from 'twind/css'

// prettier-ignore
import { blueGray, lightBlue, green, orange, rose, violet, teal, pink } from 'twind/colors'

// Configure Styles
export const config = {
  mode: 'silent',
  theme: {
    extend: {
      colors: {
        gray: blueGray,
        blue: lightBlue, // lapiz
        purple: violet, // amethyst
        orange: orange, // amber
        green: green, // emerald
        teal: teal, // zircon
        pink: pink, // rose
        red: rose // ruby
      },
      boxShadow: {
        red: `0 4px 6px -1px rgba(251, 113, 133, 0.20), 0 1px 6px -1px rgba(251, 113, 133, 0.50)`,
        blue: `0 4px 6px -1px rgba(56, 189, 248, 0.20), 0 1px 6px -1px rgba(56, 189, 248, 0.50)`,
        green: `0 4px 6px -1px rgba(74, 222, 128, 0.20), 0 1px 6px -1px rgba(74, 222, 128, 0.50)`,
        orange: `0 4px 6px -1px rgba(251, 146, 60, 0.20), 0 1px 6px -1px rgba(251, 146, 60, 0.50)`,
        purple: `0 4px 6px -1px rgba(167, 139, 250, 0.20), 0 1px 6px -1px rgba(167, 139, 250, 0.50)`,
        pink: `0 4px 6px -1px rgba(244, 114, 182, 0.20), 0 1px 6px -1px rgba(244, 114, 182, 0.50)`,
        teal: `0 4px 6px -1px rgba(45, 212, 191, 0.20), 0 1px 6px -1px rgba(45, 212, 191, 0.50)`
      }
    }
  }
}

export const colors = config.theme.extend.colors
export const shadows = config.theme.extend.boxShadow

setup(config)

window.tw = tw
window.css = css
window.apply = apply
