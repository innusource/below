---
layout: default
permalink: menus/
title: Menus
toc: true
---

# Menus

### Default Menu

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
<nav class="menu center">
    <a class="active" href="#">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a class="disabled" href="#">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

#### Right-aligned Menu

{% capture example %}
<nav class="menu right">
    <a class="active" href="#">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a class="disabled" href="#">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}


### Vertical Menu

{% capture example %}
<nav class="menu vertical">
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
        <nav class="menu tabs vertical">
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
        <nav class="menu stacked vertical">
            <a class="active" href="#">Active</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a class="disabled" href="#">Disabled</a>
        </nav>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}
