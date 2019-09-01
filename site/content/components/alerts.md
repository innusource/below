---
layout: docs
title: Alerts
menu:
  main:
    parent: Components
toc: true
---

## Default

{{<example>}}
<div class="alert">
  <div class="alert-content">
    <div class="alert-title">
      Downloading...
    </div>
    <div class="alert-description">
      Your download is being processed...
    </div>
  </div>
</div>
{{</example>}}

## Types
{{<example>}}
<!-- Success Alert -->
<div class="alert alert-success">
  <div class="alert-content">
    <div class="alert-title">
      Success!
    </div>
    <div class="alert-description">
      Your message was sent
    </div>
  </div>
</div>

<!-- Info Alert -->
<div class="alert alert-info">
  <div class="alert-content">
    <div class="alert-title">
      Info
    </div>
    <div class="alert-description">
      Your calendar is up to date.
    </div>
  </div>
</div>

<!-- Warning Alert -->
<div class="alert alert-warning">
  <div class="alert-content">
    <div class="alert-title">
      Warning!
    </div>
    <div class="alert-description">
      Are you sure to continue?
    </div>
  </div>
</div>

<!-- Error Alert -->
<div class="alert alert-error">
  <div class="alert-content">
    <div class="alert-title">
      Error!
    </div>
    <div class="alert-description">
      Incorrect password
    </div>
  </div>
</div>
{{</example>}}

## Alert Item

There is the <code>.alert-item</code> class to put extra content like avatars or icons.

{{<example>}}
<!-- Alert with avatar -->
<div class="alert">
  <div class="alert-item">
    <span class="avatar avatar-small">
      <img src="/assets/img/avatar-02.jpeg">
    </span>
  </div>
  <div class="alert-content">
    <div class="alert-title">
      New commits
    </div>
    <div class="alert-description">
      2 new commits to below
    </div>
  </div>
</div>

<!-- Alert with icon -->
<div class="alert">
  <div class="alert-item">
    <svg class="icon"><use xlink:href="/assets/icons/feather.svg#git-pull-request"/></svg>
  </div>
  <div class="alert-content">
    <div class="alert-title">
      Pull request.
    </div>
    <div class="alert-description">
      New pull request on your respository
    </div>
  </div>
</div>
{{</example>}}

## Dismissible Alert

Below uses <code>&lt;details&gt;</code> tag to make dismissible alerts.

{{<example>}}
<!-- Dismissible Default Alert with Avatar Small -->
<details class="alert alert-info" open>
  <summary>
    <div class="alert-close">
      <svg class="icon"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
    </div>
  </summary>
  <div class="alert-item">
    <span class="avatar avatar-small">
      <img src="/assets/img/avatar-02.jpeg">
    </span>
  </div>
  <div class="alert-content">
    <div class="alert-title">
      New comment
    </div>
    <div class="alert-description">
      You have been mentioned in a comment
    </div>
  </div>
</details>

<!-- Dismissible Success Alert -->
<details class="alert alert-success" open>
  <summary>
    <div class="alert-close">
      <svg class="icon"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
    </div>
  </summary>
  <div class="alert-item">
    <svg class="icon"><use xlink:href="/assets/icons/feather.svg#paperclip"/></svg>
  </div>
  <div class="alert-content">
    <div class="alert-title">
      Attached File.
    </div>
    <div class="alert-description">
      You have attached 3 files
    </div>
  </div>
</details>
{{</example>}}
