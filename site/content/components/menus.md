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
<header class="nav-header only-header">
  <a href="#" class="brand">below</a>
  <nav class="navbar-menu">
    <ul class="navbar-nav">
      <li class="nav-item active"><a href="#" class="nav-link">Active</a></li>
      <li class="nav-item disabled"><a href="#" class="nav-link">Disabled</a></li>
      <li class="nav-item">
        <a href="#" class="nav-link">
          <svg class="icon">
            <use xlink:href="/assets/icons/feather.svg#github"/>
          </svg>
          GitHub
        </a>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <details class="dropdown">
          <summary class="nav-link">
            <span>miltonolaf</span>
            <svg class="icon icon-small">
              <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
            </svg>
          </summary>
          <ul class="dropdown-content">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li class="dropdown-item-separator"></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>
</header>
{{</example>}}

### Sidebar

{{<example>}}
<div class="container-fluid">
<div class="row">
  <label for="sidebar-docs" class="menu-toggle-button">
    <svg class="icon icon-big">
      <use xlink:href="/assets/icons/feather.svg#menu"/>
    </svg>
  </label>
  <input type="checkbox" id="sidebar-docs" role="button" class="menu-toggle">
  <aside class="col-md-3 sidebar">
    <label class="sidebar-overlay" for="sidebar-docs"></label>
    <label for="sidebar-docs" class="menu-toggle-button">
      <svg class="icon icon-big">
        <use xlink:href="/assets/icons/feather.svg#arrow-left"/>
      </svg>
    </label>
    <nav class="navbar-menu">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a href="#" class="nav-link">
            <svg class="icon icon-left">
              <use xlink:href="/assets/icons/feather.svg#home"/>
            </svg>
            Dashboard
          </a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <div class="nav-title">Content</div>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg class="icon icon-left">
              <use xlink:href="/assets/icons/feather.svg#list"/>
            </svg>
            Pages
          </a>
        </li>
        <li class="nav-item">
          <details class="folding folding-borderless">
            <summary class="nav-link folding-title">
              <svg class="icon icon-left">
                <use xlink:href="/assets/icons/feather.svg#layers"/>
              </svg>
              Posts
              <svg class="icon icon-right icon-rotate">
                <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
              </svg>
            </summary>
            <div class="folding-content">
              <ul class="navbar-nav">
                <li class="nav-item"><a href="#" class="nav-link">New Post</a></li>
                <li class="nav-item"><a href="#" class="nav-link">All Posts</a></li>
              </ul>
            </div>
          </details>
        </li>
      </ul>
      <ul class="navbar-nav">
        <div class="nav-title">Audience</div>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg class="icon icon-left">
              <use xlink:href="/assets/icons/feather.svg#message-circle"/>
            </svg>
            Messages
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg class="icon icon-left">
              <use xlink:href="/assets/icons/feather.svg#message-square"/>
            </svg>
            Comments
          </a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <div class="nav-title">Store</div>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg class="icon icon-left">
              <use xlink:href="/assets/icons/feather.svg#shopping-bag"/>
            </svg>
            Products
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg class="icon icon-left">
              <use xlink:href="/assets/icons/feather.svg#shopping-cart"/>
            </svg>
            Sales
          </a>
        </li>
        <li class="nav-item disabled">
          <a href="#" class="nav-link">
            <svg class="icon icon-left">
              <use xlink:href="/assets/icons/feather.svg#clock"/>
            </svg>
            Disabled
          </a>
        </li>
      </ul>
      <!-- navbar at bottom of sidebar -->
      <ul class="navbar-nav navbar-nav-bottom">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg class="icon icon-left">
              <use xlink:href="/assets/icons/feather.svg#settings"/>
            </svg>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  </aside>
  <div class="col-md-9">
    <h5>Dashboard</h5>
  </div>
</div>
</div>
{{</example>}}

### Navbar & Sidebar

{{<example>}}
<header class="nav-header">
  <a class="brand" href="/">below</a>
  <nav class="navbar-menu">
    <form class="form"><input class="form-control" type="text" placeholder="Search..."></form>
    <ul class="navbar-nav">
      <li class="nav-item">
        <details class="dropdown">
          <summary class="nav-link">
            <span>miltonolaf</span>
            <svg class="icon icon-small">
              <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
            </svg>
          </summary>
          <ul class="dropdown-content">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li class="dropdown-item-separator"></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>
</header>
<div class="container-fluid">
  <div class="row">
    <label for="sidebar-docs" class="menu-toggle-button">
      <svg class="icon icon-big">
        <use xlink:href="/assets/icons/feather.svg#menu"/>
      </svg>
    </label>
    <input type="checkbox" id="sidebar-docs" role="button" class="menu-toggle">
    <aside class="sidebar col-12 col-md-3 col-xl-3">
      <label class="sidebar-overlay" for="sidebar-docs"></label>
      <label for="sidebar-docs" class="menu-toggle-button">
        <svg class="icon icon-big">
          <use xlink:href="/assets/icons/feather.svg#arrow-left"/>
        </svg>
      </label>
      <nav class="navbar-menu">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a href="#" class="nav-link">
              <svg class="icon icon-left">
                <use xlink:href="/assets/icons/feather.svg#home"/>
              </svg>
              Dashboard
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <div class="nav-title">Content</div>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="icon icon-left">
                <use xlink:href="/assets/icons/feather.svg#list"/>
              </svg>
              Pages
            </a>
          </li>
          <li class="nav-item">
            <details class="folding folding-borderless">
              <summary class="nav-link folding-title">
                <svg class="icon icon-left">
                  <use xlink:href="/assets/icons/feather.svg#layers"/>
                </svg>
                Posts
                <svg class="icon icon-right icon-rotate">
                  <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
                </svg>
              </summary>
              <div class="folding-content">
                <ul class="navbar-nav">
                  <li class="nav-item"><a href="#" class="nav-link">New Post</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">All Posts</a></li>
                </ul>
              </div>
            </details>
          </li>
        </ul>
        <ul class="navbar-nav">
          <div class="nav-title">Audience</div>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="icon icon-left">
                <use xlink:href="/assets/icons/feather.svg#message-circle"/>
              </svg>
              Messages
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="icon icon-left">
                <use xlink:href="/assets/icons/feather.svg#message-square"/>
              </svg>
              Comments
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <div class="nav-title">Store</div>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="icon icon-left">
                <use xlink:href="/assets/icons/feather.svg#shopping-bag"/>
              </svg>
              Products
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="icon icon-left">
                <use xlink:href="/assets/icons/feather.svg#shopping-cart"/>
              </svg>
              Sales
            </a>
          </li>
          <li class="nav-item disabled">
            <a href="#" class="nav-link">
              <svg class="icon icon-left">
                <use xlink:href="/assets/icons/feather.svg#clock"/>
              </svg>
              Disabled
            </a>
          </li>
        </ul>
        <!-- navbar at bottom of sidebar -->
        <ul class="navbar-nav navbar-nav-bottom">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg class="icon icon-left">
                <use xlink:href="/assets/icons/feather.svg#settings"/>
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="col-12 col-md-9 col-xl-9">
      <h5>Dashboard</h5>
    </div>
  </div>
</div>
{{</example>}}
