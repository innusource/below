---
layout: docs
title: Dropdowns
parent: Components
toc: true
---

## Default

{% capture example %}
<details class="dropdown">
  <summary class="btn">
    Dropdown
  </summary>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{% endcapture %}
{% include example.html content=example %}

### Dropup
{% capture example %}
<details class="dropdown">
  <summary class="btn">
    Dropup
  </summary>
  <ul class="dropdown-menu dropdown-menu-up">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{% endcapture %}
{% include example.html content=example %}

### Dropright

{% capture example %}
<details class="dropdown">
  <summary>
    <a class="dropdown-item" class="btn">Dropright</a>
  </summary>
  <ul class="dropdown-menu dropdown-menu-rt">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{% endcapture %}
{% include example.html content=example %}

### Dropleft

{% capture example %}
<details class="dropdown">
  <summary>
    <a class="dropdown-item" class="btn">Dropleft</a>
  </summary>
  <ul class="dropdown-menu dropdown-menu-lt">
    <li><a class="dropdown-item" href="#">First item</a></li>
    <li><a class="dropdown-item" href="#">Second item</a></li>
    <li><a class="dropdown-item" href="#">Third item</a></li>
  </ul>
</details>
{% endcapture %}
{% include example.html content=example %}
