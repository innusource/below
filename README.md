<p align="center">
  <img width="300px" src="https://raw.githubusercontent.com/hyphev/below/master/site/static/assets/img/readme.svg?sanitize=true">
</p>
<h1 align="center">hyphev below CSS</h1>
<p align="center">The CSS design system of hyphev projects</p>
<p align="center">

  <a aria-label="Netlify Status" href="https://app.netlify.com/sites/below/deploys">
    <img alt="" src="https://api.netlify.com/api/v1/badges/764d5fef-7420-42d3-b990-21427089f991/deploy-status">
  </a>
  <a aria-label="npm package" href="https://www.npmjs.com/package/@hyphev/below">
    <img alt="" src="https://img.shields.io/npm/v/@hyphev/below.svg">
  </a>
  <a aria-label="contributors graph" href="https://github.com/hyphev/below/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/hyphev/below.svg">
  </a>
  <a aria-label="last commit" href="https://github.com/hyphev/below/commits/master">
    <img alt="" src=
  "https://img.shields.io/github/last-commit/hyphev/below.svg">
  </a>

  <a aria-label="license" href="https://github.com/hyphev/below/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/hyphev/below.svg" alt="">
  </a>
</p>

## Documentation

Our documentation site lives at [below.hyphev.com](https://below.hyphev.com).

## Installation

Install `@hyphev/below` in your project with npm:

```sh
npm install @hyphev/below
```

## Usage
The included source files are written in [Sass] using SCSS syntax. After [installing](#install) with npm, you can add your project's `node_modules` directory to your Sass [include paths](https://github.com/sass/node-sass#includepaths) (AKA [load paths](http://technology.customink.com/blog/2014/10/09/understanding-and-using-sass-load-paths/) in Ruby), then import it like this:

```scss
@import "@hyphev/below/";
```

You can import individual ***below*** modules directly from the `@hyphev/below` package:

```scss
@import "@hyphev/below/globals/";
@import "@hyphev/below/foldings/";
@import "@hyphev/below/menus/";
```

## Local Development
To run `@hyphev/below` locally when adding or updating components:
1. Clone this repo: `git clone https://github.com/hyphev/below`
2. Install dependencies: `npm install`
3. Compile dist: `npm run dist`
4. Run the dev app: `npm start`
> [WIP] See [the contributing docs](contributing.md) for more info on code style, testing, and coverage.
