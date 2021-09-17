import htm from 'htm'
import h from 'vhtml'

const html = htm.bind(h)

const Header = ({ name }) => html`<h1>${name} List</h1>`

const Footer = props => html`<footer ...${props} />`


const App = () => {
  const todos = ['cat', 'dog', 'steve']

  return html`
    <div>
      <h1>Hello Vite!</h1>
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

document.querySelector('#app').innerHTML = html`<${App} />`
