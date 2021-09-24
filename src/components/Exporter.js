import Icon from './Icon'
import Copy from '../icons/Copy'

export default () => {
  let data = () => ({
    init() {
      const sampleText = `<html>\n\t<h1>This is a title!</h1>\n\t<p>This is a long paragraph where <strong>formatted text</strong> can go.</p>\n</html>\n\n<!-- Footer -->\n<div class="relative flex flex-col h-full justify-between">\n\t<div class="flex justify-center">\n\t\t<div class=" flex-1 items-center flex max-w-5xl h-16 inset-3 px-3">\n\t\t\t<div class=" text-gray-200 text-2xl items-center font-bold flex gap-3">\n\t\t\t<icon />\n\t\t\t<img class="h-10 w-10" src="logo" />\n\t\t\tTPOT Scribe\n\t\t</div>\n\t\t<div class="flex-1 flex items-end justify-end pr-0.5">\n\t\t\t<icon />\n\t\t</div>\n\t</div>\n</div>\n\n<div class="justify-center flex flex-1 mt-1 max-h-[750px]">\n\t<panel />\n</div>\n\n<div class="mb-6 mt-3 text-center">\n\t<span class="text-gray-200">Designed by </span>\n\t<span class="text-blue-400">@braden_preston</span>\n</div>`
      this.code = sampleText
    }
  })

  return html`
    <div x-data=${data} class="flex-1 flex-col flex mb-4">
      <div class="font-medium text-center my-1">HTML Output</div>
      <pre
        class="bg-gray-700 mx-3 shadow-inner rounded-lg overflow-hidden relative"
      >
        <code class="language-html" style="background: transparent !important;" x-text="code" />
      </pre>
      <div class="justify-center flex">
        <button
          class="flex items-center gap-2 h-8 py-1 px-4 rounded-lg text-center text-white bg-gradient-to-r from-blue-500 to-blue-300 shadow-blue cursor-pointer !outline-none"
        >
          Copy Text
          <${Icon} ...${{ size: 'sm', classes: 'text-white', icon: Copy }} />
        </button>
      </div>
    </div>
  `
}
