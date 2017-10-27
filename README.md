# Boilerplate Standard

> "Definitely the standard 👌🏽 for start new front-end Web projects".

From a `UI-Kit` up in `production`. "Boilerplate Standard" is an excellent friend to develop, compile, compress files for the front end Web developing dynamically...but not only. With more than **100** options for different tasks, your work environment will be dynamic as ever.

Great for developing static template but at the same time great to "interpose" across multiple development platforms like **Wordpress**, **Shopify**, **Magento**, **Demandware** and many more.

## Table of contents

Features | Tools Used
------ | -----
Dev. Environment|[Node.js](https://nodejs.org/), [Gulp](http://gulpjs.com)
Package Manager|[Bower](https://bower.io)
HTML|[Nunjucks Templating](https://mozilla.github.io/nunjucks/)
SCSS-CSS|[Sass Lang](http://sass-lang.com/), [gulp-sass](https://github.com/dlmanning/gulp-sass), [gulp-postcss](https://github.com/postcss/gulp-postcss), [Autoprefixer](https://github.com/postcss/autoprefixer), [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem), [Foundation Grid](http://foundation.zurb.com/sites/docs/grid.html), [clean-css](https://github.com/jakubpawlowicz/clean-css), [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)
JavaScript|[Modernizr](https://modernizr.com), [jQuery](http://jquery.com), [fastclick](https://github.com/ftlabs/fastclick), [what-input](https://github.com/ten1seven/what-input), [node-browserify](https://github.com/substack/node-browserify) (Coming soon)
Icons|[SVG Spritemaps](https://github.com/jkphl/gulp-svg-sprite) supported with [SVG for Everybody](https://github.com/jonathantneal/svg4everybody)
Live Updating|[BrowserSync](http://www.browsersync.io/)
Deployment|FTP with [vinyl-ftp](https://github.com/morris/vinyl-ftp), WebDAV with [dw-webdav](https://www.npmjs.com/package/dwdav) (coming soon)

## Getting Sarted

Clone "Boilerplate Standard" with your favorite Git client:

`https://github.com/matteobertoldo/boilerplate-standard.git`.

Or simply download the package.
To initialize the work environment first you need to install **Node.js** from the official site.
You can download from [this page](https://nodejs.org/en/download/) the latest version of Node.
It's highly recommended that you install the ***LTS version***. "Boilerplate Standard" has been tested by Node version 7+ and is **fully compatible** with the *LTS version*.

Once the Node installation is complete, Gulp's global installation is required. Gulp will be our task manager to use all the tasks.
Type the following command from administrator mode.

```bash
# unix system
sudo npm install gulp -g

# in windows "run as administrator"
npm install gulp -g
```

In Windows there is no `sudo`, you must run the terminal in "Administrator Mode" (right-clicking the program in the UI and choosing "run as administrator").

## Install dependencies

To generate `node_modules` packages, you must download the dependencies that will be read in the `package.json` file.
Then point to the "boilerplate-standard" folder or our project folder with the `cd` command.

```bash
cd /path/to/boilerplate-standard/

# or target your project
cd /path/to/myproject/
```

Once you enter the folder type:
```bash
# unix system
sudo npm install

# in windows "run as administrator"
npm install
```

## Package Manager

Manage the plugins updates with `bower_components`. If you use different package managers you can simply update the resources or the "manager" into `gulp/gulpconfig.js` at `folder.pkg`.

Find your plugin in [bower.io](https://bower.io/search/). In the event that a plugins is not present in "bower components" it will automatically be imported by the folder `app/js/vendor` or configures the import folder in the `workspace.jsVendor` object.
To install Bower:

```bash
# unix system only
sudo npm install bower -g
```

-   For install bower in **Windows** please [read this point](https://github.com/bower/bower#windows-users).
-   For install bower in **Ubuntu** please [read this point](https://github.com/bower/bower#ubuntu-users)

After installing Bower globally and always pointing to our project folder, type:

```bash
bower install
```

The `bower_components` folder will be generated with all plugins read in the `bower.json` file.

You can configure all options in the `gulp/gulpconfig.js` file in the `packageManager` object to handle the import and the plugins. To manage output name and file compression, see `outputPluginsName` & `minifyPlugins`.

## Disable Package Manager

If you don't want to manage plugins with any package manager, simply set `packageManager.manage` in `gulp/gulpconfig.js` by `false` doing so it also performs the import speed. **Therefore ignore the previous step for installing Bower**.

Full documentation coming soon.

## News & Coming Soon Features

-   Nunjucks templating! ***NEW***
-   Browserify JS ***(Coming Soon)***

### License

"Boilerplate Standard" is released under the [MIT](https://opensource.org/licenses/MIT) License.
