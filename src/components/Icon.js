import Code from '../icons/Code'

const sizes = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-8 w-8'
}

export default props => {
  let { shrink = false, color = 'gray', size = 'md', icon = Code } = props

  const styles = {
    root: `
      ${sizes[size]}
      ${`text-${color}-400`}
      ${shrink && 'group-hover:scale-90'}
    `
  }

  return html`
    <div class=${styles.root}>
      <${icon} />
    </div>
  `
}
