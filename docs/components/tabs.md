---
label: Component
title: Tabs
---

<page-intro>Tabs can be used to show content based on an individual tab's active state.</page-intro>

<component
    name="Tabs"
    component="tabs"
    variation="tabs"
    >
</component>

<component
    name="Tabs"
    component="tabs"
    variation="rtl-tabs"
    >
</component>

# JavaScript API

```javascript
import { Tabs } from '@wework/ray-core';

// instantiate all instances on document
Tabs.createAll();

// create instance
const tabs = Tabs.create(document.querySelector('.ray-tabs'));

// destroy
tabs.destroy();
```

| Method                   | Params               | Description                      |
| ------------------------ | -------------------- | -------------------------------- |
| `Tabs.createAll`         | `HTMLElement:Object` | create all instances in document |
| `Tabs.create`            | `HTMLElement:Object` | create an instance               |
| `Tabs.prototype.destroy` |                      | destroy the instance             |

## Modifiers

Use these modifiers with `.ray-chip` class.

| Selector                  | Description                             |
| ------------------------- | --------------------------------------- |
| `.ray-tabs__item--active` | Selector for applying active tab styles |
