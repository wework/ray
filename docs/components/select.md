---
label: Component
title: Select
---

<page-intro>Text fields within the system have a standard Size and a compact Size. Our fields are outlined and become activated with our primary color using the rules we set up in our affordances. These components have several elements, not all of which are required.</page-intro>

<component 
    name="With placeholder"
    component="select"
    variation="select--with-placeholder" 
    >
</component>

<component 
    name="Compact"
    component="select"
    variation="select--compact" 
    >
</component>

<component 
    name="Error"
    component="select"
    variation="select--error" 
    >
</component>

<component 
    name="With icon"
    component="select"
    variation="select-with-icon" 
    >
</component>

## JavaScript API

```javascript
import { Select } from '@wework/ray-core';

// instantiate all instances on document
Select.createAll();

// create instance
const select = Select.create(document.querySelector('.ray-select'));

// assign a value
select.set('pikachu');

// destroy
select.destroy();
```

| Method                     | Params               | Description                      |
| -------------------------- | -------------------- | -------------------------------- |
| `Select.createAll`         | `HTMLElement:Object` | create all instances in document |
| `Select.create`            | `HTMLElement:Object` | create an instance               |
| `Select.prototype.destroy` |                      | destroy the instance             |
| `Select.prototype.set`     |                      | sets the value of the instance   |

## Modifiers

Use these modifiers with `.ray-select` class.

| Selector               | Description                                 |
| ---------------------- | ------------------------------------------- |
| `.ray-select--compact` | Selector for applying compact select styles |
| `.ray-select--error`   | Selector for applying error styles          |
