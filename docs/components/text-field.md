---
label: Component
title: Text Field
---

<page-intro>Text fields within the system have a standard size and a compact size. Our fields are outlined and become activated with our primary color using the rules we set up in our affordances. These components have several elements, not all of which are required.</page-intro>

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

| Selector                                | Description                                       |
| --------------------------------------- | ------------------------------------------------- |
| .ray-{text-field\|text-area}--compact   | Selector for applying compact styles              |
| .ray-{text-field\|text-area}--active    | Selector for applying active/focus styles         |
| .ray-{text-field\|text-area}--has-value | Selector for applying styles when field has value |
| .ray-{text-field\|text-area}--disabled  | Selector for applying disabled styles             |
| .ray-{text-field\|text-area}--error     | Selector for applying error styles                |
| .ray-{text-field\|text-area}--success   | Selector for applying success styles              |

## Hints

To be used adjacent to any form item.

<component
    name="With hints"
    component="text-field"
    variation="text-field-with-hint"
    >
</component>

### Modifiers

Use these modifiers with `.ray-form-item__hint` class.

| Selector                        | Description                               |
| ------------------------------- | ----------------------------------------- |
| .ray-form-item\_\_hint--success | Selector for applying hint success styles |
| .ray-form-item\_\_hint--error   | Selector for applying hint error styles   |

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
