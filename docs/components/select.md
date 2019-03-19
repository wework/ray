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

## JavaScript

```javascript
import { Select } from '@wework/ray-core';

Select.createAll();
// or
Select.create(document.querySelector('.ray-select'));
```

## Modifiers

Use these modifiers with `.ray-select` class.

| Selector             | Description                                 |
| -------------------- | ------------------------------------------- |
| .ray-select--compact | Selector for applying compact select styles |
| .ray-select--error   | Selector for applying error styles          |
