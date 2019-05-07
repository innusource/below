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
      Your download is processing...
    </div>
  </div>
</div>
{{</example>}}

## Types
{{<example>}}
<div class="alert alert-success">
  <div class="alert-content">
    <div class="alert-title">
      Success!
    </div>
    <div class="alert-description">
      Your message was sent.
    </div>
  </div>
</div>

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

<div class="alert alert-error">
  <div class="alert-content">
    <div class="alert-title">
      Error!
    </div>
    <div class="alert-description">
      Incorrect password.
    </div>
  </div>
</div>
{{</example>}}

## Alert with Icon

{{<example>}}
<div class="alert">
  <svg class="icon"><use xlink:href="/assets/icons/feather.svg#git-pull-request"/></svg>
  <div class="alert-content">
    <div class="alert-title">
      Pull request.
    </div>
    <div class="alert-description">
      New pull request on your respository.
    </div>
  </div>
</div>
{{</example>}}

## Dismissible Alert

{{<example>}}
<details class="alert" open>
  <summary>
    <div class="alert-close">
      <svg class="icon"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
    </div>
  </summary>
  <svg class="icon"><use xlink:href="/assets/icons/feather.svg#paperclip"/></svg>
  <div class="alert-content">
    <div class="alert-title">
      Attached File.
    </div>
    <div class="alert-description">
      You have attached 3 files.
    </div>
  </div>
</details>

<details class="alert alert-success" open>
  <summary>
    <div class="alert-close">
      <svg class="icon"><use xlink:href="/assets/icons/feather.svg#x"/></svg>
    </div>
  </summary>
  <svg class="icon"><use xlink:href="/assets/icons/feather.svg#award"/></svg>
  <div class="alert-content">
    <div class="alert-title">
      Congrats
    </div>
  </div>
</details>
{{</example>}}
