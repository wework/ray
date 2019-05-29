---
label: Guidelines
title: Breakpoints
---

<page-intro>Ray features three primary breakpoints: desktop, tablet, and mobile. The variable `$ray-layout-grid-breakpoints` contains a map of the following variables.</page-intro>

<breakpoints-documentation></breakpoints-documentation>

# Mixins

```css
padding: 1rem;

@include ray-breakpoint(tablet) {
  /* These styles will apply to the tablet breakpoint and above */
  padding: 2rem;
}

@include ray-breakpoint(phone, tablet) {
  /* These styles will apply to the phone breakpoint and end at the beginning of the tablet breakpoint */
  padding: 2rem;
}
```

## Mobile first example

```css
font-size: 0.75rem;

@include ray-breakpoint(tablet) {
  font-size: 1rem;
}

@include ray-breakpoint(desktop) {
  font-size: 2rem;
}
```
