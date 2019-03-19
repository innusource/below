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
  <div class="card-body">
    <div class="h4">Title</div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id. Praesent ante metus, feugiat quis erat eu, auctor dictum tellus.
    </p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Colors Cards
{% capture example %}
<div class="row">
  <div class="col-sm-6">
    <div class="card blue">
      <div class="card-body">
        <div class="h4">Blue Card</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id.
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card green">
      <div class="card-body">
        <div class="h4">Green Card</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id.
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card red">
      <div class="card-body">
        <div class="h4">Red Card</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id.
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card black">
      <div class="card-body">
        <div class="h4">Black Card</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id.
        </p>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Card with image
{% capture example %}
<div class="col-sm-6">
  <div class="card">
    <img src="/assets/img/img.jpeg">
    <div class="card-body">
      <div class="h4">Title</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id. Praesent ante metus, feugiat quis erat eu, auctor dictum tellus.
      </p>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
