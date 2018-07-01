---
layout: default
permalink: typography/
title: Typography
toc: true
---

# Typography

### Headings
{% capture example %}
<h1>Title h1</h1>
<h2>Title h2</h2>
<h3>Title h3</h3>
<h4>Title h4</h4>
<h5>Title h5</h5>
<h6>Title h6</h6>
{% endcapture %}
{% include example.html content=example %}

### Paragraph
{% capture example %}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sem aliquam, iaculis neque in, aliquet lorem. Mauris tristique iaculis dui, at tempus dolor vulputate id.</p>
{% endcapture %}
{% include example.html content=example %}

### Lists
#### Remove default style
{% capture example %}
<ul class="list clean">
<li>First element</li>
<li>Second element</li>
<li>Third element</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

#### Inline Lists
{% capture example %}
<ul class="list inline">
<li>First element</li>
<li>Second element</li>
<li>Third element</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Blockquotes
{% capture example %}
<blockquote>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
</blockquote>
{% endcapture %}
{% include example.html content=example %}
