/**
 * @gulp configuration tasks file
 * @global: {objectsFoldersFiles}
 * @param: {String}
 * @return: {global.options}
 * @author: mbertoldo@alpenite.com
 */

// @global base folders name
// -----------------

var folder = {
    workspace: 'app/',
    assets: 'assets/',
    distribution: 'dist/',
    pkg: 'bower_components/'
};

// @global output style for css
// -----------------

var cssOutputStyle = {
    nested: 'nested',
    compact: 'compact',
    expanded: 'expanded',
    compressed: 'compressed'
};

// @global sources for js plugins
// @note: Manage the updates with bower_components. If you use different package managers you can simply update the resources or the "manager" into `folder.pkg`.
// @note: If you do not want to manage plugins with any package manager, simply set the subject packageManager.manage false by doing so it also performs the import speed. In the event that a plugins is not present in bower components it will automatically be caught by the `app/js/vendor`.
// -----------------

var plugins = [
    folder.pkg + 'disable-scroll/dist/disable-scroll.js',
    folder.pkg + 'fastclick/lib/fastclick.js',
    folder.pkg + 'svg4everybody/dist/svg4everybody.js',
    folder.pkg + 'what-input/dist/what-input.js'
];

// @global generated files on `distribution` folder
// @note: include map extension.
// @note: on `svg` folder can generate an a `html` example file so we can detect it.
// -----------------

var generatedFiles = {
    html: folder.distribution + '*.html',
    css: folder.distribution + 'css/*.{css,map}',
    svg: folder.distribution + folder.assets + '/images/**/*.{svg,html}',
    js: folder.distribution + 'js/*.{js,map}',
};

module.exports = {
    workspace: {
        html: folder.workspace + 'template/',
        scss: folder.workspace + 'scss/',
        svg: folder.workspace + folder.assets + 'svg/',
        js: folder.workspace + 'js/',
        vendor: folder.workspace + 'js/vendor/',
        main: folder.workspace + 'js/main/'
    },
    distribution: {
        base: folder.distribution,
        css: folder.distribution + 'css/',
        images: folder.distribution + folder.assets + 'images/',
        js: folder.distribution + 'js/'
    },
    packageManager: {
        manage: true,
        src: plugins
    },
    syncOptions: {
        browserSync: true,
        staticServer: true,
        startPath: folder.distribution + 'uikit.html',
        proxyName: 'localhost:8888/',
        logPrefix: 'bp-standard',
        notification: true
    },
    htmlOptions: {
        prefixVar: '@',
        indentSize: 4,
        endWithNewline: false
    },
    cssOptions: {
        browsersSupport: ['> 1%', 'last 4 versions'],
        flexbox: 'no-2009',
        msGridLayout: false,
        remUnit: true,
        replaceRemUnit: true,
        unitRemPrecision: 5,
        remPropList: ['font', 'font-size', 'line-height', 'letter-spacing'],
        remMediaQueries: false,
        outputName: 'style',
        outputStyle: cssOutputStyle.expanded,
        minify: true
    },
    jsOptions: {
        outputName: 'app',
        minify: true
    },
    svgOptions: {
        cssRender: false,
        scssRender: false,
        outputName: 'sprite',
        exampleFile: false
    },
    cleanOptions: {
        dryRun: false,
        forceDelete: false,
        cleanAllDistFiles: true,
        cleanAllFiles: generatedFiles,
        cleanFilesType: generatedFiles.html
    }
};
