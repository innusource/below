---
layout: default
permalink: buttons/
title: Buttons
toc: true
---

# Buttons

### Types

{% capture example %}
<button class="btn btn-btn-simple">Simple</button>
<button class="btn">Default</button>
<button class="btn btn-disabled">Disabled</button>
<button class="btn btn-round">Rounded</button>
<button class="btn btn-super-round">Super Rounded</button>
<button class="btn btn-circle"><span>Circle Button</span></button>
{% endcapture %}
{% include example.html content=example %}

### Sizes

{% capture example %}
<button class="btn">By Default</button>
<button class="btn btn-medium">Medium</button>
<button class="btn btn-big">Big Button</button>
{% endcapture %}
{% include example.html content=example %}

#### Sizes for circle button

{% capture example %}
<button class="btn btn-circle"><span>Circle Default</span></button>
<button class="btn btn-circle btn-medium"><span>Circle Medium</span></button>
<button class="btn btn-circle btn-big"><span>Circle Big</span></button>
{% endcapture %}
{% include example.html content=example %}

### Colors
For all color cases (except default): the simple button take class color for text and transparent for background.
{% capture example %}
<button class="btn btn-simple btn-green">Simple Green</button>
<button class="btn">Default</button>
<button class="btn btn-green">Green Button</button>
<button class="btn btn-blue">Blue Button</button>
<button class="btn btn-red">Red Button</button>
<button class="btn btn-black">Black</button>
{% endcapture %}
{% include example.html content=example %}

### Color's Fill
{% capture example %}
<button class="btn btn-fill">Default</button>
<button class="btn btn-green btn-fill">Green Button</button>
<button class="btn btn-blue btn-fill">Blue Button</button>
<button class="btn btn-red btn-fill">Red Button</button>
<button class="btn btn-black btn-fill">Black</button>
{% endcapture %}
{% include example.html content=example %}
