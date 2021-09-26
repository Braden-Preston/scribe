# TPOT Scribe

<div style="text-align: center;">
  <p>A Progressive Web App that easily converts DOCX files to HTML while preserving styles</p>
  <p>Designed for <a href="#" target="_blank">ThePathofTruth</a> 🌲</p>
</div>

## Features

- Create from clipboard or upload from disk.
- User selected theme color & dark mode.
- Lastest document persisted between loads.
- Full offline support. No internet required.

## Tech Stack

The app strives to use the best and most modern practices (PnP, tree-shaking, code-splitting, etc)

Each package is an ESM module and were selected to be as lightweight as possible. The result is an app that [builds fast](#build) with a small footprint.

| Package                                                 |           Description           | Size (br) |
| :------------------------------------------------------ | :-----------------------------: | --------: |
| [htm](https://github.com/developit/htm)                 |  JSX like component templates   |    0.6 Kb |
| [alpine](https://alpinejs.dev/)                         | A simple reactive UI framework  |   12.5 Kb |
| [twind](https://twind.dev/)                             | Tailwind styles using CSS-in-JS |   13.5 Kb |
| [quill](https://quilljs.com/)                           |   A powerful WYSIWYG editor   |   36.8 Kb |
| [highlight](https://www.npmjs.com/package/highlight.js) |    Color coding HTML syntax     |    7.3 Kb |
| [vhtml](https://github.com/developit/vhtml)             |  Creates html render functions  |    0.7 Kb |

Bundling the app is optional though. Every package could be loaded over a CDN. Features like JSX templating and CSS-in-JS are possible in the browser without any build step.

## Getting Started
