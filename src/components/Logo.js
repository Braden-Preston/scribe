import { config } from '../global/twind'

Alpine.data('logo', () => ({
  render() {
    // Get the current store color
    let color = this.$store.theme.color
    let colors = config.theme.extend.colors

    // Render a colored SVG bird
    return html`
      <svg
        version="1.1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient id="blueGray_700_500">
            <stop stop-color="${colors.gray[700]}" offset="0" />
            <stop stop-color="${colors.gray[500]}" offset="1" />
          </linearGradient>
          <linearGradient id="blueGray_50_200">
            <stop stop-color="${colors.gray[50]}" offset="0" />
            <stop stop-color="${colors.gray[200]}" offset="1" />
          </linearGradient>
          <linearGradient id="sky_300_500">
            <stop stop-color="${colors[color][300]}" offset="0" />
            <stop stop-color="${colors[color][500]}" offset="1" />
          </linearGradient>
          <radialGradient
            id="radialGradient77650"
            cx="12.83"
            cy="25"
            r="8.686"
            fx="8.438"
            fy="17.67"
            gradientTransform="matrix(.6677 .0006185 -.0005687 .6136 1.664 5.903)"
            gradientUnits="userSpaceOnUse"
            xlink:href="#blueGray_50_200"
          />
          <radialGradient
            id="radialGradient78846"
            cx="20.78"
            cy="6.06"
            r="4.405"
            gradientTransform="matrix(.7416 .0114 -.0115 .7481 3.619 1.558)"
            gradientUnits="userSpaceOnUse"
            xlink:href="#blueGray_50_200"
          />
          <linearGradient
            id="linearGradient87397"
            x1="3.42"
            x2="16.39"
            y1="13.91"
            y2="10.34"
            gradientUnits="userSpaceOnUse"
            xlink:href="#blueGray_700_500"
          />
          <linearGradient
            id="linearGradient87549"
            x1="9.697"
            x2="14.59"
            y1="8.004"
            y2="12.76"
            gradientUnits="userSpaceOnUse"
            xlink:href="#blueGray_700_500"
          />
          <linearGradient
            id="linearGradient87848"
            x1="3.636"
            x2="17.4"
            y1="16.9"
            y2="13.92"
            gradientUnits="userSpaceOnUse"
            xlink:href="#blueGray_700_500"
          />
          <linearGradient
            id="linearGradient90905"
            x1="18.14"
            x2="6.972"
            y1="5.815"
            y2="11.95"
            gradientUnits="userSpaceOnUse"
            xlink:href="#blueGray_700_500"
          />
          <linearGradient
            id="linearGradient94807"
            x1="12.99"
            x2="20.24"
            y1="7.345"
            y2="4.745"
            gradientUnits="userSpaceOnUse"
            xlink:href="#blueGray_700_500"
          />
          <linearGradient
            id="linearGradient97149"
            x1="17.79"
            x2="18.72"
            y1="8.798"
            y2="17.85"
            gradientUnits="userSpaceOnUse"
            xlink:href="#sky_300_500"
          />
          <linearGradient
            id="linearGradient100141"
            x1="18.32"
            x2="17.89"
            y1="18.07"
            y2="10.76"
            gradientTransform="matrix(.7039 1.027 -1.027 .7039 16.6 -10.38)"
            gradientUnits="userSpaceOnUse"
            xlink:href="#sky_300_500"
          />
          <linearGradient
            id="linearGradient100153"
            x1="4.792"
            x2="22.39"
            y1="8.122"
            y2="15.37"
            gradientTransform="matrix(.4628 .6751 -.6751 .4628 19.46 -2.237)"
            gradientUnits="userSpaceOnUse"
            xlink:href="#sky_300_500"
          />
          <linearGradient
            id="linearGradient106716"
            x1="16.94"
            x2="21.17"
            y1="7.711"
            y2="7.612"
            gradientUnits="userSpaceOnUse"
            xlink:href="#sky_300_500"
          />
          <radialGradient
            id="radialGradient121575"
            cx="11.98"
            cy="12.06"
            r="11.98"
            gradientTransform="matrix(1 0 0 .77 0 2.773)"
            gradientUnits="userSpaceOnUse"
            xlink:href="#blueGray_700_500"
          />
        </defs>
        <g id="bird">
          <path
            id="base"
            d="m23.96 5.795c-1.847-3.839-6.88-3.893-8.645-0.4641-1.325 2.575-3.682 2.159-5.321 5.075-1.88 4.468-6.78 4.058-9.991 6.303 2.997 0.2016 4.924 0.1834 5.666 0.6261 0 0 6.365 6.57 12.24 2.754 5.246-3.408 4.04-8.851 3.727-10.88 0 0-0.5504-1.945 0.3289-2.79 0.6551-0.6297 1.996-0.6233 1.996-0.6233z"
            fill="url(#radialGradient121575)"
          />
          <path
            id="head"
            d="m23.99 5.812c-1.847-3.839-6.853-4.025-8.676-0.4806-0.2697 2.357 3.904 0.4354 6.289 1.825 0.2901-1.433 2.387-1.344 2.387-1.344z"
            fill="url(#linearGradient94807)"
          />
          <path
            id="neck"
            d="m21.6 7.156s-1.16-1.041-2.754-1.351c-1.131-0.2201-2.097 0.08024-3.239 0.8127-1.158 0.7425-2.624 0.7271-2.624 0.7271l3.127 1.401s0.2923-2.233 1.941-2.21c1.649 0.02339 3.742 3.426 3.742 3.426-0.1441-0.9029-0.3978-2.063-0.1929-2.806z"
            fill="url(#radialGradient78846)"
          />
          <path
            id="tuft"
            d="m17.38 20.43s-2.575 1.71-6.286 0.4261c-3.651-1.263-3.601-2.43-5.939-3.218-2.322-0.7832-5.148-0.9293-5.148-0.9293 2.681-1.318 6.276 0.5979 7.73-0.3627z"
            fill="url(#radialGradient77650)"
          />
        </g>
        <g id="coat">
          <path
            id="chest"
            d="m22.01 12.19c0.04849 2.183-0.5166 4.892-2.737 6.878-1.713 1.532-3.034 2.17-5.225 1.61-3.428-0.8768-6.312-4.334-6.312-4.334s4.339 2.039 7.463 0.05196c2.162-1.375 2.091-4.531 1.814-5.759-0.4285-1.699-1.477-1.951-0.8214-3.279 0.6365-0.924 2.116-1.227 3.315-0.5641 1.53 0.7435 2.17 2.46 2.17 2.46 0.2359 1.168 0.2759 1.631 0.3338 2.935z"
            fill="url(#linearGradient97149)"
          />
          <path
            d="m16.98 13.97c-2.808 4.67-5.727 4.199-5.727 4.199 2.191 1.639 5.512 2.79 9.091-0.4206z"
            fill="url(#linearGradient100141)"
          />
          <path
            d="m16.98 13.97c-0.2195 3.549-3.159 4.468-3.159 4.468 3.076 1.169 6.137-0.5072 7.913-3.608z"
            fill="url(#linearGradient100153)"
          />
          <path
            id="beard"
            d="m22.01 12.19c-1.758-3.197-6.733-2.363-5.929-4.734 0.5577-1.206 2.226-1.324 3.425-0.6612 1.53 0.7435 2.17 2.46 2.17 2.46 0.2359 1.168 0.2759 1.631 0.3338 2.935z"
            fill="url(#linearGradient106716)"
          />
        </g>
        <g id="wing">
          <path
            d="m1.535 13.14s3.158 2.196 7.152 3.558c2.709 0.9239 5.632 0.8883 7.191-0.8692 1.668-1.881 1.646-5.102 0.5115-6.31-0.532-0.5665-2.081-1.069-3.094-1.167-3.24-0.3119-4.406 4.864-11.76 4.787z"
            fill="url(#linearGradient87848)"
          />
          <path
            d="m1.532 13.14s4.239 2.193 6.713 2.844c2.794 0.7357 5.872 0.8816 7.67-1.064 1.635-1.769 1.727-4.903-0.1897-6.65-0.5744-0.5234-1.417-0.8112-2.43-0.9087-3.24-0.3119-4.409 5.856-11.76 5.779z"
            fill="url(#linearGradient87549)"
          />
          <path
            d="m1.532 13.14s4.935 1.789 6.646 2.15c1.791 0.3776 5.021 0.7286 6.91-0.8692 1.651-1.397 2.625-4.587 0.6371-6.15-0.6108-0.4804-1.417-0.8112-2.43-0.9087-3.24-0.3119-4.409 5.856-11.76 5.779z"
            fill="url(#linearGradient87397)"
          />
          <path
            d="m1.532 13.14s4.342 1.252 6.079 1.461c1.907 0.2288 4.621 0.2063 6.433-0.5839 2.076-0.905 3.29-4.025 2.024-5.449-0.8042-0.9051-1.76-1.109-2.773-1.206-3.24-0.3119-4.409 5.856-11.76 5.779z"
            fill="url(#linearGradient90905)"
          />
        </g>
      </svg>
    `
  }
}))

export default () =>
  html` <div x-data="logo" class="h-12 w-12" x-html="render()"></div> `
