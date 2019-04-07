---
layout: docs
title: Headings
parent: Content
toc: true
---

## Headings
{% capture example %}
<h1>Title h1 <small>Lorem ipsum dolor sit amet.</small></h1>
<div class="heading-02">Title h2 <small>Lorem ipsum dolor sit amet.</small></div>
<div class="heading-03">Title h3 <small>Lorem ipsum dolor sit amet.</small></div>
<div class="heading-04">Title h4 <small>Lorem ipsum dolor sit amet.</small></div>
<h5>Title h5 <small>Lorem ipsum dolor sit amet.</small></h5>
<h6>Title h6 <small>Lorem ipsum dolor sit amet</small></h6>
{% endcapture %}
{% include example.html content=example %}