---
layout: default
permalink: typography/
title: Typography
toc: true
---

# Typography

### Headings
{% capture example %}
<h1>Title h1 <small>2.8rem</small></h1>
<h2>Title h2 <small>2.5rem</small></h2>
<div class="h3">Title h3 <small>2.2rem</small></div>
<div class="h4">Title h4 <small>1.9rem</small></div>
<h5>Title h5 <small>1.6rem</small></h5>
<h6>Title h6 <small>1.3rem</small></h6>
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
