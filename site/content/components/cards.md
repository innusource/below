---
layout: docs
title: Cards
menu:
  main:
    parent: Components
toc: true
---

## Default
{{<example>}}
<div class="col-md-8">
  <div class="card">
    <div class="card-header">
      <div class="card-title">
        <svg class="icon icon-big"><use xlink:href="/assets/icons/feather.svg#inbox"/></svg>
        Messages
      </div>
      <details class="dropdown">
        <summary>
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#more-vertical"/>
          </svg>
        </summary>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">First item</a></li>
          <li><a class="dropdown-item" href="#">Second item</a></li>
          <li><a class="dropdown-item" href="#">Third item</a></li>
        </ul>
      </details>
    </div>
    <div class="card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id. Praesent ante metus, feugiat quis erat eu, auctor dictum tellus.
      </p>
    </div>
    <div class="card-footer">
      <button class="btn">Add</button>
      <button class="btn btn-error">Delete</button>
    </div>
  </div>
</div>
{{</example>}}


## Card with Image
{{<example>}}
<div class="col-md-8">
  <div class="card">
    <div class="tag tag-absolute">
      User Experience
    </div>
    <img src="/assets/img/img.jpeg">
    <div class="card-header">
      <div class="card-title">Title</div>
    </div>
    <div class="card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem.
      </p>
    </div>
    <div class="card-footer">
      <div class="avatar-group">
        <span class="avatar avatar-small">
          <img src="/assets/img/avatar-01.jpeg">
        </span>
        <span class="avatar avatar-small">
          <img src="/assets/img/avatar.jpeg">
        </span>
        <span class="avatar avatar-small">R</span>
        <span class="avatar avatar-small">
          <img src="/assets/img/avatar-02.jpeg">
        </span>
      </div>
      <button class="btn">Read <svg class="icon"><use xlink:href="/assets/icons/feather.svg#plus"/></svg></button>
    </div>
  </div>
</div>
{{</example>}}
