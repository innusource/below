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
<button class="btn">Default</button>
<button class="btn btn-green">Green Button</button>
<button class="btn btn-blue">Blue Button</button>
<button class="btn btn-red">Red Button</button>
<button class="btn btn-black">Black</button>
{% endcapture %}
{% include example.html content=example %}
