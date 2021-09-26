import Icon from './Icon'
import Help from './icons/Help'

import { config } from '../global/twind'
let colors = config.theme.extend.colors

let color = 'blue'

let globalStyles = css`
  :global {
    // Containers
    .ql-toolbar {
      @apply text-left sm:text-center justify-center;
    }
    .ql-formats {
      @apply bg-gray-50 shadow-sm rounded-lg h-8 space-x-1 md:space-x-2 px-0.5 md:px-2 pt-[5px];
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
  root: `!border-0 space-y-1`
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
    <div x-ref="toolbar" class=${tw('ql-toolbar', styles.root, globalStyles)}>
      <!-- Headings -->
      <span class="ql-formats">
        <select class="ql-header">
          <option value="1" />
          <option value="2" />
          <option selected />
        </select>
      </span>

      <!-- Bold, Italic, Underline -->
      <span class="ql-formats">
        <button class="ql-bold"><${Help} /></button>
        <button class="ql-italic" />
        <button class="ql-underline" />
      </span>

      <!-- Blockquote, Color, Highlight & Link -->
      <span class="ql-formats">
        <button class="ql-blockquote" />
        <select class="ql-color">
          <option selected="selected" />
          ${_colors.map(c => html` <option value=${c} /> `)}
        </select>
        <select class="ql-background">
          <option selected="selected" />
          ${_hlites.map(c => html` <option value=${c} /> `)}
        </select>
        <button class="ql-link" />
      </span>

      <!-- Break, Align, Ordered, Bullet & Clear -->
      <span class="ql-formats">
        <button class="ql-break"><${Help} /></button>
        <button class="ql-align" value="center" />
        <button class="ql-list" value="ordered" />
        <button class="ql-list" value="bullet" />
        <button class="ql-clean" />
      </span>
    </div>
  `
}
