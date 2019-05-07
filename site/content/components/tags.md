---
layout: docs
title: Tags
menu:
  main:
    parent: Components
toc: true
---

## Types

{{<example>}}
<div class="tag">
  Default
</div>

<div class="tag tag-outline">
  Outline
</div>

<div class="tag tag-icon">
  Default with icon
  <svg class="icon icon-small"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
</div>

<div class="tag tag-outline tag-icon">
  Outline with icon
  <svg class="icon icon-small"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
</div>
{{</example>}}

## Sizes

{{<example>}}
<div class="tag tag-small">
  Small
  <svg class="icon icon-small"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
</div>

<div class="tag">
  Default
  <svg class="icon icon-small"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
</div>

<div class="tag tag-big">
  Big
  <svg class="icon icon"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
</div>
{{</example>}}


## Absolute Tag

If you want to use a tag inside a relative <kbd>div</kbd>, could use an absolute tag.

{{<example>}}
<div class="tag tag-absolute">
  I'm absolute
</div>
{{</example>}}