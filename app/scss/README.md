# SASS Package
The output CSS file in your folder `distribution` it is structured with SASS. Please read this SASS guide before create your custom packages or extend a current package. <br/>
All stylesheets are written in SCSS, whose syntax is a superset of CSS.

SCSS authoring is meant to be used with a build tool, which is currently [gulp](http://gulpjs.com).
Once compiled, the SCSS is output as CSS in `distribution/css` folder.

## Table of contents

Features | Tools Used
------ | -----
Unit Utils| `rem()` or `em()` functions
Cross Browsing Elements|[Normalize.css](https://github.com/necolas/normalize.css) (rewritten & extended in `scss`)
Breakpoint|[Foundation Media Queries](https://foundation.zurb.com/sites/docs/media-queries.html) with no `rem` conversion
Fonts| Custom `@font-face` mixin
Typography| Custom typography helpers `@mixins`
Float|[Foundation Float Classes](https://foundation.zurb.com/sites/docs/float-classes.html)
Grids|[Foundation Float Grid](https://foundation.zurb.com/sites/docs/grid.html), [Foundation XY Grid](https://foundation.zurb.com/sites/docs/xy-grid.html) (Coming Soon)
Accessibility| Accessibility `@mixins` packages `@accessibility-classes`
Flexbox| Flexbox `@mixins` packages `@flexbox-classess`
Visibility|[Foundation Visibility](https://foundation.zurb.com/sites/docs/visibility.html)

## Packages
Please don't write any rules into `style.scss` or into an `importer` file. You can simply find it with `@importer` flag.
-   Global sass file (`style.scss`) is just a table of content.
-   If you add a ***new*** package remember to update `_global.scss` file with the new package.

## Code Styles
Inspired by <http://codeguide.co/#css> and <http://css-tricks.com/sass-style-guide/>

-   Include partials should be prefixed with `_`, i.e. `_partial.scss`
-   Multiple-line approach (one property and value per line).

```scss
// OK
a {
    color: $green;
    text-decoration: underline;
}

// Bad
a {color: $green; text-decoration: underline;}
```
-   Use ONE space after a property's colon.

```scss
// OK
.block {
    display: block;
}

// Bad
.block {
    display:block;
}
```
-   Use ONE space to engage the rules within the braces.

```scss
// OK
.block {
    display: block;
}

// Bad
.block{
    display: block;
}
```

-   End all lines with a semi-colon.
-   For multiple, comma-separated selectors, place each selector on its own line.

```scss
// OK
.selectorA,
.selectorB {

}

// Bad
. selectorA, .selectorB {}
```
-   No vendor prefixes. This will be done at build time using [Autoprefixer](https://github.com/postcss/autoprefixer).
-   Attribute selectors, like `input[type="text"]` should always wrap the attribute's value in double quotes, for consistency and safety.
-   Maximum selector nesting: **three** levels deep.
-   Avoid the use of ID (`#`) like a plague. Class naming is preferred.
-   When using class or ID selector, drop the element selector.

```scss
// OK
.class-name {
}

// Bad
div.class-name {
}
```
-   Please don't use "camelcase" formatting for set the class name.
-   Use `-` for separating the words.

```scss
// OK
.my-class-name {
}

// Bad
.myClassName {
}
```
-   Use lowercase for HEX colors, i.e. `#eaea56` instead of `#EAEA56`.
-   Contract HEX colors when possible, i.e. `#fff` instead of `#ffffff`.
-   **!important** Avoid using `!important` at all cost!

## Variables & Configurations
All variables and configurations are defined in the `config` folder, in separate files by type of configuration.

For color variables, it can be used use <http://www.color-blindness.com/color-name-hue/> to find and set the correct color name.

```scss
// OK
$sangria: #990000;

// Bad
$red: #990000;
```
If you want use a color in `$colors-palette` map, please use `palette` function.

```scss
// SCSS Palette function
.selector {
    color: palette(3);
}
```

```css
/*CSS Output*/
.selector {
    color: #0099cc;
}
```

## Breakpoints
The "breakpoint string" are part of the "core" of Foundation. **Important**, the default output of each media queries is `px` to simplify the process. Unlike the standard Foundation which is in `em`.
If you want the output to `em` or in `rem`, simply nest in the map value of the `$breakpoints` the functions `em()` or `rem()`.
Or alternatively configure the `gulpconfig.js` file into `cssOptions.remMediaQueries` the value to `true`.

```scss
// ex. with em
$breakpoints: (
    medium: em(667px),
);

// ex. with rem
$breakpoints: (
    medium: rem(667px),
);
```
An example of use of the Foundations media queries.
For all possibilities please visit <http://foundation.zurb.com/sites/docs/media-queries.html> (consider only examples in SCSS).
Remember: The Foundation Breakpoints are developed with the logic of "Mobile First".
The "breakpoint" function can be nested as in the following example.

```scss
.foo {
    .children {
        align-self: flex-end;

        // SCSS Breakpoint
        @include breakpoint(medium down) {
            align-self: flex-start;
        }
    }
}
```
```css
/*CSS output*/
.foo .children {
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end
}

@media only screen and (max-width:1024px) {
    .foo .children {
        -webkit-align-self: flex-start;
        -ms-flex-item-align: start;
        align-self: flex-start
    }
}
```
