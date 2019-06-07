---
label: Guidelines
title: Accessibility
---

<page-intro>We believe the web is for everyone. For this reason, accessibility is treated as a first-class citizen in this system. All styles and scripts are developed to be usable, regardless of disability or device.</page-intro>

### Keyboard Navigation

Many people navigate the web using technologies such as screen readers, or are unable to use a traditional mouse. It's imperative that content and interactive elements are accessible by way of keyboard navigation, and clearly indicate when

Do not remove focus states from elements unless you implement a suitable replacement.

If the user is using a keyboard to navigate, Ray will apply a class to the document's body element that enables focus states on various components, otherwise these styles are hidden to avoid visual clutter.

### Color Ratio

The WCAG state to ensure readability that text and interactive elements should maintain a color contrast ratio of at least 4.5:1.

[Web Content Accessibility Guidelines](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG)

### Color Blindness

The most common variety of colorblindness is red-green color blindness. It's important to **avoid** juxtaposing these color.

[US Government Standards](https://designsystem.digital.gov/design-tokens/color/overview/)

### Images

If a graphic (this includes icons) is relevant to the content or user experience, it should use an `<img />` with an `alt` attribute.

- Avoid background images unless they are used purely for aesthetic purposes as they are not parsed by screen readers
- Avoid including text in images as they cannot be parsed by screen readers
