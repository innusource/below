---
layout: docs
title: Color
menu:
  main:
    parent: Guidelines
---
<div class="nav-tabs">
  <ul>
    <li><a href="/guidelines/color/" class="active">Lightest</a></li>
    <li><a href="/guidelines/color/light">Light</a></li>
    <li><a href="/guidelines/color/dark">Dark</a></li>
    <li><a href="/guidelines/color/darkest">Darkest</a></li>
  </ul>
</div>

## Core color tokens
<table class="table">
    <thead>
      <tr>
        <th>Token</th>
        <th>Role</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {{ range $token := (index $.Site.Data "color-tokens.core-tokens") }}
        {{ $info := $token 1 }}
        <tr>
          <td><code>{{ $token 0 }}</code></td>
          <td>
            <ul>
              {{ range $role := $info.role }}
                <li>{{ $role }}</li>
              {{ end }}
            </ul>
          </td>
          <td>
            {{ $type := .Permalink }}
            {{ $theme := "" }}
            {{ with (eq $type "lightest") }}
              {{ $theme := "lightest" }}
            {{ end }}
            {{ with (eq $type "light") }}
              {{ $theme := "light" }}
            {{ end }}
            {{ with (eq $type "dark") }}
              {{ $theme := "dark" }}
            {{ end }}
            {{ with (eq $type "darkest") }}
              {{ $theme := "darkest" }}
            {{ end }}
            <div class="row">
              <div class="col">
                <ul>
                  <li>{{ $theme.name }}</li>
                  <li><b>{{ $theme.hex }}</b></li>
                </ul>
              </div>
              <div class="col">
                <span class="color-token-example" style="background: {{ $theme.hex }};"></span>
              </div>
            </div>
          </td>
        </tr>
      {{ end }}
    </tbody>
</table>


## Interactive color tokens
<table class="table">
    <thead>
      <tr>
        <th>Token</th>
        <th>Role</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {{ range $token := (index $.Site.Data "color-tokens.core-tokens") }}
        {{ $info := $token 1 }}
        <tr>
          <td><code>{{ $token 0 }}</code></td>
          <td>
            <ul>
              {{ range $role := $info.role }}
                <li>{{ $role }}</li>
              {{ end }}
            </ul>
          </td>
          <td>
            {{ $type := .Permalink }}
            {{ $theme := "" }}
            {{ with (eq $type "lightest") }}
              {{ $theme := "lightest" }}
            {{ end }}
            {{ with (eq $type "light") }}
              {{ $theme := "light" }}
            {{ end }}
            {{ with (eq $type "dark") }}
              {{ $theme := "dark" }}
            {{ end }}
            {{ with (eq $type "darkest") }}
              {{ $theme := "darkest" }}
            {{ end }}
            <div class="row">
              <div class="col">
                <ul>
                  <li>{{ $theme.name }}</li>
                  <li><b>{{ $theme.hex }}</b></li>
                </ul>
              </div>
              <div class="col">
                <span class="color-token-example" style="background: {{ $theme.hex }};"></span>
              </div>
            </div>
          </td>
        </tr>
      {{ end }}
    </tbody>
</table>

