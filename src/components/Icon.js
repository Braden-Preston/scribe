import Code from '../icons/Code'

let sizes = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-8 w-8'
}

export default props => {
  let {
    shrink = false,
    color = 'gray',
    size = 'md',
    classes = '',
    icon = Code
  } = props

  let styles = {
    root: `
      ${sizes[size]}
      ${`text-${color}-500`}
      ${shrink && 'group-hover:scale-90'}
    `
  }

  return html`
    <div class=${tw(styles.root, classes)}>
      <${icon} />
    </div>
  `
}
