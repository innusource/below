---
layout: docs
title: Modals
menu:
  main:
    parent: Components
toc: true
---

## Default

{{<example>}}
<a class="btn" href="#modal">Open Modal</a>

<div id="modal" class="modal">
  <a class="modal-overlay" href="#"></a>
  <div class="modal-container">
    <div class="modal-header">
      <h4 class="modal-title">Default Modal Title</h4>
      <a class="modal-close" href="#">
        <svg class="icon">
          <use xlink:href="/assets/icons/feather.svg#x"/>
        </svg>
      </a>
    </div>
    <div class="modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id. Praesent ante metus, feugiat quis erat eu, auctor dictum tellus.
      </p>
    </div>
    <div class="modal-footer">
      <a href="#" class="btn btn-clear">Close</a>
      <a class="btn">Confirm</a>
    </div>
  </div>
</div>
{{</example>}}

## Sizes

{{<example>}}
<a class="btn" href="#modal-small">Open Small Modal</a>

<div id="modal-small" class="modal modal-small">
  <a class="modal-overlay" href="#"></a>
  <div class="modal-container">
    <div class="modal-header">
      <h4 class="modal-title">Small Modal Title</h4>
      <a class="modal-close" href="#">
        <svg class="icon">
          <use xlink:href="/assets/icons/feather.svg#x"/>
        </svg>
      </a>
    </div>
    <div class="modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id.
      </p>
    </div>
    <div class="modal-footer">
      <a href="#" class="btn btn-clear">Close</a>
      <a class="btn">Confirm</a>
    </div>
  </div>
</div>

<a class="btn" href="#modal-big">Open Big Modal</a>

<div id="modal-big" class="modal modal-big">
  <a class="modal-overlay" href="#"></a>
  <div class="modal-container">
    <div class="modal-header">
      <h4 class="modal-title">Big Modal Title</h4>
      <a class="modal-close" href="#">
        <svg class="icon">
          <use xlink:href="/assets/icons/feather.svg#x"/>
        </svg>
      </a>
    </div>
    <div class="modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id. Praesent ante metus, feugiat quis erat eu, auctor dictum tellus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id. Praesent ante metus, feugiat quis erat eu, auctor dictum tellus.
      </p>
    </div>
    <div class="modal-footer">
      <a href="#" class="btn btn-clear">Close</a>
      <a class="btn">Confirm</a>
    </div>
  </div>
</div>
{{</example>}}
