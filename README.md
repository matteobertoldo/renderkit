# Boilerplate Standard

> "Definitely the standard 👌🏽 for start new front-end Web projects".

From a `UI-Kit` up in `production`. "Boilerplate Standard" is an excellent friend to develop, compile, compress files for the front end Web developing dynamically...but not only. With more than **100** options for different tasks, your work environment will be dynamic as ever.

Great for developing static template but at the same time great to "interpose" across multiple development platforms like **Wordpress**, **Shopify**, **Magento**, **Demandware** and many more.

## Table of contents

Features | Tools Used
------ | -----
Dev. Environment|[Node.js](https://nodejs.org/), [Gulp](http://gulpjs.com)
Package Manager|[Yarn](https://yarnpkg.com/en/)
HTML|[Nunjucks Templating](https://mozilla.github.io/nunjucks/)
SCSS-CSS|[Sass Lang](http://sass-lang.com/), [gulp-sass](https://github.com/dlmanning/gulp-sass), [gulp-postcss](https://github.com/postcss/gulp-postcss), [Autoprefixer](https://github.com/postcss/autoprefixer), [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem), [Foundation Grid](http://foundation.zurb.com/sites/docs/grid.html), [clean-css](https://github.com/jakubpawlowicz/clean-css), [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)
JavaScript|[Modernizr](https://modernizr.com), [jQuery](http://jquery.com), [fastclick](https://github.com/ftlabs/fastclick), [what-input](https://github.com/ten1seven/what-input), [node-browserify](https://github.com/substack/node-browserify) (Coming soon)
Icons|[SVG Spritemaps](https://github.com/jkphl/gulp-svg-sprite) supported with [SVG for Everybody](https://github.com/jonathantneal/svg4everybody)
Live Updating|[BrowserSync](http://www.browsersync.io/)
Deployment|FTP with [vinyl-ftp](https://github.com/morris/vinyl-ftp), WebDAV with [dw-webdav](https://www.npmjs.com/package/dwdav) (coming soon)

## Getting Sarted

Clone "Boilerplate Standard" with your favorite Git client, or simply download the package.
`https://github.com/matteobertoldo/boilerplate-standard.git`.

## Install node.js

To initialize the work environment first you need to install **Node.js** from the official site.
You can download from [this page](https://nodejs.org/en/download/) the latest version of Node.
-   For **Linux users**, it is recommended that you see the package managers on [this page]( https://nodejs.org/en/download/package-manager/) to install Node.

It's highly recommended that you install the ***LTS version***. <br/>
"Boilerplate Standard" has been tested by Node version 7+ and is **fully compatible** with the *LTS version*.

## Install gulp

Once the Node installation is complete, Gulp's global installation is required. Gulp will be our task manager to use all the tasks.
Type the following command from administrator mode.

```bash
# unix system
sudo npm install gulp -g

# in windows "run as administrator"
npm install gulp -g
```

In Windows there is no `sudo`, you must run the terminal in "Administrator Mode" (right-clicking the program in the UI and choosing "run as administrator").

## Package Manager

Manage the plugins updates with `yarn`. <br/>
For install yarn globally type:

```bash
# unix system
sudo npm install yarn -g

# in windows "run as administrator"
npm install yarn -g
```

All "vendor" plugins, not related to the work environment, are displayed within the `package.json` file in the `dependencies` object.

You can configure all options in the `gulp/gulpconfig.js` file in the `packageManager` object to handle the import and the plugins. To manage output name and file compression, see `outputPluginsName` & `minifyPlugins`.

## Disable Package Manager

If you don't want to manage vendor plugins with `yarn`, simply set `packageManager.manage` in `gulp/gulpconfig.js` by `false` and remember update the "manager" into `gulp/gulpconfig.js` at `folder.pkg`.

If you configure the `packageManager.manage` object to `false` it is necessary to declare the `vendor` folder for importing the plugins. It can be configured in the `workspace.jsVendor` object and is also required if a plugin is not present in [yarn](https://yarnpkg.com/en/).

## Install dependencies

To generate `node_modules` packages, you must download the dependencies that will be read in the `package.json` file.
Then point to the "boilerplate-standard" folder or our project folder with the `cd` command.

```bash
cd /path/to/boilerplate-standard/

# or target your project
cd /path/to/myproject/
```

Once you enter the folder, type:
```bash
# unix system
sudo yarn install

# in windows "run as administrator"
yarn install
```

Full documentation coming soon.

## News & Coming Soon Features

-   Nunjucks templating! ***NEW***
-   Browserify JS ***(Coming Soon)***

### License

"Boilerplate Standard" is released under the [MIT](https://opensource.org/licenses/MIT) License.
