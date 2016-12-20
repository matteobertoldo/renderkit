/**
 * @gulp configuration tasks file
 * @return: {global.options}
 * @author: mbertoldo@alpenite.com
 */

// @global base folders name
// -----------------

var workspace = 'app/';
var assets = 'assets/';
var distribution = 'dist/';

// @global output style for css
// @note: if cssOptions.remPropList it will be ['*'] the entire properties like [`margin`,`padding`] etc it will be converted into rem units.
// -----------------

var outputStyle = {
    nested: 'nested',
    compact: 'compact',
    expanded: 'expanded',
    compressed: 'compressed'
};

// @global generated files on `distribution` folder
// @note: include map extension.
// @note: on `svg` folder can generate an a `html` example file so we can detect it.
// -----------------

var generatedFiles = {
    html: distribution + '*.html',
    css: distribution + 'css/*.{css,map}',
    svg: distribution + 'svg/**/*.{svg,html}',
    js: distribution + 'js/*.{js,map}',
};

module.exports = {
    workspace: {
        html: workspace + 'template/',
        scss: workspace + 'scss/',
        js: workspace + 'js/',
        vendorJS: workspace + 'js/vendor/',
        mainJS: workspace + 'js/main/'
    },
    assets: {
        svg: assets + 'images/icons/svg/'
    },
    distribution: {
        base: distribution,
        css: distribution + 'css/',
        svg: distribution + 'svg/',
        js: distribution + 'js/'
    },
    syncOptions: {
        staticServer: true,
        startPath: distribution + 'uikit.html',
        proxyName: 'localhost:8888/',
        logPrefix: 'standard',
        notification: true
    },
    htmlOptions: {
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
        outputStyle: outputStyle.expanded,
        minifyCSS: true
    },
    jsOptions: {
        outputName: 'app',
        minifyJS: true
    },
    svgOptions: {
        cssRender: false,
        scssRender: false,
        outputName: 'sprite',
        exampleFile: false
    },
    cleanOptions: {
        cleanGlobalDistFiles: true,
        cleanAllFiles: generatedFiles,
        cleanFilesType: generatedFiles.css,
        dryRun: false,
        forceDelete: false
    }
};
