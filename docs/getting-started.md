---
title: Getting Started
label: Guide
---

<page-intro>Ray is a CSS and JavaScript framework [available on npm](https://github.com/WeConnect/ray).</page-intro>

Just want to get your feet wet? Check out the [codepen demo](https://codepen.io/adamraider/pen/bZoBqL).

## 🏖 Installation

We encourage consumers of Ray to install via npm or yarn and interface with package via the package manager.

You will need also need to install the fonts, which can be done via WeWork's CDN. See instructions in the [fonts documentation](/principles/fonts).

### Package

```bash
$ yarn add @wework/ray-core
# or
$ npm install --save @wework/ray-core
```

Ray requires both CSS and JavaScript files to be imported into your application.
We encourage the use of the Sass source files as they give access to Ray variables and mixins.

```css
/* Your Sass file */
@import '@wework/ray-core';
```

Javascripts:

```js
/* Your JavaScript file */
import { Select } from '@wework/ray-core';
Select.create(...)
```

### CDN

Ray can also be installed via CDN for rapid prototyping.

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

## 📁 Structure

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
