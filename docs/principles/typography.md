---
label: Guidelines
title: Typography
---

<page-intro>Well-defined typography styles in combination with a design system layout grid will create structured content. Limiting font-families, a tight type scale, and content limits will keep it tight.</page-intro>

> To avoid conflicting with other libraries, by default, Ray does _not_ assign css attributes directly to HTML tags like h1–h6. If that kind of behavior is needed, assign the `$ray-assign-typography-styles-natively` sass variable to true _or_ see [Running Text](#running-text) below.

## Headings

Ray includes typography styles for `<h1>` through `<h6>` classes, with `.ray-text--h*`.

The classes are _not_ tied to the semantic html tags, so for example you could use a `.ray-text--h3` on an `<h1>`, however this is an indicator that the information heriarchy of your page may need some reconsideration.

Headings include some margin on them. If you wish to use a heading without including the margin you can assign the class to a `span`, like below:

<component
    component="typography"
    variation="typography-headings"
    >
</component>

## Displays

Native heading elements (h1-h6) are designed for general-purpose use throughout the content. However, if a more distiguished and intentional headline is needed, consider using a `display` headline.

<component
    component="typography"
    variation="typography-displays"
    >
</component>

## Body Copy

<component
    component="typography"
    variation="typography-body"
    >
</component>

## Running Text

This utility is useful for long-form content, especially content that is dynamically genereated from markdown. It will directly style `h1`–`h6`, `p`, `blockquote`, `ul`, and `ol` tags.

<component
    component="typography"
    variation="typography-running-text"
    >
</component>

## Utilities

<component
    component="typography"
    variation="typography-utilities"
    >
</component>

## Blockquote

Add a `<footer class="ray-blockquote__footer">` to identify a source.

<component
    component="typography"
    variation="typography-blockquote"
    >
</component>

# Font Family

<p class="ray-text--body-large">Limiting font-families, a tight type scale, and content limits will keep it tight.</p>

## Apercu

The design system uses Apercu as the main typeface. It has been the typeface of choice for WeWork for the past two years and has proved to be consistent with our brand style and execution.

Font weights will be restricted to regular and bold.

<h2 class="ray-text--monospace">Apercu Mono</h2>

A mono-space font is useful for differentiating between general body copy and specific data or section headers. We use Apercu-Mono to define the section headers and specific numerical data.

A mono-spaced font only has a single weight.

# Standard Text Colors

<p class="ray-text--body-large">Text colors used will be broken out by use case and tint (light, medium, dark). Restricting the colors used will help with consistency.</p>

## Dark

`$ray-color-text-dark` – The primary text color, this should generally be used by default for most elements and body text.

## Medium

`$ray-color-text-medium` – A secondary text color is needed for the system in places like labels on inputs.

## Light

`$ray-color-text-light` – A tertiary text color is need for the system to convey placeholder for example.
