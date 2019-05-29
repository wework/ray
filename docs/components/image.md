---
label: Component
title: Image
---

<page-intro>The `image` and `bg` components provide an easy way to add fixed aspect-ratio graphics to your site. Images can have an optional \``.ray-caption`\` element to add additional context to specific pieces of media they accompany across the system.</page-intro>

# Image elements

For most images on a web page, the `img` tag should be used. This is best for accessibility purposes, as backgrounds are typically not registered as content for screen readers. This will also allow you to leverage srcsets for responsive imagery.

<component
    name="16x9"
    component="image"
    variation="image--16by9"
    >
</component>

<component
    name="Image 16x9 RTL"
    component="image"
    variation="rtl-image--caption"
    >
</component>

<component
    name="Image 3x4"
    name="3x4"
    component="image"
    variation="image--3by4"
    >
</component>

## Background elements

<component
    name="16x9"
    component="image"
    variation="bg--16by9"
    >
</component>

<component
    name="4x3"
    component="image"
    variation="bg--4by3"
    >
</component>

<component
    name="3x4"
    component="image"
    variation="bg--3by4"
    >
</component>

# Caption

<component
    component="image"
    variation="image--caption"
    >
</component>

<component
    name="RTL"
    component="image"
    variation="rtl-image--caption"
    >
</component>

## Modifiers

Use these modifiers with `.ray-image` or `.ray-bg` classes.

| Selector                                  | Description                            |
| ----------------------------------------- | -------------------------------------- |
| `.ray-image--3by4`<br>`.ray-bg--3by4`     | Selector for 3:4 aspect ratio          |
| `.ray-image--16by9`<br>`.ray-bg--16by9`   | Selector for 16:9 aspect ratio         |
| `.ray-image--4by3`<br>`.ray-bg--4by3`     | Selector for 4:3 aspect ratio          |
| `.ray-image--1by1`<br>`.ray-bg--1by1`     | Selector for 1:1 aspect ratio          |
| `.ray-image--cinema`<br>`.ray-bg--cinema` | Selector for 2.4:1 cinema aspect ratio |
