---
layout: docs
title: Forms
parent: Components
toc: true
---

## Default form
{% capture example %}
<form class="form">
  <fieldset>
    <legend>A compact inline form</legend>

    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">

    <label for="remember" class="form-input-check">
      <input id="remember" type="checkbox"> Remember me
    </label>

    <button type="submit" class="btn">Sign in</button>
  </fieldset>
</form>
{% endcapture %}
{% include example.html content=example %}

## Stacked form
{% capture example %}
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

    <label for="remember" class="form-input-check">
      <input id="remember" type="checkbox"> Remember me
    </label>

    <button type="submit" class="btn">Sign in</button>
  </fieldset>
</form>
{% endcapture %}
{% include example.html content=example %}

## Aligned form
{% capture example %}
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
      <label for="cb" class="form-input-check">
        <input id="cb" type="checkbox"> I've read the terms and conditions
      </label>

      <button type="submit" class="btn">Submit</button>
    </div>
  </fieldset>
</form>
{% endcapture %}
{% include example.html content=example %}

## Inputs

### Grouped inputs
{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}

### Required inputs
{% capture example %}
<form class="form">
  <input type="email" placeholder="Requires an email" required>
</form>
{% endcapture %}
{% include example.html content=example %}

### Disabled inputs
{% capture example %}
<form class="form">
  <input type="text" placeholder="Disabled input here..." disabled>
</form>
{% endcapture %}
{% include example.html content=example %}

### Read-Only inputs
{% capture example %}
<form class="form">
  <input type="text" value="Readonly input here..." readonly>
</form>
{% endcapture %}
{% include example.html content=example %}

### Rounded inputs
{% capture example %}
<form class="form">
  <input type="text" class="form-input-rounded">
  <button type="submit" class="btn">Search</button>
</form>
{% endcapture %}
{% include example.html content=example %}

### Checkboxes and radios
{% capture example %}
<form class="form">
  <label for="option-one" class="check-container">
    <input id="option-one" type="checkbox" value="">
    <span class="checkmark"></span>
    Here's option one.
  </label>

  <label for="option-two" class="radio-container">
    <input id="option-two" type="radio" name="optionsRadios" value="option1" checked>
    <span class="radiomark"></span>
    Here's a radio button. You can choose this one..
  </label>

  <label for="option-three" class="radio-container">
    <input id="option-three" type="radio" name="optionsRadios" value="option2">
    <span class="radiomark"></span>
    ..Or this one!
  </label>
</form>
{% endcapture %}
{% include example.html content=example %}
