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
    distribution: 'dist/'
};

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
        vendorJS: folder.workspace + 'js/vendor/',
        mainJS: folder.workspace + 'js/main/'
    },
    distribution: {
        base: folder.distribution,
        css: folder.distribution + 'css/',
        images: folder.distribution + folder.assets + 'images/',
        js: folder.distribution + 'js/',
    },
    syncOptions: {
        staticServer: true,
        startPath: folder.distribution + 'uikit.html',
        proxyName: 'localhost:8888/',
        logPrefix: 'standard',
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
        cleanFilesType: generatedFiles.html,
        dryRun: false,
        forceDelete: false
    }
};
