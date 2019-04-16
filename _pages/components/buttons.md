---
layout: docs
title: Buttons
parent: Components
toc: true
---

### Types

{% capture example %}
<button class="btn">Default</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-disabled">Disabled</button>
<button class="btn btn-clear">Clear</button>
<button class="btn">Icon
  <svg class="icon icon-small">
    <use xlink:href="/assets/icons/feather.svg#aperture"/>
  </svg>
</button>
{% endcapture %}
{% include example.html content=example %}

### Sizes

{% capture example %}
<button class="btn">By Default</button>
<button class="btn btn-medium">Medium</button>
<button class="btn btn-big">Big Button</button>
{% endcapture %}
{% include example.html content=example %}

### Colors

For all color cases (except default): the simple button take class color for text and transparent for background.
{% capture example %}
<button class="btn">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-error">Error</button>
<button class="btn btn-succes">Succes</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info/Help</button>
{% endcapture %}
{% include example.html content=example %}
