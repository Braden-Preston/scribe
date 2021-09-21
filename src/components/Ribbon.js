let variants = {
  light: '',
  dark: ''
}
export default props => {
  let { variant = 'light' } = props

  let styles = {
    root: `block bg-repeat-x bg-bottom min-w-20 h-[20px]`,
    light: css`
      background-size: 24px 100%;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20px' height='80px' viewBox='0 0 20 16.6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cpath d='M20,1 C15,1 15,11 10,11 C5,11 5,1 -1.77635684e-15,1 C-1.77635684e-15,1 -1.77635684e-15,0.666666667 -1.77635684e-15,0 L20,0 C20,0.666666667 20,1 20,1 Z' id='Line-Copy' fill='%23F1F5F9'%3e%3c/path%3e%3c/g%3e%3c/svg%3e");
    `,
    dark: css`
      background-size: 24px 100%;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20px' height='80px' viewBox='0 0 20 16.6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cpath d='M20,1 C15,1 15,11 10,11 C5,11 5,1 -1.77635684e-15,1 C-1.77635684e-15,1 -1.77635684e-15,0.666666667 -1.77635684e-15,0 L20,0 C20,0.666666667 20,1 20,1 Z' id='Line-Copy' fill='%23334155'%3e%3c/path%3e%3c/g%3e%3c/svg%3e");
    `
  }

  return html` <div class=${tw(styles.root, styles[variant])} /> `
}
