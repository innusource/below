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
  <ul>
    <li><a href="#" class="brand">Below</a></li>
    <li><form class="form"><input type="text" placeholder="Search..."></form></li>
  </ul>
  <ul>
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
{{</example>}}

### Sidebar

{{<example>}}
<div class="row">
  <div class="col-3 sidebar">
    <ul>
      <li><a href="#" class="brand">Below</a></li>
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
        <a href="#"">
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#clock"/>
          </svg>
          Disabled
        </a>
      </li>
    </ul>
  </div>
  <div class="col-9">
    <h5>Content</h5>
  </div>
</div>
{{</example>}}

### Navbar & Sidebar

{{<example>}}
<nav class="navbar">
  <ul>
    <li><a href="#" class="brand">Below</a></li>
    <li><form class="form"><input type="text" placeholder="Search..."></form></li>
  </ul>
  <ul>
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
    <div class="col-9">
      <h5>Content</h5>
    </div>
  </div>
</div>
{{</example>}}
