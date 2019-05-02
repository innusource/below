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

    <label for="email">Email</label>
    <input id="email" type="email" placeholder="Email">
    <span class="form-message">This is a required field.</span>

    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Password">

    <label for="state">State</label>
    <select id="state">
      <option>AL</option>
      <option>CA</option>
      <option>IL</option>
    </select>

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
    <div class="form-control-group">
      <label for="name">Username</label>
      <input id="name" type="text" placeholder="Username">
      <span class="form-message-inline">This is a required field.</span>
    </div>

    <div class="form-control-group">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="Password">
    </div>

    <div class="form-control-group">
      <label for="email">Email Address</label>
      <input id="email" type="email" placeholder="Email Address">
    </div>

    <div class="form-control-group">
      <label for="foo">Supercalifragilistic Label</label>
      <input id="foo" type="text" placeholder="Enter something here...">
    </div>

    <div class="form-controls">

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
  <fieldset class="form-group">
    <input type="text" class="form-input" placeholder="Username">
    <input type="text" class="form-input" placeholder="Password">
    <input type="email" class="form-input" placeholder="Email">
  </fieldset>

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
  <label for="option-one" class="form-input-check">
    <input id="option-one" type="checkbox" value="">
    <span class="check-mark"></span>
    Here's option one.
  </label>

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
  <label for="option-radio-one" class="form-input-radio">
    <input id="option-radio-one" type="radio" name="radio" value="" checked>
    <span class="radiomark"></span>
    Here's a radio button. You can choose this one..
  </label>

  <label for="option-radio-two" class="form-input-radio">
    <input id="option-radio-two" type="radio" name="radio" value="">
    <span class="radiomark"></span>
    ..Or this one!
  </label>

  <label for="option-radio-three" class="form-input-radio">
    <input id="option-radio-three" type="radio" name="radio" value="">
    <span class="radiomark"></span>
    ..Or maybe this one.
  </label>
</form>
{{</example>}}

## Selects
{{<example>}}
<form class="form">
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
