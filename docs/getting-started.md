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

## Import

Ray requires both CSS and JavaScript files to be imported into your application.

### CSS

We encourage the use of the Sass source files, as they give access to Ray variables and mixins. If you are using Sass for your project, simply import the Ray SCSS file into your app's main stylesheet:

```css
@import '@wework/ray-core/scss/ray-core';
```

If you prefer to use plain CSS, you can either [use our CDN](#cdn), or import the Ray CSS file at `@wework/ray-core/css/ray-core`

### JavaScript

In order for certain components to work properly, you must import Ray into your app:

```js
import '@wework/ray-core';
```

For convenience, Ray will automatically instantiate any components that require JavaScript on `DOMContentLoaded`.

If components are generated after this event (i.e. client-side rendered), or if they require additional programming, you can import individual component classes and use the APIs available on the component level throughout the documentation:

```js
import { Select } from '@wework/ray-core';

// instantiate all instances found in the document
Select.createAll();

// manually create a specific instance
const select = Select.create(document.querySelector('.ray-select'));

// manipulate the component from code
select.set('pikachu');
```

## CDN

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

## Fonts

You will also need to install Ray fonts, which can be done via WeWork's CDN. See instructions in the [fonts documentation](/foundations/fonts/).

## Structure

`@wework/ray-core` is structured as follows:

```txt
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

## Contributing

Feeling ambitious? Good, because we’d love your input and contributions to the design system.

- Create an issue or submit a pull request at [@wework/ray](https://github.com/wework/ray/issues).
- Join us in the [#ray-design-system](https://wework.slack.com/messages/CFLL3QWQ5) slack channel. (For WeWork employees)
