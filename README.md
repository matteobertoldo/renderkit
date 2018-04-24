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
        <td>
            <strong>CROSS BROWSING</strong>
        </td>
        <td>
            <a href="https://github.com/necolas/normalize.css">
              Normalize v.8.0.0
            </a>
            Extended and rewritten in <code>scss</code>. Configurable, in complete safety.
        </td>
    </tr>
    <tr>
        <td>
            <strong>BREAKPOINTS</strong>
        </td>
        <td>
            <a href="https://foundation.zurb.com/sites/docs/media-queries.html#changing-the-breakpoints">
                Foundation Breakpoint
            </a>
            with <code>emless</code> output. (For pixel lovers).
        </td>
    </tr>
    <tr>
        <td>
            <strong>GRID SYSTEM</strong>
        </td>
        <td>
            &middot;
            <a href="https://foundation.zurb.com/sites/docs/xy-grid.html">
                Foundation XY-Grid
            </a>
            with <code>remless</code> output for the gutters, with all mixin for <a href="https://foundation.zurb.com/sites/docs/xy-grid.html#building-semantically">building semantically</a>. <br />
            &middot;
            <a href="https://foundation.zurb.com/sites/docs/grid.html">
                Foundation Float Grid
            </a>
            with <code>remless</code> output for the gutters, with all mixin for <a href="https://foundation.zurb.com/sites/docs/grid.html#building-semantically">building semantically</a>.
        </td>
    </tr>
    <tr>
        <td>
            <strong>TYPOGRAPHY</strong>
        </td>
        <td>
            &middot;
            <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#_global%20renderkit-mixin-global-fonts">
                Mixin
            </a>
            for <code>@font-face</code> rules & Google Fonts. <br/>
            &middot;
            <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#typography-mixin-headers-style-bp">
                Headers responsive
            </a>
            with a <code>scss</code> map to draw up every single header in every <code>breakpoint</code>.
        </td>
    </tr>
    <tr>
        <td>
            <strong>FLEXBOX</strong>
        </td>
        <td>
            <a href="https://foundation.zurb.com/sites/docs/flexbox-utilities.html">
                Foundation Flexbox Utilities
            </a>
            (The ability to enable or disable <code>flex-source-ordering</code> has been added.)
        </td>
    </tr>
    <tr>
        <td>
            <strong>FORM</strong>
        </td>
        <td>
            &middot;
            Powerful <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#_global%20renderkit-mixin-form-style">mixin</a> to styling up all cross browsing fields. <br />
            &middot;
            Powerful <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#_global%20renderkit-mixin-checkbox-radio-classes">mixin</a> to styling up checkbox & radio without <code>js</code>. Available with <strong>building semantically</strong>.
        </td>
    </tr>
    <tr>
        <td>
            <strong>ACCESSIBILITY</strong>
        </td>
        <td>
            &middot;
            Accessibility <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#mixin-accessibility-classes">classes</a> <br/>
            &middot;
            Layout <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#layout-mixin">mixins</a>
        </td>
    </tr>
    <tr>
        <td>
            <strong>PALETTE</strong>
        </td>
        <td>
            <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#_global%20renderkit-mixin-colors-palette">
                Mixin
            </a>
            for manage all palette colors via <code>scss</code> map.
        </td>
    </tr>
    <tr>
        <td>
            <strong>SHAPES</strong>
        </td>
        <td>
            <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#shapes-mixin">Mixins</a>
            with <strong>building semantically</strong> &amp; <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#_global%20renderkit-mixin-shape-classes">classes</a> to generate shapes without images.
        </td>
    </tr>
    <tr>
        <td>
            <strong>PROTOTYPING</strong>
        </td>
        <td>
            &middot;
            <a href="https://foundation.zurb.com/sites/docs/visibility.html">
                Foundation visibility classes
            </a> <br />
            &middot;
            <a href="https://foundation.zurb.com/sites/docs/typography-helpers.html#text-alignment">
                Foundation text alignment
            </a> <br />
            &middot;
            <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#typography-mixin-text-transform-classes">Text transformation classes</a> <br />
            &middot;
            <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#_global%20renderkit-mixin-float-classes">Float classes</a> <br />
            &middot;
            <a href="https://matteobertoldo.github.io/renderkit/sassdoc/index.html#_global%20renderkit-mixin-clearfix-classes">Clearfix classes</a>
        </td>
    </tr>
    <tr>
        <td>
            <strong>PRINT</strong>
        </td>
        <td>
            <a href="https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css">Media Print</a>
            from original <code>HTML5</code> boilerplate.
        </td>
    </tr>
</table>

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
-   The default `css` RenderKit includes Foundation `XY-Grid` and `Flexbox Utilities` in less than `85KB` 🎉.
-   For a minify version [download](https://raw.github.com/matteobertoldo/renderkit/dist/css/renderkit.css) this file, less than `60KB` 🎉.

If you want the version without `flexbox` you can [download](https://raw.github.com/matteobertoldo/renderkit/dist/css/renderkit-float.css) the "float" version with Foundation Float Grid.

## License

RenderKit is released under the [MIT](https://opensource.org/licenses/MIT) License.
