---
layout: docs
title: Tabs
menu:
  main:
    parent: Components
toc: true
---

## Tabs

{{<example>}}
<nav class="nav-tabs">
  <ul>
    <li class="active"><a href="#">Active</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li class="disabled"><a href="#">Disabled</a></li>
  </ul>
</nav>
{{</example>}}

## Tabs with Content

{{<example>}}
<div class="nav-tabs">

  <input name="tabs" type="radio" id="tab-1" class="radio-tabs" checked="checked">
  <label for="tab-1" class="tab-label">Tab 1</label>
  <div class="tab-panel">
    <h5>Tab 1</h5>
    <p>Paragraph for panel of Tab 1.</p>
  </div>

  <input name="tabs" type="radio" id="tab-2" class="radio-tabs">
  <label for="tab-2" class="tab-label">Tab 2</label>
  <div class="tab-panel">
    <h5>Tab 2</h5>
    <p>Paragraph for panel of Tab 1.</p>
  </div>

  <input name="tabs" type="radio" id="tab-3" class="radio-tabs">
  <label for="tab-3" class="tab-label">Tab 3</label>
  <div class="tab-panel">
    <h5>Tab 3</h5>
    <p>Paragraph for panel of Tab 3.</p>
  </div>

  <!-- This tab is disabled -->
  <input name="tabs" type="radio" id="tab-4" class="radio-tabs" disabled>
  <label for="tab-4" class="tab-label">Tab 4</label>
  <div class="tab-panel">
    <h5>Tab 4</h5>
    <p>Paragraph for panel of Tab 4 (disabled).</p>
  </div>
</div>
{{</example>}}
