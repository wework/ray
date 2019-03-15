---
label: Component
title: Grid System
---

<page-intro>
Ray features three primary breakpoints: desktop, tablet, and mobile. Our grid system is implemented as a fork of <a href="https://material.io/develop/web/components/layout-grid/" rel="noopener noreferrer" target="_blank">Material Design's CSS grid</a>. 
</page-intro>

<grid-documentation></grid-documentation>

#### Structure

```html
<div class="ray-grid">
  <div class="ray-grid__inner">
    <div class="ray-grid__cell">I'm a cell</div>
    <div class="ray-grid__cell--span-4">I'm another cell that is 4 columns</div>
  </div>
</div>
```

| Name                                                        | Description                                                                                           |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ray-grid                                                    | Mandatory, for the layout grid element                                                                |
| ray-grid\_\_inner                                           | Mandatory, for wrapping grid cells (_must_ be child of `.ray-grid`)                                   |
| ray-grid\_\_cell                                            | Mandatory, for the layout grid cell                                                                   |
| ray-grid\_\_cell--span-<NUMBER_OF_COLUMNS>-<TYPE_OF_DEVICE> | Optional, specifies the number of columns the cell spans on a type of device (desktop, tablet, phone) |
