const Header = ({ name }) => html`<h1>${name} List</h1>`

const Footer = props => html`<footer ...${props} />`

const styles = css({
  '&::before': { content: '"🙁 "' },
  '&::after': { content: '" 😊"' }
})

const App = () => {
  const todos = ['cat', 'dog', 'steve']

  let active = true

  return html`
    <div class="bg-gray-100 h-screen w-screen relative">
      <div
        class="from-blue-500 to-blue-700 bg-gradient-to-t w-full h-[400px] absolute"
      />
      <div class="relative flex flex-col h-full">
        <div>button</div>
        <div class="justify-center pt-40 flex flex-1">
          <div
            class="bg-white rounded-2xl flex-1 mb-20 w-full max-w-5xl shadow-md"
          >
            test
          </div>
        </div>
      </div>
    </div>
  `
}

export default App
