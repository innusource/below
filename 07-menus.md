---
layout: default
permalink: menus/
title: Menus
toc: true
---

# Menus

### Menu

{% capture example %}
<nav class="menu">
    <a class="active" href="#">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a class="disabled" href="#">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

### Aligned Menus

#### Centered Menu

{% capture example %}
<nav class="menu center-menu">
    <a class="active" href="#">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a class="disabled" href="#">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

#### Right-aligned Menu

{% capture example %}
<nav class="menu right-menu">
    <a class="active" href="#">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a class="disabled" href="#">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}


### Vertical Menu

{% capture example %}
<nav class="menu vertical-menu">
    <a class="active" href="#">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a class="disabled" href="#">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

### Tabs

{% capture example %}
<nav class="menu tabs">
    <a class="active" href="#">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a class="disabled" href="#">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

#### Vertical

{% capture example %}
<div class="row">
    <div class="col-3">
        <nav class="menu tabs vertical-menu">
            <a class="active" href="#">Active</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a class="disabled" href="#">Disabled</a>
        </nav>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Stacked

{% capture example %}
<nav class="menu stacked">
    <a class="active" href="#">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a class="disabled" href="#">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

#### Vertical

{% capture example %}
<div class="row">
    <div class="col-3">
        <nav class="menu stacked vertical-menu">
            <a class="active" href="#">Active</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a class="disabled" href="#">Disabled</a>
        </nav>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}
