---
label: Guidelines
title: Typography
---

<page-intro>Well-defined typography styles in combination with a design system layout grid will create structured content. Limiting font-families, a tight type scale, and content limits will keep it tight.</page-intro>

To avoid conflicting with other libraries, Ray does _not_ assign css attributes directly to HTML tags like h1–h6. If that kind of behavior is needed, see Running Text below.

<component
    name="All types"
    component="typography"
    variation="typography"
    >
</component>

## Pairings

<p class="ray-p3">Headings and paragraph styles can often be paired with their respective "levels" for an aesthetically pleasing hierarchy.</p>

<component
    name=".ray-h3 + .ray-p3"
    component="typography"
    variation="typography-h3p3"
    >
</component>

## Running Text

This utility is useful for long-form content, especially content that is dynamically genereated from markdown. It will directly style `h1`–`h6`, `p`, `ul`, and `ol` tags.

<component
    component="typography"
    variation="typography-running-text"
    >
</component>

# Font Family

<p class="ray-p3">Limiting font-families, a tight type scale, and content limits will keep it tight.</p>

## Apercu

The design system uses Apercu as the main typeface. It has been the typeface of choice for WeWork for the past two years and has proved to be consistent with our brand style and execution.

Font weights will be restricted to regular and bold.

## Apercu Mono

A mono-space font is useful for differentiating between general body copy and specific data or section headers. We use Apercu-Mono to define the section headers and specific numerical data.

A mono-spaced font only has a single weight.

# Standard Text Colors

<p class="ray-p3">Text colors used will be broken out by use case and tint (light, medium, dark). Restricting the colors used will help with consistency.</p>

## Dark

`$ray-color-text-dark` – Text colors used will be broken out by use case and tint (light, medium, dark). Restricting the colors used will help with consistency.

## Medium

`$ray-color-text-medium` – A secondary text color is needed for the system in places like labels on inputs.

## Light

`$ray-color-text-light` – A tertiary text color is need for the system to convey placeholder for example.
