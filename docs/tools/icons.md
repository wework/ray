---
label: Tool
title: Icons
---

<page-intro>Everyone loves icons 🤗</page-intro>

## Installation

```bash
yarn add @wework/ray-icons
```

### Usage (with webpack)

Requires loaders that can read `.svg` files. This is recommended if building a JavaScript application.

```js
import businessGrowthSVG from '@wework/ray-icons/resources/svg/business/outline/business-growth.svg';

<img src={businessGrowthSVG} alt="business growth plant" />;
```

### Usage (with img)

Requires your `node_modules` directory to be publicly accessible. This can be useful for quick prototyping.

```html
<img
  src="../path_to_node_modules/@wework/ray-icons/resources/svg/business/outline/business-growth.svg"
  alt="business growth plant"
/>;
```

### Usage (with svg element)

Copy and paste the raw contents of one of the svg files

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100%"
  preserveAspectRatio="none"
  style="display: flex;"
>
  ...
</svg>
```

## Find an icon

<docs-icons></docs-icons>
