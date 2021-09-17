import htm from 'htm'
import h from 'vhtml'

const html = htm.bind(h)

export const mount = (App, el) => {
  el.innerHTML = html`<${App} />`
}

window.html = html
window.mount = mount
