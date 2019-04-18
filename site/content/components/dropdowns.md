---
layout: docs
title: Dropdowns
menu:
  main:
    parent: Components
toc: true
---

## Default

{{<example>}}
<details class="dropdown">
  <summary class="btn">
    <span>Dropdown</span>
    <svg class="icon icon-small">
      <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
    </svg>
  </summary>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{{</example>}}

### Dropup
{{<example>}}
<details class="dropdown">
  <summary class="btn">
    <span>Dropup</span>
    <svg class="icon icon-small">
      <use xlink:href="/assets/icons/feather.svg#chevron-up"/>
    </svg>
  </summary>
  <ul class="dropdown-menu dropdown-menu-up">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{{</example>}}

### Dropright

{{<example>}}
<details class="dropdown">
  <summary class="btn">
    <span>Dropright</span>
    <svg class="icon icon-small">
      <use xlink:href="/assets/icons/feather.svg#chevron-right"/>
    </svg>
  </summary>
  <ul class="dropdown-menu dropdown-menu-rt">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{{</example>}}

### Dropleft

{{<example>}}
<details class="dropdown">
  <summary class="btn">
    <svg class="icon icon-small">
      <use xlink:href="/assets/icons/feather.svg#chevron-left"/>
    </svg>
    <span>Dropleft</span>
  </summary>
  <ul class="dropdown-menu dropdown-menu-lt">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{{</example>}}

### Separator

{{<example>}}
<details class="dropdown">
  <summary class="btn">
    Dropdown with separator
  </summary>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
    <li class="dropdown-item-separator"></li>
    <li><a class="dropdown-item" href="#">Fourth item</a></li>
  </ul>
</details>
{{</example>}}
