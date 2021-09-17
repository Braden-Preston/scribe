const Header = ({ name }) => html`<h1>${name} List</h1>`

const Footer = props => html`<footer ...${props} />`

const App = () => {
  const todos = ['cat', 'dog', 'steve']

  let active = true

  const styles = css({
    '&::before': { content: '"🙁 "' },
    '&::after': { content: '" 😊"' }
  })

  return html`
    <div
      x-cloak
      x-data="{ count: 0, init() { this.count = 5 } }"
      class="bg-gray-100 text-center border-2 m-48 mt-16 p-8 rounded-lg border-gray-600"
    >
      <h1
        class=${tw`text(lg uppercase gray-800) ${styles} ${
          active && 'bg-blue-400'
        }`}
      >
        Hello Vite!
      </h1>
      <button @click="count--">Dec</button>
      <button @click="count++">Inc</button>
      <div x-text="count" />
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Documentation
      </a>
      <${Header} name="My Todo" />
      <ul>
        ${todos.map(todo => html` <li key=${todo}>${todo}</li> `)}
      </ul>
      <button onClick=${() => this.addTodo()}>Add Todo</button>
      <${Footer}>footer content here<//>
    </div>
  `
}

export default App
