---
layout: docs
title: Avatars
menu:
  main:
    parent: Components
toc: true
---

## Default

{{<example>}}
<span class="avatar">A</span>
{{</example>}}

Too avatars works if you give the class to an <kbd>a</kbd> tag.

{{<example>}}
<a class="avatar" href="#">A</a>
{{</example>}}

## Types

{{<example>}}
<!-- Default -->
<span class="avatar">A</span>

<!-- Square -->
<span class="avatar avatar-square">SQ</span>
{{</example>}}

## Avatar with Image
{{<example>}}
<span class="avatar">
  <img src="/assets/img/avatar-01.jpeg">
</span>
{{</example>}}

## Sizes

{{<example>}}
<!-- Extra Large -->
<span class="avatar avatar-x-large">XL</span>

<!-- Large -->
<span class="avatar avatar-large">L</span>

<!-- Default (Medium) -->
<span class="avatar">M</span>

<!-- Small -->
<span class="avatar avatar-small">S</span>

<!-- Extra Small -->
<span class="avatar avatar-x-small">XS</span>
{{</example>}}

## Avatars Status

{{<example>}}
<span class="avatar avatar-x-large avatar-status avatar-status-on">
  <img src="/assets/img/avatar.jpeg">
</span>

<span class="avatar avatar-large avatar-status avatar-status-null">
  <img src="/assets/img/avatar-01.jpeg">
</span>

<span class="avatar avatar-status avatar-status-null">
  A
</span>

<span class="avatar avatar-small avatar-status avatar-status-off">
  <img src="/assets/img/avatar-02.jpeg">
</span>

<span class="avatar avatar-x-small avatar-status avatar-status-off">
  XS
</span>
{{</example>}}

{{<example>}}
<!-- Status on Square Avatars -->
<span class="avatar avatar-square avatar-x-large avatar-status avatar-status-on">
  <img src="/assets/img/avatar.jpeg">
</span>

<span class="avatar avatar-square avatar-large avatar-status avatar-status-null">
  <img src="/assets/img/avatar-01.jpeg">
</span>

<span class="avatar avatar-square avatar-status avatar-status-null">
  A
</span>

<span class="avatar avatar-square avatar-small avatar-status avatar-status-off">
  <img src="/assets/img/avatar-02.jpeg">
</span>

<span class="avatar avatar-square avatar-x-small avatar-status avatar-status-off">
  XS
</span>
{{</example>}}

## Avatar Box

{{<example>}}
<div class="avatar-box">
  <span class="avatar avatar-status avatar-status-on">
    <img src="/assets/img/avatar-02.jpeg">
  </span>
  <div class="avatar-box-content">
    <div class="avatar-box-content-primary">
      Milton Olaf
    </div>
    <div class="avatar-box-content-secondary">
      Python Lover
    </div>
  </div>
</div>
{{</example>}}

## Avatars Group

{{<example>}}
<!-- Group of same sizes -->
<div class="avatar-group">
  <span class="avatar">
    <img src="/assets/img/avatar-01.jpeg">
  </span>
  <span class="avatar">
    <img src="/assets/img/avatar.jpeg">
  </span>
  <span class="avatar">
    <img src="/assets/img/avatar-02.jpeg">
  </span>
</div>

<!-- Group of differents sizes -->
<div class="avatar-group">
  <span class="avatar avatar-x-small">XS</span>
  <span class="avatar avatar-small">S</span>
  <span class="avatar">M</span>
  <span class="avatar avatar-large">L</span>
  <span class="avatar avatar-x-large">
    <img src="/assets/img/avatar-02.jpeg">
  </span>
</div>
{{</example>}}
