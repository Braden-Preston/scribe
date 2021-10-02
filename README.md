<div align="center">
  <h1>TPOT Scribe</h1>
  <p>A Progressive Web App that easily converts DOCX files to HTML while preserving styles</p>
  <p><a href="https://tpot-scribe.vercel.app" target="_blank">See the app <u>live</u></a></p>
  <img src="/src/assets/preview.png" />
    <p>Designed for <a href="https://www.thepathoftruth.com" target="_blank">ThePathofTruth</a> 🌲</p>
</div>

## ✨ Features

- 🌱 Create from clipboard or start from scratch.
- 🌗 User can select theme color & dark mode.
- 💦 Last document is kept between page loads.
- 🧱 Full offline support. No internet required.

## 📦 Tech Stack

This app uses the best, modern practices available (PnP, tree-shaking, code-splitting, etc.)

Every package is an ESM module, selected to be as lightweight as possible. The result is an app that [builds fast](#build) with a small footprint, under 55Kb (first-paint, Brotli compression)

| Package                                                 |           Description           | Size (br) |
| :------------------------------------------------------ | :-----------------------------: | --------: |
| [htm](https://github.com/developit/htm)                 |  JSX like component templates   |    0.6 Kb |
| [alpine](https://alpinejs.dev/)                         | A simple reactive UI framework  |   12.5 Kb |
| [twind](https://twind.dev/)                             | Tailwind styles using CSS-in-JS |   13.5 Kb |
| [quill](https://quilljs.com/)                           |    A powerful WYSIWYG editor    |   36.8 Kb |
| [highlight](https://www.npmjs.com/package/highlight.js) |    Color coding HTML syntax     |    7.3 Kb |
| [vhtml](https://github.com/developit/vhtml)             |  Creates html render functions  |    0.7 Kb |

[Vite](https://vitejs.dev/) brings a super-fast development experience powered by [esbuild](https://esbuild.github.io/) under the hood. The production bundle is handled by [Rollup](https://rollupjs.org/guide/en/) through Vite.

Every package could be loaded over a CDN. Features like JSX templating and CSS-in-JS are possible in the browser without any build step.

## 🛰️ Development

This project is designed to use [Yarn 2](https://yarnpkg.com/getting-started/migration) and Node 12+. Everything should already be configured so that you can clone the repo and run `yarn` to install the PnP packages.

### ⚡ Extensions

Please use [Visual Studio Code](https://code.visualstudio.com/) with the following extensions for the best experience. They are recommended automatically if you open the repo's workspace in VSCode.

- [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)
- [Tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Alpine](https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.alpine-js-intellisense)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)

### 💻 Commands

**`yarn dev`** - Start a super-fast development server

**`yarn build`** - Bundle and optimize for production

**`yarn start`** - Serve the final build for live use

**`yarn preview`** - Build and launch the app locally

**`yarn analyze`** - Build and visualize app bundles

**`yarn clean`** - Clean cache & remove build output

### 📚 Style Guide

Alpine is the perfect UI framework - but out of the box, it does not have a concept of components like React or Vue. So to create "components", we use a render function that returns an html string. From there, Alpine binds the markup to its reactive data.

The render function `html`, is a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) which allows you to use JSX-like syntax to define a component. The concept comes from [lit-html](https://lit-html.polymer-project.org/guide) and others. Make sure you have the [lit-html extension](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) installed first. It will provide syntax highlighting and formatting for `html`.

The `html` render function is provided by Preact's `htm` and `vhtml`, which provides the JSX syntax without a build step. See the [full documentation](https://github.com/developit/htm) to see everything that is possible.

`tw`, `css` & `apply` are provided by [twind](https://twind.dev/), and fulfill all styling needs in the app. Twind provides unlimited [tailwind](https://tailwindcss.com/) styles on demand in the browser.

#### Component Example

```javascript
import { html } from 'globals/twind'
import { tw } from 'globals/twind'

let styles = {
  root: tw('bg-red-500')
}

Alpine.data('counter', () => ({
  count: 0,
  get message() {
    return `Count: ${this.count}`
  }
}))

export default () => html`
  <div x-data="counter" class=${styles.root}>
    <button @click="count++" x-text="inc" />
    <button @click="count--" x-text="dec" />
    <p x-text="message" />
  </div>
`
```

## 🚀 Deployment

All deploys are handled automatically with [Vercel](https://vercel.com/)
