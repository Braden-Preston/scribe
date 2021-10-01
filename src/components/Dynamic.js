import { colors } from '../global/twind'

Alpine.data('scroll', () => ({
  get classes() {
    let color = this.$store.theme.color

    return tw(
      css`
        :global {
          ::-webkit-scrollbar {
            height: 6px;
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            border-radius: 6px;
          }
          ::-webkit-scrollbar-thumb {
            background: ${colors[color][400]}; 
            border-radius: 6px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: ${colors[color][500]}; 
            border-radius: 6px;
          }
          ::-webkit-scrollbar-corner  {
            background: transparent !important;
          }
          ::selection {
            color: none;
            background: ${`${colors.blue[500]}33`};
          }
          ::-moz-selection {
            // color: white !important;
            background: ${`${colors.blue[500]}33`};
          }
        }
      `
    )
  }

}))

export default () => {

  return html`
    <span x-data="scroll" :class="classes" />
  `
}