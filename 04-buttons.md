---
layout: default
permalink: buttons/
title: Buttons
toc: true
---

# Buttons

### Styles

{% capture example %}
<a class="btn simple">Simple</a>
<a class="btn">Default</a>
<a class="btn rounded">Rounded</a>
<a class="btn super-rounded">Super Rounded</a>
<a class="btn circle"><span>Circle Button</span></a>
{% endcapture %}
{% include example.html content=example %}

### Sizes

{% capture example %}
<a class="btn">By Default</a>
<a class="btn medium">Medium</a>
<a class="btn big">Big Button</a>
{% endcapture %}
{% include example.html content=example %}

#### Sizes for circle button

{% capture example %}
<a class="btn circle"><span>Circle Default</span></a>
<a class="btn circle medium"><span>Circle Medium</span></a>
<a class="btn circle big"><span>Circle Big</span></a>
{% endcapture %}
{% include example.html content=example %}

### Colors
For all color cases (except default): the simple button take class color for text and transparent for background.
{% capture example %}
<a class="btn simple green">Simple Green</a>
<a class="btn">Default</a>
<a class="btn green">Green Button</a>
<a class="btn blue">Blue Button</a>
<a class="btn dark-blue">Dark Blue</a>
<a class="btn yellow">Yellow Button</a>
<a class="btn red">Red Button</a>
<a class="btn black">Black</a>
{% endcapture %}
{% include example.html content=example %}

### Color's Fill
{% capture example %}
<a class="btn fill">Default</a>
<a class="btn green fill">Green Button</a>
<a class="btn blue fill">Blue Button</a>
<a class="btn dark-blue fill">Dark Blue</a>
<a class="btn yellow fill">Yellow Button</a>
<a class="btn red fill">Red Button</a>
<a class="btn black fill">Black</a>
{% endcapture %}
{% include example.html content=example %}
