---
label: Component
title: Text Field
---

<page-intro>Text fields allow users to interact with the side with text input</page-intro>

<component 
    name="Text field"
    component="text-field"
    variation="text-field" 
    >
</component>

<component 
    name="Text area"
    component="text-field"
    variation="text-area" 
    >
</component>

## Modifiers

Use these modifiers with `.ray-text-field` or `.ray-text-area` class.

| Selector                          | Description                                         |
| --------------------------------- | --------------------------------------------------- |
| .ray-text-field--compact          | Selector for applying compact styles                |
| .ray-text-field--active           | Selector for applying active/focus styles           |
| .ray-text-field--has-value        | Selector for applying styles when field has value   |
| .ray-text-field--placeholder-mode | Selector for applying placeholder styles (no value) |
| .ray-text-field--disabled         | Selector for applying disabled styles               |
| .ray-text-field--error            | Selector for applying error styles                  |

## JavaScript

Text fields:

```javascript
import { TextField } from '@wework/ray-core';
TextField.createAll();
// or
TextField.create(document.querySelector('.ray-text-field'));
```

Textareas:

```javascript
import { TextArea } from '@wework/ray-core';
TextArea.createAll();
// or
TextArea.create(document.querySelector('.ray-text-area'));
```
