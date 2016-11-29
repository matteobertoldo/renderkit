/**
 * @gulp configuration tasks file
 * @return: {global.options}
 * @author: mbertoldo@alpenite.com
 */

// @global folders name
// -----------------

var workspace = 'app/';
var assets = 'assets/';
var distribution = 'dist/';

// @global css config
// @note: if cssOptions.remPropList it will be ['*'] the entire properties like [`margin`,`padding`] etc it will be converted into rem units.
// -----------------

var outputStyle = ['nested', 'compact', 'expanded', 'compressed'];

module.exports = {
    workspace: {
        base: workspace,
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
        outputName: 'style',
        outputStyle: outputStyle[2],
        replaceRemUnit: true,
        unitRemPrecision: 5,
        remPropList: ['font', 'font-size', 'line-height', 'letter-spacing'],
        remMediaQueries: false
    },
    jsOptions: {
        compress: true,
        outputName: 'app'
    },
    svgOptions: {
        cssRender: false,
        scssRender: false,
        outputName: 'sprite',
        exampleFile: false
    }
};
