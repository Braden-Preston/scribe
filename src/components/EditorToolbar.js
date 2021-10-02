import Help from '../icons/Help'

import { config } from '../global/twind'
let colors = config.theme.extend.colors

let color = 'blue'

let globalStyles = css`
  :global {
    .ql-editor {
      padding: 16px 32px !important;
    }
    // Containers
    .ql-toolbar {
      @apply !bg-red-500 text-left sm:text-center justify-center;
    }
    .ql-formats {
      @apply bg-gray-50 shadow-sm rounded-lg space-x-2 space-y-1 px-2 py-1;
      margin: 0px !important;
    }
    .ql-picker-options {
      top: 32px !important;
      border: 0px !important;
      border-radius: 8px !important;
      background: ${colors.gray[50]} !important;
    }
    .ql-color .ql-picker-options,
    .ql-background .ql-picker-options {
      width: 128px !important;
      left: 50%;
      transform: translateX(-50%);
      padding: 8px 4px !important;
    }
    .ql-color .ql-picker-item,
    .ql-background .ql-picker-item {
      border-radius: 20px;
      height: 20px !important;
      width: 20px !important;
      border: 0px !important;
    }
    // Text & Labels
    .ql-active.ql-picker-label {
      color: ${colors.blue[500]} !important;
    }
    .ql-picker-label:hover {
      color: ${colors.blue[500]} !important;
    }
    .ql-active.ql-picker-label {
      border: 0px !important;
      color: ${colors.blue[500]} !important;
    }
    .ql-picker-label {
      border: 0px !important;
      color: ${colors.gray[500]} !important;
    }
    // Swatches

    // Buttons
    .ql-picker-item:hover {
      color: ${colors.gray[500]} !important;
    }
    .ql-picker-item {
      color: ${colors.gray[500]} !important;
    }
    .ql-active .ql-fill {
      fill: ${colors.blue[500]} !important;
    }
    .ql-fill {
      fill: ${colors.blue[500]} !important;
    }
    .ql-active .ql-stroke {
      stroke: ${colors[color][500]} !important;
    }
    .ql-stroke {
      stroke: ${colors.gray[500]} !important;
    }
  }
`

let styles = {
  root: `!border-0 !p-0 !mx-4 space-y flex justify-center`
}

// prettier-ignore
let _colors = [
  '#660000', '#990066', '#FFC000',
  '#0000FF', '#336600', '#E00000',
  '#ED7D31', '#0080FF', '#6033F1'
]

let _hlites = ['#FFF4A3', '#FFA3D5', '#A3D4FF', '#BDFFA3']

export default () => {
  return html`
    <div id="toolbar" class=${tw(styles.root, globalStyles)}>
      <!-- Headings -->
      <span class="ql-formats">
        <select class="ql-header">
          <option value="1" />
          <option value="2" />
          <option selected />
        </select>

        <!-- Bold, Italic, Underline -->
        <button class="ql-bold"><${Help} /></button>
        <button class="ql-italic" />
        <button class="ql-underline" />

        <!-- Blockquote, Color, Highlight & Link -->
        <button class="ql-blockquote" />
        <button class="ql-link" />
        <select class="ql-color">
          <option selected="selected" />
          ${_colors.map(c => html` <option value=${c} /> `)}
        </select>
        <select class="ql-background">
          <option selected="selected" />
          ${_hlites.map(c => html` <option value=${c} /> `)}
        </select>

        <!-- Break, Align, Ordered, Bullet & Clear -->
        <button class="ql-align" value="center" />
        <button class="ql-list" value="ordered" />
        <button class="ql-list" value="bullet" />
        <button class="ql-break"><${Help} /></button>
        <button class="ql-clean" />
      </span>
    </div>
  `
}
