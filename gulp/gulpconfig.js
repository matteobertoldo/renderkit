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

// @global Modernizr custom options
// @based on https://modernizr.com/download#setclasses
// -----------------

var customizr = {
    'classPrefix': '',
    'options': [
        'addTest',
        'mq',
        'setClasses',
        'testAllProps',
        'testProp'
    ],
    'feature-detects': [
        'css/flexbox',
        'css/flexboxtweener',
        'css/objectfit',
        'css/transitions',
        'hashchange',
        'touchevents'
    ]
};

// @global sources for js plugins
// -----------------

var plugins = [
    folder.pkg + 'disable-scroll/dist/disable-scroll.js',
    folder.pkg + 'fastclick/lib/fastclick.js',
    folder.pkg + 'svg4everybody/dist/svg4everybody.js',
    folder.pkg + 'what-input/dist/what-input.js'
];

// @global generated files on `distribution` folder
// -----------------

var generatedFiles = {
    html: folder.distribution + '*.html',
    css: folder.distribution + 'css/**/*.{css,map}',
    svg: folder.distribution + folder.assets + '/images/**/*.{svg,html}',
    js: folder.distribution + 'js/**/*.{js,map}'
};

// @global options
// -----------------

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
        js: folder.distribution + 'js/',
        lib: folder.distribution + 'js/lib/'
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
        browsersSupport: [
            '> 1%',
            'last 4 versions',
            'iOS >= 8',
            'IE >= 10',
            'Safari >= 7',
        ],
        flexbox: 'no-2009',
        msGridLayout: false,
        remUnit: true,
        replaceRemUnit: true,
        unitRemPrecision: 5,
        remPropList: [
            'font',
            'font-size',
            'line-height',
            'letter-spacing'
        ],
        remMediaQueries: false,
        outputName: 'style',
        outputStyle: cssOutputStyle.expanded,
        minify: true
    },
    packageManager: {
        managePlugins: true,
        src: plugins
    },
    jsOptions: {
        jQuery: folder.pkg + 'jquery/dist/jquery.js',
        minifyjQuery: true,
        modernizrCustomOptions: true,
        customizr: customizr,
        minifyModernizr: true,
        outputPluginsName: 'app',
        minifyPlugins: true
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
        cleanAllDistFiles: false,
        cleanAllFiles: generatedFiles,
        cleanFilesType: generatedFiles.css
    }
};
