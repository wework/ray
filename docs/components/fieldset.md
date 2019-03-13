---
label: Component
title: Fieldset
---

<page-intro>A fieldset is used to group a set of controls. It is typically used to group several radio or checkbox components together, but can be used to create context for any form control types.</page-intro>

## Structure

The `legend.ray-fieldset__legend` element _must_ be the first child fo the `fieldset`.

```html
<fieldset class="ray-fieldset">
  <legend class="ray-fieldset__legend">Fieldset legend</legend>

  <!-- form controls go here -->
</fieldset>
```

<component 
    name="Example"
    component="fieldset"
    variation="fieldset" 
    >
</component>
