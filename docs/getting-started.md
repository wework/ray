---
title: Getting Started
---

<page-intro>Ray is a CSS and JavaScript framework [available on npm](https://github.com/WeConnect/ray).</page-intro>

## 🏖 Installation

We encourage consumers of Ray to install via npm or yarn and interface with package via the package manager.

```bash
$ yarn add @wework/ray-core
# or
$ npm install --save @wework/ray-core
```

You will need also need to install the fonts, which can be done via the package or via WeWork's CDN. See instructions in the [fonts documentation](/fonts).

Ray requires both CSS and JavaScript files to be imported into your application.

### CSS

The styles can be imported via the built cersion of the css `@wework/ray-core/css/application.min.css`, or via importing the Sass source files:

```css
@import '@wework/ray-core';
```

We encourage the use of the source files as they give access to Ray variables and mixins.

### JavaScript

The javascripts can be imported via:

1. UMD by package `@wework/ray-core/umd`
2. ES by package `@wework/ray-core/es`

```js
import { Select } from '@wework/ray-core';
```

3. CDN

```html
<body>
  <div class="ray-select">
    ...
  </div>

  <script src="https://unpkg.com/@wework/ray-core/umd/index.js"></script>
  <script>
    Ray.Core.Select.create(document.querySelector('ray-select'));
  </script>
</body>
```

## 📁 Structure

`@wework/ray-core` is structured as follows:

```
.
├── html
│   ├── components
├── es
│   ├── index.js
│   ├── global
│   ├── components
├── umd
│   ├── index.js
│   ├── global
│   ├── components
├── scss
│   ├── application.scss
│   ├── global
│   ├── components
├── css
│   ├── application.css
│   ├── application.css.map
│   ├── application.min.css
│   ├── application.min.css.map
├── LICENSE
└── README.md
```
