---
layout: docs
title: Menus
menu:
  main:
    parent: Components
toc: true
---

### Navbar

{{<example>}}
<nav class="navbar">
  <a href="#" class="brand">Below</a>
  <div class="navbar-scroll">
    <ul class="menu-responsive">
    <li class="active"><a href="#">Docs</a></li>
    <li><a href="#">About</a></li>
    <li class="disabled"><a href="#">Disabled</a></li>
    <li>
      <a href="#">
        <svg class="icon">
          <use xlink:href="/assets/icons/feather.svg#github"/>
        </svg>
        GitHub
      </a>
    </li>
    <li><form class="form"><input type="text" placeholder="Search..."></form></li>
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
  </div>
</nav>
{{</example>}}

### Sidebar

{{<example>}}
<div class="row">
  <div class="col-md-3 sidebar">
    <a href="#" class="brand">Below</a>
    <label for="example-01" class="menu-toggle-button">
      <svg class="icon">
        <use xlink:href="/assets/icons/feather.svg#menu"/>
      </svg>
    </label>
    <input type="checkbox" id="example-01" role="button" class="menu-toggle">
    <ul class="folding-menu">
      <li>
      <a href="#">
        <svg class="icon">
          <use xlink:href="/assets/icons/feather.svg#list"/>
        </svg>
        Pages
        </a>
      </li>
      <li>
        <details class="folding folding-borderless">
          <summary class="folding-title">
            <svg class="icon">
              <use xlink:href="/assets/icons/feather.svg#layers"/>
            </svg>
            Posts
            <svg class="icon icon-right icon-rotate">
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
      <li>
        <a href="#">
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#message-circle"/>
          </svg>
          Comments
        </a>
      </li>
      <li>
        <a href="#">
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#settings"/>
          </svg>
          Appearance
        </a>
      </li>
      <li class="disabled">
        <a href="#">
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#clock"/>
          </svg>
          Disabled
        </a>
      </li>
    </ul>
  </div>
  <div class="col-md-9">
    <h5>Content</h5>
  </div>
</div>
{{</example>}}

### Navbar & Sidebar

{{<example>}}
<nav class="navbar">
  <a href="#" class="brand">Below</a>
  <div class="navbar-scroll">
    <ul class="menu-responsive">
      <li class="active"><a href="#">Docs</a></li>
      <li><a href="#">About</a></li>
      <li class="disabled"><a href="#">Disabled</a></li>
      <li>
        <a href="#">
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#github"/>
          </svg>
        </a>
      </li>
      <li><form class="form"><input type="text" placeholder="Search..."></form></li>
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
  </div>
</nav>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-3 sidebar">
      <label for="example-02" class="menu-toggle-button">
        <svg class="icon">
          <use xlink:href="/assets/icons/feather.svg#menu"/>
        </svg>
      </label>
      <input type="checkbox" id="example-02 role="button" class="menu-toggle">
      <ul class="folding-menu">
        <li>
        <a href="#">
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#list"/>
          </svg>
          Pages
          </a>
        </li>
        <li>
          <details class="folding folding-borderless">
            <summary class="folding-title">
              <svg class="icon">
                <use xlink:href="/assets/icons/feather.svg#layers"/>
              </svg>
              Posts
              <svg class="icon icon-right icon-rotate">
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
        <li>
          <a href="#">
            <svg class="icon">
              <use xlink:href="/assets/icons/feather.svg#message-circle"/>
            </svg>
            Comments
          </a>
        </li>
        <li>
          <a href="#">
            <svg class="icon">
              <use xlink:href="/assets/icons/feather.svg#settings"/>
            </svg>
            Appearance
          </a>
        </li>
        <li class="disabled">
          <a href="#">
            <svg class="icon">
              <use xlink:href="/assets/icons/feather.svg#clock"/>
            </svg>
            Disabled
          </a>
        </li>
      </ul>
    </div>
    <div class="col-md-9">
      <h5>Content</h5>
    </div>
  </div>
</div>
{{</example>}}
