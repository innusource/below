---
layout: docs
title: Foldings
parent: Components
toc: true
---

## Default

{% capture example %}
<details class="folding">
  <summary class="folding-title">
    Folding
    <svg class="icon"><use xlink:href="/assets/icons/feather.svg#chevron-down"/></svg>
  </summary>
  <div class="folding-content">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.
    </p>
  </div>
</details>
{% endcapture %}
{% include example.html content=example %}

## Folding Group

{% capture example %}
<div class="folding-group">

  <details class="folding">
    <summary class="folding-title">
      First Folding
      <svg class="icon"><use xlink:href="/assets/icons/feather.svg#chevron-down"/></svg>
    </summary>
    <div class="folding-content">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.
      </p>
    </div>
  </details>

  <details class="folding">
    <summary class="folding-title">
      Second Folding
      <svg class="icon"><use xlink:href="/assets/icons/feather.svg#chevron-down"/></svg>
    </summary>
    <div class="folding-content">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.
      </p>
    </div>
  </details>

  <details class="folding">
    <summary class="folding-title">
      Third Folding
      <svg class="icon"><use xlink:href="/assets/icons/feather.svg#chevron-down"/></svg>
    </summary>
    <div class="folding-content">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.
      </p>
    </div>
  </details>

</div>
{% endcapture %}
{% include example.html content=example %}
