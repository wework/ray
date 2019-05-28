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
    name="Text field (RTL)"
    component="text-field"
    variation="rtl-text-field"
    >
</component>

<component
    name="Text area"
    component="text-area"
    variation="text-area"
    >
</component>

<component
    name="Text area with rows"
    component="text-area"
    variation="text-area-multi-row"
    >
</component>

<component
    name="Text field with hints"
    component="text-field"
    variation="text-field-with-hint"
    >
</component>

<component
    name="Text field with hints (RTL)"
    component="text-field"
    variation="rtl-text-field-with-hint"
    >
</component>

<component
    name="Text field with icons"
    component="text-field"
    variation="text-field-with-icon"
    >
</component>

<component
    name="Text field with icons (RTL)"
    component="text-field"
    variation="rtl-text-field-with-icon"
    >
</component>

<component
    name="Text field with prepend"
    component="text-field"
    variation="text-field-with-prepend"
    >
</component>

<component
    name="Text field with prepend (RTL)"
    component="text-field"
    variation="rtl-text-field-with-prepend"
    >
</component>

## Adding hints

Use these modifiers with `.ray-form-item__hint` class.

| Selector                        | Description                               |
| ------------------------------- | ----------------------------------------- |
| `.ray-form-item__hint--success` | Selector for applying hint success styles |
| `.ray-form-item__hint--error`   | Selector for applying hint error styles   |

## Modifiers for Text Fields and Text Areas

Use these modifiers with `.ray-text-field` or `.ray-text-area` class.

| Selector                                                    | Description                                       |
| ----------------------------------------------------------- | ------------------------------------------------- |
| `.ray-text-field--compact`<br>`.ray-text-area--compact`     | Selector for applying compact styles              |
| `.ray-text-field--active`<br>`.ray-text-area--active`       | Selector for applying active/focus styles         |
| `.ray-text-field--has-value`<br>`.ray-text-area--has-value` | Selector for applying styles when field has value |
| `.ray-text-field--disabled`<br>`.ray-text-area--disabled`   | Selector for applying disabled styles             |
| `.ray-text-field--error`<br>`.ray-text-area--error`         | Selector for applying error styles                |
| `.ray-text-field--success`<br>`.ray-text-area--success`     | Selector for applying success styles              |

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

| Method                                      | Params               | Description                      |
| ------------------------------------------- | -------------------- | -------------------------------- |
| `(TextField || TextArea).createAll`         | `HTMLElement:Object` | create all instances in document |
| `(TextField || TextArea).create`            | `HTMLElement:Object` | create an instance               |
| `(TextField || TextArea).prototype.destroy` |                      | destroy the instance             |
| `(TextField || TextArea).prototype.set`     |                      | sets the value of the instance   |
