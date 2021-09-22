import Icon from './Icon'
import Copy from '../icons/Copy'

const sampleText = `<html>
  <h1>This is a title!</h1>
  <p>This is a long paragraph where <strong>formatted text</strong> can go.</p>
</html>
`

export default () => {
  return html`
    <div class="flex-1 flex-col flex mb-4">
      <div class="font-medium text-center my-1">HTML Output</div>
      <div
        class="bg-gray-600 mx-4 mb-4 p-4 shadow-inner flex-1 rounded-lg text-green-400"
      >
        <code>${sampleText}</code>
      </div>
      <div class="justify-center flex">
        <button
          class="flex items-center gap-2 h-8 py-1 px-4 rounded-lg text-center text-white bg-gradient-to-r from-blue-500 to-blue-300 shadow-blue cursor-pointer !outline-none"
        >
          Copy Text
          <${Icon} ...${{ size: 'sm', color: 'white', icon: Copy }} />
        </button>
      </div>
    </div>
  `
}
