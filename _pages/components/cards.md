---
layout: docs
title: Cards
parent: Components
toc: true
---

# Cards

### Default
{% capture example %}
<div class="card">
  <div class="card-header">
    <div class="card-title">
      <svg class="icon icon-big"><use xlink:href="/assets/icons/feather.svg#activity"/></svg>
      Reports
      <span class="card-subtitle">
        10 pending
      </span>
    </div>
    <details class="details">
      <summary>
        <svg class="icon"><use xlink:href="/assets/icons/feather.svg#more-vertical"/></svg>
      </summary>
      <ul>
        <li><a><svg class="icon icon-small"><use xlink:href="/assets/icons/feather.svg#trash"/></svg> Delete</a></li>
      </ul>
    </details>
  </div>
  <div class="card-body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id. Praesent ante metus, feugiat quis erat eu, auctor dictum tellus.
    </p>
  </div>
  <div class="card-footer">
    <button class="btn btn-rounded">Rounded</button>
    <button class="btn btn-rounded btn-red">Rounded</button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


### Card with image
{% capture example %}
<div class="col-sm-6">
  <div class="card">
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
      <button class="btn btn-rounded">Rounded</button>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
