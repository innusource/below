---
layout: docs
title: Forms
menu:
  main:
    parent: Components
toc: true
---

## Default Form

{{<example>}}
<form class="form">
  <fieldset>
    <legend>A compact inline form</legend>

    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">

    <!--  Checkbox -->
    <label for="remember" class="form-input-check">
      <input id="remember" type="checkbox" value="">
      <span class="check-mark"></span> Remember me
    </label>

    <button type="submit" class="btn">Sign in</button>
  </fieldset>
</form>
{{</example>}}

## Stacked Form

{{<example>}}
<form class="form form-stacked">
  <fieldset>
    <legend>A Stacked Form</legend>

    <!-- "Email" input -->
    <label for="email">Email</label>
    <input id="email" type="email" placeholder="Email">
    <span class="form-message">This is a required field.</span>

    <!-- Password input -->
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Password">

    <!-- Select input  -->
    <label for="state">State</label>
    <div class="container-select">
      <select class="select" id="state">
        <option>AL</option>
        <option>CA</option>
        <option>IL</option>
      </select>
      <svg class="icon">
        <use xlink:href="/assets/icons/feather.svg#chevron-down"/>
      </svg>
    </div>

    <!-- Checkbox input -->
    <label for="remember-two" class="form-input-check">
      <input id="remember-two" type="checkbox" value="">
      <span class="check-mark"></span> Remember me
    </label>

    <button type="submit" class="btn">Sign in</button>
  </fieldset>
</form>
{{</example>}}

## Aligned Form

{{<example>}}
<form class="form form-aligned">
  <fieldset>
    <!-- Username input -->
    <div class="form-control-group">
      <label for="name">Username</label>
      <input id="name" type="text" placeholder="Username">
      <span class="form-message-inline">This is a required field.</span>
    </div>

    <!-- Password input -->
    <div class="form-control-group">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="Password">
    </div>

    <!-- Email input -->
    <div class="form-control-group">
      <label for="email">Email Address</label>
      <input id="email" type="email" placeholder="Email Address">
    </div>

    <!-- Input -->
    <div class="form-control-group">
      <label for="foo">Supercalifragilistic Label</label>
      <input id="foo" type="text" placeholder="Enter something here...">
    </div>

    <div class="form-controls">

      <!-- Checkbox input   -->
      <label for="conditions" class="form-input-check">
        <input id="conditions" type="checkbox" value="">
        <span class="check-mark"></span> I've read the terms and conditions
      </label>

      <button type="submit" class="btn">Submit</button>
    </div>
  </fieldset>
</form>
{{</example>}}

## Inputs

### Grouped inputs
{{<example>}}
<form class="form">

  <!-- Upper input group -->
  <fieldset class="form-group">
    <input type="text" class="form-input" placeholder="Username">
    <input type="text" class="form-input" placeholder="Password">
    <input type="email" class="form-input" placeholder="Email">
  </fieldset>

  <!-- Lower input group -->
  <fieldset class="form-group">
    <input type="text" class="form-input" placeholder="A title">
    <textarea class="form-input" placeholder="Textareas work too"></textarea>
  </fieldset>

  <button type="submit" class="btn">Sign in</button>
</form>
{{</example>}}

### Required inputs

{{<example>}}
<form class="form">
  <input type="email" placeholder="Requires an email" required>
</form>
{{</example>}}

### Disabled inputs

{{<example>}}
<form class="form">
  <input type="text" placeholder="Disabled input here..." disabled>
</form>
{{</example>}}

### Read-Only inputs

{{<example>}}
<form class="form">
  <input type="text" value="Readonly input here..." readonly>
</form>
{{</example>}}

### Checkboxes

{{<example>}}
<form class="form">
  <!-- First checkbox -->
  <label for="option-one" class="form-input-check">
    <input id="option-one" type="checkbox" value="">
    <span class="check-mark"></span>
    Here's option one.
  </label>

  <!-- Second checkbox -->
  <label for="option-two" class="form-input-check">
    <input id="option-two" type="checkbox" value="">
    <span class="check-mark"></span>
    And option two.
  </label>
</form>
{{</example>}}

### Radios
{{<example>}}
<form class="form">

  <!-- First radio -->
  <label for="option-radio-one" class="form-input-radio">
    <input id="option-radio-one" type="radio" name="radio" value="" checked>
    <span class="radiomark"></span>
    Here's a radio button. You can choose this one..
  </label>

  <!-- Second radio -->
  <label for="option-radio-two" class="form-input-radio">
    <input id="option-radio-two" type="radio" name="radio" value="">
    <span class="radiomark"></span>
    ..Or this one!
  </label>

  <!-- Last radio -->
  <label for="option-radio-three" class="form-input-radio">
    <input id="option-radio-three" type="radio" name="radio" value="">
    <span class="radiomark"></span>
    ..Or maybe this one.
  </label>
</form>
{{</example>}}

### Files
{{<example>}}
<form class="form">
  <!-- File input -->
  <input type="file" id="custom-file" name="" value="">
  <label for="custom-file" class="label-file">
    Choose a file
    <svg class="icon">
      <use xlink:href="/assets/icons/feather.svg#upload"/>
    </svg>
  </label>
</form>
{{</example>}}

### Search
{{<example>}}
  <form class="form">
    <!-- Search input -->
    <div class="container-search">
      <input type="search">
      <button type="button" class="search-input">
        <svg class="icon">
          <use xlink:href="/assets/icons/feather.svg#search"/>
        </svg>
      </button>
    </div>
  </form>
{{</example>}}

## Select
{{<example>}}
<form class="form">
  <!-- Select input -->
  <div class="container-select">
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
