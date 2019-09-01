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
<!-- Default Tag -->
<div class="tag">Default</div>

<!-- Secondary Tag -->
<div class="tag tag-secondary">Secondary</div>

<!-- Outline Tag -->
<div class="tag tag-outline">Outline</div>

<!-- Success Tag -->
<div class="tag tag-success">Success</div>

<!-- Warning Tag -->
<div class="tag tag-warning">Warning</div>

<!-- Error Tag -->
<div class="tag tag-error">Error</div>
{{</example>}}

## Tags with Icons

{{<example>}}
<!-- Default Tag with icon -->
<div class="tag">
  Default with icon
  <svg class="icon icon-small"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
</div>

<!-- Secondary Tag with icon -->
<div class="tag tag-secondary">
  Secondary with Icon
  <svg class="icon icon-small"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
</div>

<!-- Outline Tag with icon -->
<div class="tag tag-outline">
  Outline with icon
  <svg class="icon icon-small"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
</div>
{{</example>}}


## Absolute Tag

If you want to use a tag inside a relative <code>&lt;div&gt;</code> could use an absolute tag.

{{<example>}}
<div class="tag tag-absolute">
  I'm absolute
</div>
{{</example>}}
