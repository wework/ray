---
label: Guidelines
title: Fonts
---

<page-intro>Ray's primary fonts are Apercu and Apercu Mono. WeWork Technology hosts Apercu and Apercu Mono behind a CDN. To get started using these fonts add the following to the `head` tag of your webpage.</page-intro>

```html
<link rel="stylesheet" href="//www-static.wework.com/apercu/apercu.css" />
<link rel="stylesheet" href="//www-static.wework.com/apercu/apercu_mono.css" />
```

These will load `Apercu Regular`, `Apercu Bold`, and `Apercu Mono`.

## Usage

Apercu and Apercu Mono are used by default in the design system, to extend their use you can either:

a) Use Ray's `$ray-font-stack-sans-serif` variable (recommended)

```css
.my-custom-element {
  font-family: $ray-font-stack-sans-serif;
}
```

b) Manually select the font

```css
.my-bold-element {
  font-family: 'Apercu';
  font-weight: 600;
}
```
