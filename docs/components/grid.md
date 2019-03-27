---
label: Component
title: Grid System
---

<page-intro>Ray features three primary breakpoints: desktop, tablet, and mobile. Our grid system is implemented as a fork of <a href="https://material.io/develop/web/components/layout-grid/" rel="noopener noreferrer" target="_blank">Material Design's CSS grid</a>.</page-intro>

<grid-documentation></grid-documentation>

#### Structure

```html
<div class="ray-grid">
  <div class="ray-grid__inner">
    <div class="ray-grid__cell">I'm a cell</div>
    <div class="ray-grid__cell--span-4">I'm another cell that is 4 columns</div>
    <div class="ray-grid__cell--span-full">
      I'm another cell that will always span full width
    </div>
  </div>
</div>
```

| Name                                                         | Description                                                                                                                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.ray-grid`                                                  | Mandatory, for the layout grid element                                                                                                                       |
| `.ray-grid--align-<POSITION>`                                | Optional, align the grid to the left or right side of the container<br>`POSITION`: left, right                                                               |
| `.ray-grid--justify-<POSITION>`                              | Optional, align the cells of the grid (default: left, does not affect nested grids<br>`POSITION`: left, center, right                                        |
| `.ray-grid__inner`                                           | Mandatory, for wrapping grid cells (_must_ be child of `.ray-grid`)                                                                                          |
| `.ray-grid__cell`                                            | Mandatory, for the layout grid cell                                                                                                                          |
| `.ray-grid__cell--align-<POSITION>`                          | Optional, align the cell to the top, middle, or center of the containing grid<br>`POSITION`: top, middle, bottom                                             |
| `.ray-grid__cell--span-<NUMBER_OF_COLUMNS>-<TYPE_OF_DEVICE>` | Optional, specifies the number of columns the cell spans on a type of device<br>`NUMBER_OF_COLUMS`: 1 through 12<br>`TYPE_OF_DEVICE`: desktop, tablet, phone |
| `.ray-grid__cell--span-full`                                 | Optional, specify that the cell should span the full width of the grid                                                                                       |
