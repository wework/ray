---
label: Guidelines
title: Fonts
---

Ray's primary font is Apercu and Apercu Mono. WeWork Technology hosts Apercu and Apercu mono behind a CDN. To get started using these fonts add the following to the `head` tag of your webpage.

```html
<link rel="stylesheet" href="//www-static.wework.com/apercu/apercu.css" />
<link rel="stylesheet" href="//www-static.wework.com/apercu/apercu_mono.css" />
```

These will load `Apercu Medium`, `Apercu Bold`, and `Apercu Mono`.

Apercu and Apercu Mono are used by default in the design system, to extend their use you can either:

a) Use Ray's `$font-stack-sans-serif` variable

```css
.my-custom-element {
  font-family: $font-stack-sans-serif;
}
```

b) Manually select the font

```css
.my-bold-element {
  font-family: 'Apercu';
  font-weight: 600;
}
```
