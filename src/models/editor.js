import { createEditor, autosave, deltaToHtml } from '../global/quill'
// import sampleDelta from '../assets/sampleDelta'

/* -------------------------------------------- */
/*              Alpine Editor Store             */
/* -------------------------------------------- */

let editor = null

export default {
  code: null,
  loading: true,

  async create() {
    // document.querySelector('#editor').innerHTML = sampleDelta

    editor = await createEditor()

    // Load previous session
    this.hydrate()

    // Start autosaving changes after delay
    setTimeout(() => autosave(editor, 5 /* mins */, this.persist), 1000)

    // Save on page exit / reload
    window.onunload = this.persist

    return editor
  },

  async persist() {
    let data = JSON.stringify(editor.getContents())
    localStorage.setItem('_x_quill', data)
  },

  async hydrate() {
    let delta = localStorage.getItem('_x_quill')
    delta &&
      setTimeout(() => {
        editor.setContents(JSON.parse(delta).ops)
        this.loading = false
      }, 0)
  },

  async convert() {
    this.code = await deltaToHtml(editor.getContents().ops)
  },

  async clear() {
    editor.setContents([])
    editor.focus()
  },

  copy() {
    !this.code && this.convert()
    return navigator.clipboard.writeText(this.code)
  }
}
