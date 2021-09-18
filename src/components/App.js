import Background from './Background'

const styles = css({
  '&::before': { content: '"🙁 "' },
  '&::after': { content: '" 😊"' }
})

const App = () => {
  const todos = ['cat', 'dog', 'steve']

  let active = true

  return html`
    <div class="bg-gray-500 h-screen w-screen relative text-gray-600">
      <!-- <${Background} /> -->
      <div class="relative flex flex-col h-full">
        <button class="bg-blue-300 h-8 w-8">Clr</button>
        <div class="justify-center flex flex-1 pt-20">
          <!-- Editor Card -->
          <div
            class="bg-gray-100 rounded-2xl flex flex-col flex-1 w-full max-w-5xl shadow-md overflow-hidden gap-3"
          >
            <!-- Header -->
            <div class="flex pt-3 px-3">
              <!-- Menu -->
              <div
                class="group rounded-lg h-8 w-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
              >
                <div class="h-5 w-5 group-hover:scale-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="flex flex-col justify-center h-8 w-20 text-center font-medium"
              >
                Actions
              </div>
              <!-- Slider -->
              <div class="flex-1 flex justify-center">
                <div class="bg-gray-200 rounded-lg p-0.5 flex gap-1">
                  <button class="py-1 rounded-lg w-32 bg-white ">Tweak</button>
                  <button class="py-1 rounded-lg w-32 ">Export</button>
                </div>
              </div>
              <!-- Clear -->
              <div
                class="group rounded-lg h-8 w-8 flex items-center justify-center hover:(bg-red-100 text-red-700) transition-colors cursor-pointer"
              >
                <div class="h-5 w-5 group-hover:scale-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <!-- Toolbar -->
            <div class="flex px-14 gap-3">
              <div class="bg-white h-10 rounded-lg w-1/6"></div>
              <div class="bg-white h-10 rounded-lg w-1/4"></div>
              <div class="bg-white h-10 rounded-lg w-1/3"></div>
              <div class="bg-white h-10 rounded-lg w-1/12"></div>
            </div>
            <!-- Editor -->
            <div class="flex flex-1 justify-end pr-3">
              <div class="w-2 h-1/3 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
        <!-- Footer -->
        <div class="my-8 text-center">
          <span class="text-gray-200">created by </span>
          <span class="text-blue-400">@braden_preston</span>
        </div>
      </div>
    </div>
  `
}

export default App
