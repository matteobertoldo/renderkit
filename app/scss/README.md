# SASS Guide
The output CSS file in your folder `distribution` it is structured with SASS. Please read this SASS guide before create your custom packages or extend a current package.

### Authoring
All stylesheets are written in SCSS, whose syntax is a superset of CSS.

SCSS authoring is meant to be used with a build tool, which is currently [gulp](http://gulpjs.com).
Once compiled, the SCSS is output as CSS in `distribution/css` folder.

## Code styles
Inspired by <https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md#css> and <http://css-tricks.com/sass-style-guide/>

-   Include partials should be prefixed with `_`, i.e. `_partial.scss`
-   Please don't write any rules into `style.scss` or into an `importer` file. You can simply find it with `@importer` flag.
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
-   No vendor prefixes. This will be done at build time using [autoprefixer](https://github.com/postcss/autoprefixer).
-   Attribute selectors, like `input[type="text"]` should always wrap the attribute's value in double quotes, for consistency and safety.
-   Maximum selector nesting: **three** levels deep.
-   Global sass file (`style.scss`) is just a table of content.
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

## Variables
All variables are defined in the `vars/_config.scss` file.
For color variables, use <http://www.color-blindness.com/color-name-hue/> to find the color name.

```scss
// OK
$sangria: #990000;

// Bad
$red: #990000;
```
