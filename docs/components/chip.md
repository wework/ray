---
label: Component
title: Chip
---

<page-intro>Filter chips use tags or descriptive words to filter content. Filter chips clearly delineate and display options in a compact area.</page-intro>

<component
    name="Chip"
    component="chip"
    variation="chip"
    >
</component>

<component
    name="Chip with icon"
    component="chip"
    variation="chip--with-icon"
    >
</component>

# JavaScript API

```javascript
import { Chip } from '@wework/ray-core';

// instantiate all instances on document
Chip.createAll();

// create instance
const chip = Chip.create(document.querySelector('.ray-chip'));

// set the active state of the instance
chip.set('false');

// destroy
chip.destroy();
```

| Method                   | Params               | Description                           |
| ------------------------ | -------------------- | ------------------------------------- |
| `Chip.createAll`         | `HTMLElement:Object` | create all instances in document      |
| `Chip.create`            | `HTMLElement:Object` | create an instance                    |
| `Chip.prototype.destroy` |                      | destroy the instance                  |
| `Chip.prototype.set`     | `Boolean`            | sets the active state of the instance |

## Modifiers

Use these modifiers with `.ray-select` class.

| Selector            | Description                              |
| ------------------- | ---------------------------------------- |
| `.ray-chip--active` | Selector for applying active chip styles |
