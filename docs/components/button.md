---
label: Component
title: Button
status: Experimental
---

<page-intro>Buttons within the system have a standard size and a compact size to match the text inputs. Primary buttons have a solid affordance fill, and secondary buttons use a 1pt outline of the affordance color. Tertiary buttons have no affordance container. </page-intro>

To add an icon, use the `.ray-button__icon` class on an element, usually an svg. Buttons should always be on the right side of the text. For accessibility, it is recommended to add a `<title>` element to your svg.

<component
    name="Primary button"
    component="button"
    variation="button--primary"
    >
</component>
<component
    name="Primary button (RTL)"
    component="button"
    variation="rtl-button--primary"
    >
</component>
<component
    name="Secondary button"
    component="button"
    variation="button--secondary"
    >
</component>
<component
    name="Secondary button (RTL)"
    component="button"
    variation="rtl-button--secondary"
    >
</component>
<component
    name="Tertiary button"
    component="button"
    variation="button--tertiary"
    >
</component>
<component
    name="Tertiary button (RTL)"
    component="button"
    variation="rtl-button--tertiary"
    >
</component>
<component
    name="Compact button"
    component="button"
    variation="button--compact"
    >
</component>
<component
    name="Compact button (RTL)"
    component="button"
    variation="rtl-button--compact"
    >
</component>
<component
    name="Danger button"
    component="button"
    variation="button--danger"
    >
</component>
<component
    name="Danger button (RTL)"
    component="button"
    variation="rtl-button--danger"
    >
</component>

## Modifiers

Use these modifiers with `.ray-button` class.

| Selector                 | Description                                   |
| ------------------------ | --------------------------------------------- |
| `.ray-button--primary`   | Selector for applying primary button styles   |
| `.ray-button--secondary` | Selector for applying secondary button styles |
| `.ray-button--danger`    | Selector for applying danger button styles    |
| `.ray-button--tertiary`  | Selector for applying tertiary button styles  |
| `.ray-button--compact`   | Selector for applying compact button styles   |
