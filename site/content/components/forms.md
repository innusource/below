---
layout: docs
title: Forms
menu:
  main:
    parent: Components
toc: true
---

## Default Form

Use the <code>.form-control</code> class to give properties to forms elements. By default this class give <code>width: 100%;</code> to the elements.

{{<example>}}
<form class="form">
  <legend>A default form</legend>
  <input class="form-control" type="email" placeholder="Email">
  <input class="form-control" type="password" placeholder="Password">
  <div class="form-group">
    <!--  Checkbox -->
    <label for="remember" class="form-input-checkbox">
      <input class="form-control" id="remember" type="checkbox">
      <span class="checkbox-control"></span> Remember me
    </label>
  </div>
  <button type="submit" class="btn">Sign in</button>
</form>
{{</example>}}

## Inline Form

{{<example>}}
<form class="form">
  <legend>A inline form</legend>
  <div class="form-row">
    <div class="col-6 col-md-4">
      <input class="form-control" type="email" placeholder="Email">
    </div>
    <div class="col-6 col-md-4">
      <input class="form-control" type="password" placeholder="Password">
    </div>
    <div class="col-4">
      <button type="submit" class="btn btn-small">Sign in</button>
    </div>
  </div>
</form>
{{</example>}}

## Form Group
Use <code>.form-group</code> to give <code>margin: 0.25em 0;</code> to a group of forms elements.

{{<example>}}
<form class="form">

  <!-- Upper input group -->
  <div class="form-group form-row">
    <div class="col-6">
      <input class="form-control" type="text" placeholder="Username">
    </div>
    <div class="col-6">
      <input class="form-control" type="text" placeholder="Password">
    </div>
    <div class="col">
      <input class="form-control" type="email" placeholder="Email">
    </div>
  </div>

  <!-- Lower input group -->
  <div class="form-group form-row">
    <div class="col-4">
      <input class="form-control" type="text" placeholder="A title">
    </div>
    <div class="col-8">
      <textarea class="form-control" placeholder="Textareas work too"></textarea>
    </div>
  </div>

  <button type="submit" class="btn">Sign in</button>
</form>
{{</example>}}

## Stacked Form

{{<example>}}
<form class="form">
  <div class="col-md-4">
    <legend>A Stacked Form</legend>

    <!-- "Email" input -->
    <label for="email">Email</label>
    <input class="form-control" id="email" type="email" placeholder="Email">
    <span class="form-message">This is a required field.</span>
  </div>

  <div class="col-md-4">
    <!-- Password input -->
    <label for="password">Password</label>
    <input class="form-control" id="password" type="password" placeholder="Password">
  </div>

  <div class="col-md-4">
    <!-- Select input  -->
    <label for="state">State</label>
    <div class="form-control">
      <select class="select" id="state">
        <option>AL</option>
        <option>CA</option>
        <option>IL</option>
      </select>
      <svg class="icon">
        <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
      </svg>
    </div>
  </div>

  <div class="col-4">
    <!-- Checkbox input -->
    <label for="remember-two" class="form-input-checkbox">
      <input class="form-control" id="remember-two" type="checkbox" value="">
      <span class="checkbox-control"></span> Remember me
    </label>
  </div>

  <button type="submit" class="btn">Sign in</button>
</form>
{{</example>}}

## Aligned Form

{{<example>}}
<form class="form">
  <!-- Username input -->
  <div class="form-group form-row">
    <label class="col-sm-2" for="name">Username</label>
    <div class="col-sm-10">
      <input class="form-control" id="name" type="text" placeholder="Username">
      <span class="form-message">This is a required field.</span>
    </div>
  </div>

  <!-- Password input -->
  <div class="form-group form-row">
    <label class="col-sm-2" for="password">Password</label>
    <div class="col-sm-10">
      <input class="form-control" id="password" type="password" placeholder="Password">
    </div>
  </div>

  <!-- Email input -->
  <div class="form-group form-row">
    <label class="col-sm-2" for="email">Email Address</label>
    <div class="col-sm-10">
      <input class="form-control" id="email" type="email" placeholder="Email Address">
    </div>
  </div>

  <!-- Input -->
  <div class="form-group form-row">
    <label class="col-sm-2" for="foo">Supercalifragilistic Label</label>
    <div class="col-sm-10">
      <input class="form-control" id="foo" type="text" placeholder="Enter something here...">
      <label for="conditions" class="form-input-checkbox">
        <input class="form-control" id="conditions" type="checkbox" value="">
        <span class="checkbox-control"></span> I've read the terms and conditions
      </label>
      <button type="submit" class="btn">Submit</button>
    </div>
  </div>
</form>
{{</example>}}

## Select
{{<example>}}
<form class="form">
  <!-- Select input -->
  <div class="form-control">
    <select class="select">
      <option value="one">Value one</option>
      <option value="two">Value two</option>
    </select>
    <svg class="icon">
      <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
    </svg>
  </div>
</form>
{{</example>}}

## Inputs

### Checkbox

{{<example>}}
<form class="form">
  <!-- First checkbox -->
  <label for="option-one" class="form-input-checkbox">
    <input id="option-one" type="checkbox">
    <span class="checkbox-control"></span>
    Here's option one
  </label>

  <!-- Second checkbox -->
  <label for="option-two" class="form-input-checkbox">
    <input id="option-two" type="checkbox">
    <span class="checkbox-control"></span>
    And option two
  </label>
</form>
{{</example>}}

#### Inline Checkbox

{{<example>}}
<form class="form">
  <!-- First checkbox -->
  <label for="inline-option-one" class="form-input-checkbox-inline">
    <input id="inline-option-one" type="checkbox">
    <span class="checkbox-control"></span>
    Here's option one
  </label>

  <!-- Second checkbox -->
  <label for="inline-option-two" class="form-input-checkbox-inline">
    <input id="inline-option-two" type="checkbox">
    <span class="checkbox-control"></span>
    And option two
  </label>
</form>
{{</example>}}

### Radios
{{<example>}}
<form class="form">
  <!-- First radio -->
  <label for="option-radio-one" class="form-input-radio">
    <input id="option-radio-one" type="radio" name="radio" checked>
    <span class="radio-control"></span>
    You can choose this one..
  </label>

  <!-- Second radio -->
  <label for="option-radio-two" class="form-input-radio">
    <input id="option-radio-two" type="radio" name="radio">
    <span class="radio-control"></span>
    Or this one!
  </label>

  <!-- Last radio -->
  <label for="inline-option-radio-three" class="form-input-radio">
    <input id="inline-option-radio-three" type="radio" name="radio">
    <span class="radio-control"></span>
    Or maybe this one
  </label>
</form>
{{</example>}}

#### Inline Radios

{{<example>}}
<form class="form">
  <!-- First radio -->
  <label for="inline-option-radio-one" class="form-input-radio-inline">
    <input id="inline-option-radio-one" type="radio" name="radio" checked>
    <span class="radio-control"></span>
    You can choose this one..
  </label>

  <!-- Second radio -->
  <label for="inline-option-radio-two" class="form-input-radio-inline">
    <input id="inline-option-radio-two" type="radio" name="radio">
    <span class="radio-control"></span>
    Or this one!
  </label>

  <!-- Last radio -->
  <label for="option-radio-three" class="form-input-radio-inline">
    <input id="option-radio-three" type="radio" name="radio">
    <span class="radio-control"></span>
    Or maybe this one
  </label>
</form>
{{</example>}}

### File Input
{{<example>}}
<form class="form">
  <!-- File input -->
  <input type="file" id="file-input">
  <label for="file-input" class="form-input-file">
    Choose a file
    <svg class="icon"><use xlink:href="/assets/icons/feather.svg#upload"/></svg>
  </label>
</form>
{{</example>}}

### Input with Button
{{<example>}}
<form class="form">
  <!-- Search input -->
  <div class="form-control">
    <input class="form-input-btn" type="search" placeholder="Search...">
    <button type="button" class="btn-input">
      <svg class="icon"><use xlink:href="/assets/icons/feather.svg#search"/></svg>
    </button>
  </div>
</form>
{{</example>}}

### Required inputs

{{<example>}}
<form class="form">
  <input class="form-control" type="email" placeholder="Requires an email" required>
</form>
{{</example>}}

### Disabled inputs

{{<example>}}
<form class="form">
  <input class="form-control" type="text" placeholder="Disabled input here..." disabled>
</form>
{{</example>}}

### Read-Only inputs

{{<example>}}
<form class="form">
  <input class="form-control" type="text" value="Readonly input here..." readonly>
</form>
{{</example>}}
