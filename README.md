# RenderKit

> "Definitely 👌🏽 the light way for start new front-end web projects."

From a `UI-Kit` up in `production`. A light way for start new front-end web project.
RenderKit is a lightweight `scss` framework that brings together the best front-end tools for cross browsing, accessibility and prototyping. With more than **150** configurations via `scss` it is the lightest way to start front-end projects.

RenderKit can also be used as styleguide and visual tester for the various `@mixins` installed with sections already ready for use.

[![npm](https://img.shields.io/npm/v/renderkit.svg)](https://www.npmjs.com/package/renderkit)
[![npm](https://img.shields.io/npm/l/renderkit.svg)](https://www.npmjs.com/package/renderkit)

## Getting started

Install via NPM

```bash
npm install renderkit
```

## SCSS Package

The following tools are included in the `scss` package:

<table>
  <tr>
    <td><strong>CROSS BROWSING 💻</strong></td>
    <td>[Normalize v.8.0.0](https://github.com/necolas/normalize.css) Extended and rewritten in `scss`. Configurable, in complete safety.</td>
  </tr>
  <tr>
    <td><strong>BREAKPOINTS 🔗</strong></td>
    <td>[Foundation Breakpoint](https://foundation.zurb.com/sites/docs/media-queries.html#changing-the-breakpoints) with `emless` output. (For pixel lovers).</td>
  </tr>
  <tr>
    <td><strong>GRID SYSTEM ⚔️</strong></td>
    <td> &middot; [Foundation XY-Grid](https://foundation.zurb.com/sites/docs/xy-grid.html) with `remless` output for the gutters, with all mixin for [building semantically](https://foundation.zurb.com/sites/docs/xy-grid.html#building-semantically). <br /> <br />
    &middot; [Foundation Float Grid](https://foundation.zurb.com/sites/docs/grid.html) with `remless` output for the gutters, with all mixin for [building semantically](https://foundation.zurb.com/sites/docs/grid.html#building-semantically).</td>
  </tr>
  <tr>
    <td><strong>TYPOGRAPHY ✒️</strong></td>
    <td> &middot; [Mixin](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#_global%20renderkit-mixin-global-fonts) for `@font-face` rules & Google Fonts. <br/> <br/>
    &middot; [Headers responsive](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#typography-mixin-headers-style-bp). with a `scss` map to draw up every single header in every `breakpoint`.</td>
  </tr>
  <tr>
    <td><strong>FLEXBOX 🏋🏽‍</strong></td>
    <td>[Foundation Flexbox Utilities](https://foundation.zurb.com/sites/docs/flexbox-utilities.html) (The ability to enable or disable `flex-source-ordering` has been added.)</td>
  </tr>
  <tr>
    <td><strong>FORM 🕹<strong></td>
    <td>&middot; Powerful [mixin](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#mixin-form-style) to styling up all cross browsing fields. <br /> <br />
    &middot; Powerful [mixin](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#mixin-checkbox-radio-classes) to styling up checkbox & radio without `js`. Available with **building semantically**.</td>
  </tr>
  <tr>
    <td><strong>ACCESSIBILITY ⛑</strong></td>
    <td>&middot; Accessibility [classes]((https://matteobertoldo.github.io/renderkit/sassdoc/index.html#mixin-accessibility-classes) <br/>
    &middot; Layout [mixins](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#layout-mixin)</td>
  </tr>
  <tr>
    <td><strong>PALETTE 🎨</strong></td>
    <td>[Mixin](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#mixin-colors-palette) for manage all palette colors via `scss` map.</td>
  </tr>
  <tr>
    <td><strong>SHAPES 📐</strong></td>
    <td>[Mixins](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#shapes-mixin) with **building semantically** & [classes](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#mixin-shape-classes) to generate shapes without images.</td>
  </tr>
  <tr>
    <td><strong>PROTOTYPING 🎛</strong></td>
    <td>&middot; [Foundation visibility classes](https://foundation.zurb.com/sites/docs/visibility.html) <br />
    &middot; [Foundation text alignment](https://foundation.zurb.com/sites/docs/typography-helpers.html#text-alignment) <br />
    &middot; [Text transformation classes](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#typography-mixin-text-transform-classes) <br />
    &middot; [Float classes](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#_global%20renderkit-mixin-float-classes) <br />
    &middot; [Clearfix classes](https://matteobertoldo.github.io/renderkit/sassdoc/index.html#_global%20renderkit-mixin-clearfix-classes)</td>
  </tr>
  <tr>
    <td><strong>MEDIA PRINT 🖨</strong></td>
    <td>[Media Print](https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css) from original `HTML5` boilerplate.</td>
  </tr>
</table>‍

**Important notes:**
all packages including the `Foundation` core have been revisited and customized without any `rem` output. If you want to install any additional Foundation package, full functionality is not guaranteed.

If you want to completely use all the accessibility features present, you need to install [what-input](https://github.com/ten1seven/what-input).
For all `scss` **documentation** visit [this](https://matteobertoldo.github.io/renderkit/sassdoc/index.html) page.

Each `scss` RenderKit file is fully compatible with [sass-doc](http://sassdoc.com). You can also install the complete documentation locally!.

## SCSS Quickly install
Create your `scss` file

```scss
@import 'path/to/renderkit/scss/renderkit';
@include scss-renderkit;
```
Download the [settings](https://raw.github.com/matteobertoldo/renderkit/scss/config/_config.scss), change the default and enjoy!. The details of each variable can be found and searched on [this page](https://matteobertoldo.github.io/renderkit/sassdoc/index.html).

## CSS Quickly install

You can basic [download](https://raw.github.com/matteobertoldo/renderkit/dist/css/renderkit.css) the RenderKit `css` file.
-   The default `css` RenderKit includes Foundation `XY-Grid` and `Flexbox Utilities` in less than `80KB` 🎉.
-   For a minify version [download](https://raw.github.com/matteobertoldo/renderkit/dist/css/renderkit.css) this file, less than `60KB` 🎉.

If you want the version without `flexbox` you can [download](https://raw.github.com/matteobertoldo/renderkit/dist/css/renderkit-float.css) the "float" version with Foundation Float Grid.

## License

RenderKit is released under the [MIT](https://opensource.org/licenses/MIT) License.
