---
layout: default
permalink: menus/
title: Menus
toc: true
---

# Menus

### Default Menu

{% capture example %}
<ul class="menu">
    <li><a href="#" class="active">Active</a></li>
    <li><a href="#" class="disabled">Disabled</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Aligned Menus

#### Centered Menu

{% capture example %}
<ul class="menu center-menu">
    <li><a href="#" class="active">Active</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#" class="disabled">Disabled</a></li>
</ul>
{% endcapture %}
{% include example.html content=example %}

#### Right-aligned Menu

{% capture example %}
<ul class="menu right-menu">
    <li><a href="#" class="active">Active</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#" class="disabled">Disabled</a></li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Navbar

{% capture example %}
<nav class="menu-nav space-between">
    <ul>
        <li><a href="#" class="badge">Below</a></li>
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
    </ul>
    <ul>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Dribble</a></li>
    </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

### Vertical Menu

{% capture example %}
<ul class="menu vertical-menu">
    <a href="#" class="active">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#" class="disabled">Disabled</a>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Tabs

{% capture example %}
<ul class="menu tabs">
    <a href="#" class="active">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#" class="disabled">Disabled</a>
</ul>
{% endcapture %}
{% include example.html content=example %}

#### Vertical

{% capture example %}
<div class="row">
    <div class="col-3">
        <ul class="menu tabs vertical-menu">
            <a href="#" class="active">Active</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#" class="disabled">Disabled</a>
        </ul>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Stacked

{% capture example %}
<ul class="menu stacked">
    <a href="#" class="active">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#" class="disabled">Disabled</a>
</ul>
{% endcapture %}
{% include example.html content=example %}

#### Vertical

{% capture example %}
<div class="row">
    <div class="col-3">
        <ul class="menu stacked vertical-menu">
            <a href="#" class="active">Active</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#" class="disabled">Disabled</a>
        </ul>
    </div>
</div>
{% endcapture %}
{% include example.html content=example %}
