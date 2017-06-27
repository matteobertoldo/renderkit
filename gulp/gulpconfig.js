/**
 * @gulp configuration tasks file
 * @param: {String}
 * @return: {global.options}
 * @author: mbertoldo@alpenite.com
 */

// @global base folders name
// -----------------

var folder = {
    root: './',
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
    expanded: 'expanded'
};

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
    defaultTasks: ['html', 'sass', 'svg', 'bundle'],
    workspace: {
        html: folder.workspace + 'template/',
        scss: folder.workspace + 'scss/',
        svg: folder.workspace + folder.assets + 'svg/',
        js: folder.workspace + 'js/',
        jsVendor: folder.workspace + 'js/vendor/',
        jsMain: folder.workspace + 'js/main/'
    },
    distribution: {
        html: folder.distribution,
        scss: folder.distribution + 'css/',
        svg: folder.distribution + folder.assets + 'images/',
        js: folder.distribution + 'js/',
        jsLib: folder.distribution + 'js/lib/'
    },
    syncOptions: {
        browserSync: true,
        staticServer: true,
        startPath: folder.distribution + 'uikit.html',
        proxyName: 'localhost:8888/',
        logPrefix: 'bp-standard',
        notification: false,
        stream: true,
        streamLog: true,
        streamFoldersToWatch: [
            folder.workspace + '**/*.{xml,txt}'
        ],
        reloadBrowsersOnChange: true
    },
    htmlOptions: {
        prefixVar: '@',
        indentSize: 4,
        endWithNewline: false
    },
    cssOptions: {
        browsersSupport: [
            '> 1%',
            'last 4 versions'
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
        singleOutput: true,
        outputName: 'style',
        outputStyle: cssOutputStyle.expanded,
        minify: true,
        optimizationMinify: true
    },
    packageManager: {
        managePlugins: true,
        src: [
            folder.pkg + 'disable-scroll/dist/disable-scroll.js',
            folder.pkg + 'fastclick/lib/fastclick.js',
            folder.pkg + 'svg4everybody/dist/svg4everybody.js',
            folder.pkg + 'what-input/dist/what-input.js'
        ]
    },
    jsOptions: {
        libs: [
            folder.pkg + 'jquery/dist/jquery.js'
        ],
        minifyLibs: true,
        modernizr: true,
        modernizrCustomOptions: true,
        customizr: {
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
        },
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
    ftpOptions: {
        sftpConnection: false,
        parallelUploads: 5,
        cacheReload: false,
        debugMode: false,
        log: true,
        baseFolderForDeploy: folder.distribution,
        folderAndFilesForDeploy: folder.distribution + '**/*',
        deployOnRemoteFolder: folder.distribution,
        remoteFolderToDelete: folder.distribution
    },
    deployOnTheFlyOptions: {
        deployOnTheFly: false,
        deployOnTheFlyFolder: folder.distribution,
        deployOnTheFlyObjects: folder.distribution + '**/*.{html,css,js,svg,txt}',
        ignoreDotFiles: true,
        ignoreInitialRun: false
    },
    cleanOptions: {
        dryRun: true,
        forceDelete: false,
        cleanAllDistributionFiles: true,
        cleanAllFiles: generatedFiles,
        cleanFilesByType: generatedFiles.html
    }
};
