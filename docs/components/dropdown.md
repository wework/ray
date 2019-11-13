---
label: Component
title: Dropdown
---

<page-intro>Text fields within the system have a standard size and a compact size. Our fields are outlined and become activated with our primary color using the rules we set up in our affordances. These components have several elements, not all of which are required.</page-intro>

<component
    name="Dropdown"
    component="dropdown"
    variation="dropdown"
    >
</component>

<component
    name="With placeholder"
    variation="dropdown--with-placeholder"
    component="dropdown"
    >
</component>

<component
    name="Compact"
    component="dropdown"
    variation="dropdown--compact"
    >
</component>

<component
    name="Optgroups"
    component="dropdown"
    variation="dropdown--optgroups"
    >
</component>

<component
    name="Error"
    component="dropdown"
    variation="dropdown--error"
    >
</component>

<component
    name="With Icon"
    component="dropdown"
    variation="dropdown--with-icon"
    >
</component>

<component
    name="Dropdown (RTL)"
    component="dropdown"
    variation="rtl-dropdown"
    >
</component>

<component
    name="With Placeholder (RTL)"
    component="dropdown"
    variation="rtl-dropdown--with-placeholder"
    >
</component>

<component
    name="Compact (RTL)"
    component="dropdown"
    variation="rtl-dropdown--compact"
    >
</component>

<component
    name="Optgroups (RTL)"
    component="dropdown"
    variation="rtl-dropdown--optgroups"
    >
</component>

<component
    name="Error (RTL)"
    component="dropdown"
    variation="rtl-dropdown--error"
    >
</component>

<component
    name="With Icon (RTL)"
    component="dropdown"
    variation="rtl-dropdown--with-icon"
    >
</component>

## JavaScript API

```javascript
import { Dropdown } from '@wework/ray-core';

// instantiate all instances on document
Dropdown.createAll();

// create instance
const dropdown = Dropdown.create(document.querySelector('.ray-dropdown'));

// assign a value
dropdown.set('Charmander');

// destroy
dropdown.destroy();

// open
dropdown.open();
```

| Method                     | Params               | Description                          |
| -------------------------- | -------------------- | ------------------------------------ |
| `Select.createAll`         | `HTMLElement:Object` | create all instances in document     |
| `Select.create`            | `HTMLElement:Object` | create an instance                   |
| `Select.prototype.destroy` |                      | destroy the instance                 |
| `Select.prototype.set`     | `value:string`       | sets the value of the instance       |
| `Select.prototype.clear`   |                      | clear the value of the instance      |
| `Select.prototype.enable`  |                      | makes instance enabled (active)      |
| `Select.prototype.disable` |                      | makes instance disabled (inactive)   |
| `Select.prototype.open`    |                      | opens dropdown list programmatically |

## Modifiers

Use these modifiers with `.ray-dropdown` class.

| Selector                 | Description                                   |
| ------------------------ | --------------------------------------------- |
| `.ray-dropdown--compact` | Selector for applying compact dropdown styles |
| `.ray-dropdown--error`   | Selector for applying error styles            |
| `.ray-dropdown--simple`  | Selector for applying removing styles when Dropdown is in prepend section |
