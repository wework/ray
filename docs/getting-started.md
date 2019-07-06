---
title: Getting Started
label: Guide
---

Just want to get your feet wet? Check out the [codepen demo](https://codepen.io/adamraider/pen/bZoBqL).

## Install

Install via yarn

```bash
$ yarn add @wework/ray-core
```

Install via npm

```bash
$ npm install --save @wework/ray-core
```

Ray requires both CSS and JavaScript files to be imported into your application.
We encourage the use of the Sass source files as they give access to Ray variables and mixins.

### SCSS/CSS

```css
@import '@wework/ray-core/scss/ray-core';
```

### JavaScript

**Note:** For convenience, Ray will automatically instantiate any components that require JavaScript on `DOMContentLoaded`. If components are generated after this event (i.e. client-side rendered), or if they require additional programming, you can use the APIs available on the component level throughtout the documentation.

```js
import { Select } from '@wework/ray-core';
```

### CDN

Ray can also be installed via CDN for rapid prototyping.

| Resource | URL                                                               |
| -------- | ----------------------------------------------------------------- |
| CSS      | https://unpkg.com/@wework/ray-core@latest/css/ray-core.min.css    |
| ES5      | https://unpkg.com/@wework/ray-core@latest/scripts/ray-core.min.js |

<br/>

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://unpkg.com/@wework/ray-core@latest/css/ray-core.min.css"
    />
  </head>

  <body>
    <div class="ray-select">
      ...
    </div>

    <script src="https://unpkg.com/@wework/ray-core@latest/scripts/ray-core.min.js"></script>
    <script>
      Ray.Core.Select.create(document.querySelector('.ray-select'));
    </script>
  </body>
</html>
```

## Structure

`@wework/ray-core` is structured as follows:

```
.
├── es/
│   ├── index.js
│   ├── global/
│   ├── components/
├── umd/
│   ├── index.js
│   ├── global/
│   ├── components/
├── scripts/
│   ├── ray-core.js
│   ├── ray-core.js.map
│   ├── ray-core.min.js
│   ├── ray-core.min.js.map
├── scss/
│   ├── ray-core.scss
│   ├── global/
│   ├── components/
├── css/
│   ├── ray-core.css
│   ├── ray-core.css.map
│   ├── ray-core.min.css
│   ├── ray-core.min.css.map
├── LICENSE
└── README.md
```

### Fonts

You will also need to install the fonts, which can be done via WeWork's CDN. See instructions in the [fonts documentation](/foundations/fonts/).

## Contributing

Feeling ambitious? Good, because we’d love your input and contributions to the design system.

- Create an issue or submit a pull request at [@wework/ray](https://github.com/wework/ray/issues).
- Join us in the [#ray-design-system](https://wework.slack.com/messages/CFLL3QWQ5) slack channel. (For WeWork employees)
