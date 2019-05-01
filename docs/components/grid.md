---
label: Component
title: Grid System
---

<page-intro>Our grid system is implemented as a fork of <a href="https://material.io/develop/web/components/layout-grid/" rel="noopener noreferrer" target="_blank">Material Design's CSS grid</a>.</page-intro>

<grid-documentation></grid-documentation>

#### Structure

```html
<div class="ray-page-container">
  <div class="ray-grid">
    <div class="ray-grid__cell">
      I'm a cell, spanning the default 4 columns
    </div>
    <div class="ray-grid__cell--span-4">
      I'm another cell that is 4 columns
    </div>
    <div class="ray-grid__cell--span-1 ray-grid__cell--push-2">
      I'm a cell that is pushed 2 columns from the left
    </div>
    <div class="ray-grid__cell--span-full">
      I'm another cell that will always span full width
    </div>
  </div>
</div>
```

| Name                                                         | Description                                                                                                                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.ray-page-container`                                        | Typically used once on a page, defines maximum width and padding charactersitics for the page                                                                      |
| `.ray-page-container--align-<POSITION>`                      | Optional, align the grid to the left or right side of the container<br>`POSITION`: left, right                                                                     |
| `.ray-page-container--justify-<POSITION>`                    | Optional, align the cells of the grid (default: left, does not affect nested grids<br>`POSITION`: left, center, right                                              |
| `.ray-grid`                                                  | Mandatory, for wrapping grid cells (_must_ be child of `.ray-grid`)                                                                                                |
| `.ray-grid__cell`                                            | Mandatory, for the layout grid cell (default width: 4 columns)                                                                                                     |
| `.ray-grid__cell--align-<POSITION>`                          | Optional, align the cell to the top, middle, or center of the containing grid<br>`POSITION`: top, middle, bottom                                                   |
| `.ray-grid__cell--span-<NUMBER_OF_COLUMNS>-<TYPE_OF_DEVICE>` | Optional, specifies the number of columns the cell spans on a type of device<br>`NUMBER_OF_COLUMS`: 1 through 12<br>`TYPE_OF_DEVICE`: desktop, tablet, phone       |
| `.ray-grid__cell--push-<NUMBER_OF_COLUMNS>-<TYPE_OF_DEVICE>` | Optional, specifies the number of columns the cell is "pushed" on a type of device<br>`NUMBER_OF_COLUMS`: 1 through 12<br>`TYPE_OF_DEVICE`: desktop, tablet, phone |
| `.ray-grid__cell--span-full`                                 | Optional, specify that the cell should span the full width of the grid                                                                                             |
