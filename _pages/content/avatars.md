---
layout: docs
title: Avatars
parent: Content
toc: true
---

## Default

{% capture example %}
<span class="avatar">A</span>
{% endcapture %}
{% include example.html content=example %}

## Avatar with Image
{% capture example %}
<span class="avatar">
  <img src="/assets/img/avatar.jpeg">
</span>
{% endcapture %}
{% include example.html content=example %}

## Sizes

{% capture example %}
<span class="avatar avatar-small">S</span>
<span class="avatar">M</span>
<span class="avatar avatar-big">B</span>
{% endcapture %}
{% include example.html content=example %}

## Avatars Group

{% capture example %}
<div class="avatar-group">
  <span class="avatar">M</span>
  <span class="avatar">
    <img src="/assets/img/avatar.jpeg">
  </span>
  <span class="avatar">MA</span>
</div>

<div class="avatar-group">
  <span class="avatar avatar-small">S</span>
  <span class="avatar">M</span>
  <span class="avatar avatar-big">
    <img src="/assets/img/avatar.jpeg">
  </span>
  <span class="avatar avatar-big">B</span>
</div>
{% endcapture %}
{% include example.html content=example %}
