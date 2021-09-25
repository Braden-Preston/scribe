import { config } from '../global/twind'

let colors = {
  light: config.theme.extend.colors.gray[100].slice(1),
  dark: config.theme.extend.colors.gray[700].slice(1)
}

Alpine.data('ribbon', () => ({
  classes(variant) {
    let color = colors[variant]

    return tw`
      ${apply`block bg-repeat-x bg-bottom h-[20px]`}
      ${css`
        background-size: 24px 100%;
        background-image: url("
          data:image/svg+xml;charset=UTF-8,
          %3csvg width='20px' height='80px' viewBox='0 0 20 16.6' version='1.1'
          xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'
          %3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'
          %3e%3cpath d='M20,1 C15,1 15,11 10,11 C5,11 5,1 -1.77635684e-15,1 C-1.77635684e-15,
          1 -1.77635684e-15,0.666666667 -1.77635684e-15,0 L20,0 C20,0.666666667 20,1 20,1 Z' 
          id='Line-Copy' fill='%23${color}'%3e%3c/path%3e%3c/g%3e%3c/svg%3e");
      `}
    `
  }
}))

export default props => {
  let { dark = false } = props

  return html`
    <div
      x-data=${`ribbon`}
      :class=${`{
        [classes('light')]: ${dark} == false,
        [classes('dark')]: ${dark} == true
      }`}
    />
  `
}
