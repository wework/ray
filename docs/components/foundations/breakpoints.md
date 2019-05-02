---
label: Guidelines
title: Breakpoints
---

<page-intro>Ray features three primary breakpoints: desktop, tablet, and mobile. The variable `$ray-layout-grid-breakpoints` contains a map of the following variables.</page-intro>

<breakpoints-documentation></breakpoints-documentation>

## Mobile first example

```css
font-size: 0.75rem;

@media (min-width: map-get($ray-layout-grid-breakpoints, tablet)) {
  font-size: 1rem;
}

@media (min-width: map-get($ray-layout-grid-breakpoints, desktop)) {
  font-size: 2rem;
}
```
