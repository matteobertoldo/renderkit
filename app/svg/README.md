# SVG Guide
This folder will have to place all `svg` files in order to generate a `spritemap` svg.
Any output setting can be configured in the `gulp/gulpconfig.js` file in the` svgOptions` section. You can create an **HTML** sample file to see the front-end render. [Cross browsing](https://github.com/jonathantneal/svg4everybody#implementation-status) support for the `<use>` tag, to use external content, is provided by the polyfill `svg4everybody();`.
Below is an example of markup.

## Markup

```html
<svg role="img" title="Github">
	<use xlink:href="dist/images/sprite.svg#github"/>
</svg>
```
The id (`#`) is the name of the svg file.
-   Take precaution, then, to rename files for subsequent maintenance.
-   The svg files must have **fill** completely **black** and cut exactly in their space.
-   Check that the `<svg>` (viewbox) area does not exceed its shape, otherwise it will be difficult to decrypt the correct size with the styles.
-   It is not recommended to create subfolders as it becomes difficult to mark the right **id**

## Polyfill

It is advisable to set the following tag in `<head>`

```html
<meta http-equiv="x-ua-compatible" content="ie=edge">
```
And import the polyfill to use `svg spritemap` in all browsers

```html
<script src="/path/to/svg4everybody.js"></script>
<script src="/path/to/svg4everybody.legacy.js"> //To support Internet Explorer 6-8, include the legacy script instead.</script>
<script>svg4everybody(); // run when document are ready</script>
```
For all possible fallbacks to support the various browsers consult [svg4everybody](https://github.com/jonathantneal/svg4everybody).
