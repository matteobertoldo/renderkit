# RenderKit

> "Definitely 👌🏽 the light way for start new front-end web projects."

From a `UI-Kit` up in `production`. A light way for start new front-end web project.
RenderKit is a lightweight `scss` framework that brings together the best front-end tools for cross browsing, accessibility and prototyping. With more than **150** configurations via `scss` it is the lightest way to start front-end projects.

RenderKit can also be used as styleguide and visual tester for the various `@mixins` installed with sections already ready for use.

## Getting started

Install via NPM

```bash
npm install renderkit
```

## SCSS Package

The following tools are included in the `scss` package:

-   CROSS BROWSING 💻
    -   [Normalize v.8.0.0](https://github.com/necolas/normalize.css) Extended and rewritten in `scss`. Configurable, in complete safety.

-   BREAKPOINTS 🔗
    -   [Foundation Breakpoint](https://foundation.zurb.com/sites/docs/media-queries.html#changing-the-breakpoints) with `emless` output. (For pixel lovers).

-   GRID SYSTEM ⚔️
    -   [Foundation XY-Grid](https://foundation.zurb.com/sites/docs/xy-grid.html) with `remless` output for the gutters, with all mixin for [building semantically](https://foundation.zurb.com/sites/docs/xy-grid.html#building-semantically).
    -   [Foundation Float Grid](https://foundation.zurb.com/sites/docs/grid.html) with `remless` output for the gutters, with all mixin for [building semantically](https://foundation.zurb.com/sites/docs/grid.html#building-semantically).

-   TYPOGRAPHY ✒️
    -   [Mixin](https://matteobertoldo.github.io/renderkit/sass/index.html#_global%20renderkit-mixin-global-fonts) for `@font-face` rules & Google Fonts.
    -   [Headers responsive](https://matteobertoldo.github.io/renderkit/sass/index.html#typography-mixin-headers-style-bp).

-   FLEXBOX 🏋🏽‍
    -   [Foundation Flexbox Utilities](https://foundation.zurb.com/sites/docs/flexbox-utilities.html) (The ability to enable or disable `flex-source-ordering` has been added.)

-   FORM 🕹
    -   Powerful [mixin](https://matteobertoldo.github.io/renderkit/sass/index.html#mixin-form-style) to styling up all cross browsing fields.
    -   Powerful checkbox & radio [mixin](https://matteobertoldo.github.io/renderkit/sass/index.html#mixin-checkbox-radio-classes) to styling up checkbox & radio without `js`. Available with **building semantically**.

-   ACCESSIBILITY ⛑
    -   [Accessibility classes](https://matteobertoldo.github.io/renderkit/sass/index.html#mixin-accessibility-classes)
    -   [Layout mixins](https://matteobertoldo.github.io/renderkit/sass/index.html#layout-mixin)

-   PALETTE 🎨
    -   [Mixin](https://matteobertoldo.github.io/renderkit/sass/index.html#mixin-colors-palette) for manage all palette colors via `scss` map.

-   SHAPES 📐
    -   [Mixins](https://matteobertoldo.github.io/renderkit/sass/index.html#shapes-mixin) with **building semantically** & [classes](https://matteobertoldo.github.io/renderkit/sass/index.html#mixin-shape-classes) to generate shapes without images.

-   PROTOTYPING 🎛
    -   [Foundation visibility classes](https://foundation.zurb.com/sites/docs/visibility.html)
    -   [Foundation text alignment](https://foundation.zurb.com/sites/docs/typography-helpers.html#text-alignment)
    -   [Text transformation classes](https://matteobertoldo.github.io/renderkit/sass/index.html#typography-mixin-text-transform-classes)
    -   [Float classes](https://matteobertoldo.github.io/renderkit/sass/index.html#_global%20renderkit-mixin-float-classes)
    -   [Clearfix classes](https://matteobertoldo.github.io/renderkit/sass/index.html#_global%20renderkit-mixin-clearfix-classes)

-   MEDIA PRINT 🖨
    -   [Media Print](https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css) from original HTML5 boilerplate.

**Important notes:**
all packages including the `Foundation` core have been revisited and customized without any `rem` output. If you want to install any additional Foundtion package, full functionality is not guaranteed.

If you want to completely use all the accessibility features present, you need to install [what-input](https://github.com/ten1seven/what-input).
For all `scss` **documentation** visit [this](https://matteobertoldo.github.io/renderkit/sass/index.html) page.

Each `scss` RenderKit file is fully compatible with [sass-doc](http://sassdoc.com). You can also install the complete documentation locally!.

### SCSS Quickly install
Create your `scss` file

```scss
@import 'path/to/renderkit/scss/renderkit';
@include scss-renderkit;
```
Download the [settings](https://raw.github.com/matteobertoldo/renderkit/scss/config/_config.scss), change the default and enjoy!. The details of each variable can be found and searched on [this page](https://matteobertoldo.github.io/renderkit/sass/index.html).

### CSS Quickly install

You can basic [download](https://raw.github.com/matteobertoldo/renderkit/dist/css/renderkit.css) the RenderKit `css` file.
-   The default `css` RenderKit includes `XY-Grid` and `Flexbox Utilities` in less than `80KB` 🎉.
-   For a minify version [download](https://raw.github.com/matteobertoldo/renderkit/dist/css/renderkit.css) this file, less than `60KB` 🎉.

If you want the version without `flexbox` you can [download](https://raw.github.com/matteobertoldo/renderkit/dist/css/renderkit-float.css) the "float" version with Foundation Float Grid.

### License

RenderKit is released under the [MIT](https://opensource.org/licenses/MIT) License.
