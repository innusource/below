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
  <label class="btn" for="modal-01">Open Modal</label>

  <input class="modal-status" id="modal-01" type="checkbox">
  <div class="modal">
    <label class="modal-overlay" for="modal-01"></label>
    <div class="modal-container">
      <div class="modal-header">
        <h4 class="modal-title">Modal Title</h4>
        <label class="modal-close" for="modal-01">
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#x"/>
          </svg>
        </label>
      </div>
      <div class="modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id.
        </p>
      </div>
      <div class="modal-footer">
        <label class="btn btn-clear" for="modal-01">Close</label>
        <a class="btn">Confirm</a>
      </div>
    </div>
  </div>
{{</example>}}

## Sizes

{{<example>}}
  <label class="btn" for="modal-02">Open Small Modal</label>

  <input class="modal-status" id="modal-02" type="checkbox">
  <div class="modal modal-small">
    <label class="modal-overlay" for="modal-02"></label>
    <div class="modal-container">
      <div class="modal-header">
        <h4 class="modal-title">Modal Title</h4>
        <label class="modal-close" for="modal-02">
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#x"/>
          </svg>
        </label>
      </div>
      <div class="modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id.
        </p>
      </div>
      <div class="modal-footer">
        <label class="btn btn-clear" for="modal-02">Close</label>
        <a class="btn">Confirm</a>
      </div>
    </div>
  </div>

  <label class="btn" for="modal-03">Open Big Modal</label>

  <input class="modal-status" id="modal-03" type="checkbox">
  <div class="modal modal-big">
    <label class="modal-overlay" for="modal-03"></label>
    <div class="modal-container">
      <div class="modal-header">
        <h4 class="modal-title">Modal Title</h4>
        <label class="modal-close" for="modal-03">
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#x"/>
          </svg>
        </label>
      </div>
      <div class="modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id.
        </p>
      </div>
      <div class="modal-footer">
        <label class="btn btn-clear" for="modal-03">Close</label>
        <a class="btn">Confirm</a>
      </div>
    </div>
  </div>
{{</example>}}
