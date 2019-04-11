---
layout: docs
title: Menus
parent: Components
toc: true
---

### Navbar

{% capture example %}
<nav class="navbar">
  <ul>
    <li><a href="#" class="badge">Below</a></li>
    <li><form class="form"><input type="text" placeholder="Search..."></form></li>
  </ul>
  <ul>
    <li><a href="#" class="active">Docs</a></li>
    <li><a href="#">About</a></li>
    <li>
      <a href="#">
        <svg class="icon">
          <use xlink:href="/assets/icons/feather.svg#github"/>
        </svg>
      </a>
    </li>
    <li>
      <details class="dropdown">
        <summary class="btn btn-clear">
          <span>miltonolaf</span>
          <svg class="icon icon-small">
            <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
          </svg>
        </summary>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li class="dropdown-item-separator"></li>
          <li><a class="dropdown-item" href="#">Logout</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

### Sidebar

{% capture example %}
<div class="row">
  <div class="col-3 sidebar">
    <ul>
      <li><a href="#" class="badge">Below</a></li>
      <li><a href="#">Pages</a></li>
      <li>
        <details class="folding folding-borderless">
          <summary class="folding-title">
            Posts
            <svg class="icon"><use xlink:href="/assets/icons/feather.svg#chevron-down"/></svg>
          </summary>
          <div class="folding-content">
            <ul>
              <li><a href="#">New Post</a></li>
              <li><a href="#">All Posts</a></li>
            </ul>
          </div>
        </details>
      </li>
      <li><a href="#">Comments</a></li>
      <li><a href="#">Appearance</a></li>
    </ul>
  </div>
  <div class="col-9">
    <h5>Content</h5>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Navbar & Sidebar

{% capture example %}
<nav class="navbar">
  <ul>
    <li><a href="#" class="badge">Below</a></li>
    <li><form class="form"><input type="text" placeholder="Search..."></form></li>
  </ul>
  <ul>
    <li><a href="#" class="active">Docs</a></li>
    <li><a href="#">About</a></li>
    <li>
      <a href="#">
        <svg class="icon">
          <use xlink:href="/assets/icons/feather.svg#github"/>
        </svg>
      </a>
    </li>
    <li>
      <details class="dropdown">
        <summary class="btn btn-clear">
          <span>miltonolaf</span>
          <svg class="icon icon-small">
            <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
          </svg>
        </summary>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li class="dropdown-item-separator"></li>
          <li><a class="dropdown-item" href="#">Logout</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>
<div class="container-fluid">
  <div class="row">
    <div class="col-3 sidebar">
      <ul>
        <li><a href="#">Pages</a></li>
        <li>
          <details class="folding folding-borderless">
            <summary class="folding-title">
              Posts
              <svg class="icon">
                <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
              </svg>
            </summary>
            <div class="folding-content">
              <ul>
                <li><a href="#">New Post</a></li>
                <li><a href="#">All Posts</a></li>
              </ul>
            </div>
          </details>
        </li>
        <li><a href="#">Comments</a></li>
        <li><a href="#">Appearance</a></li>
      </ul>
    </div>
    <div class="col-9">
      <h5>Content</h5>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Tabs

{% capture example %}
<nav class="nav-tabs">
  <ul>
    <a href="#" class="active">Active</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#" class="disabled">Disabled</a>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}
