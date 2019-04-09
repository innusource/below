---
layout: docs
title: Tags
parent: Content
toc: true
---

## Types

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

## Sizes

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}
