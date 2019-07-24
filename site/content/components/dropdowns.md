---
layout: docs
title: Dropdowns
menu:
  main:
    parent: Components
toc: true
---

## Default

Below uses <code>&lt;details&gt;</code> tag to make dropdowns. By default the <code>.dropdown-content</code> opens aligned to the right.

{{<example>}}
<details class="dropdown">
  <summary class="btn">
    Dropdown
    <svg class="icon icon-right">
      <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
    </svg>
  </summary>
  <ul class="dropdown-content">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{{</example>}}

## Dropdown Left

You can use <code>.dropdown-content-left</code> to open a dropdown aligned to left.

{{<example>}}
<details class="dropdown">
  <summary class="btn">
    Dropdown Left
    <svg class="icon icon-right">
      <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
    </svg>
  </summary>
  <ul class="dropdown-content dropdown-content-left">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{{</example>}}

## Dropup
The dropup opens aligned to the right too.
{{<example>}}
<details class="dropdown">
  <summary class="btn">
    Dropup
    <svg class="icon icon-right">
      <use xlink:href="/assets/icons/feather.svg#chevron-up"/>
    </svg>
  </summary>
  <ul class="dropdown-content dropup-content">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{{</example>}}

## Dropup Left

You can use <code>.dropup-content-left</code> to open a dropdown aligned to left.
{{<example>}}
<details class="dropdown">
  <summary class="btn">
    Dropup
    <svg class="icon icon-right">
      <use xlink:href="/assets/icons/feather.svg#chevron-up"/>
    </svg>
  </summary>
  <ul class="dropdown-content dropup-content-left">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{{</example>}}

## Dropright

{{<example>}}
<details class="dropdown">
  <summary class="btn btn-clear">
    <svg class="icon">
      <use xlink:href="/assets/icons/feather.svg#help-circle"/>
    </svg>
    Dropright
  </summary>
  <div class="dropdown-content dropright-content">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </div>
</details>
{{</example>}}

## Dropleft

{{<example>}}
<details class="dropdown">
  <summary class="btn btn-clear">
    <svg class="icon">
      <use xlink:href="/assets/icons/feather.svg#help-circle"/>
    </svg>
    Dropleft
  </summary>
  <div class="dropdown-content dropleft-content">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </div>
</details>
{{</example>}}

## Dropdown with Separator

{{<example>}}
<details class="dropdown">
  <summary class="btn">
    Dropdown with separator
    <svg class="icon icon-right">
      <use xlink:href="/assets/icons/feather.svg#chevron-right"/>
    </svg>
  </summary>
  <ul class="dropdown-content">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
    <li class="dropdown-item-separator"></li>
    <li><a class="dropdown-item" href="#">Fourth item</a></li>
  </ul>
</details>
{{</example>}}
