/**
 * @file: gulpconfig.js
 * @description: Global configuration file for `gulp`.
 * @author: mbertoldo@alpenite.com
 */

// @global base folders name
// -----------------

var folder = {
    workspace: 'app/',
    distribution: 'dist/',
    pkg: 'node_modules/'
};

// @global generated files on `distribution` folder
// -----------------

var generatedFiles = {
    html: folder.distribution + '*.html',
    css: folder.distribution + 'css/**/*.{css,map}',
    svg: folder.distribution + 'images/**/*.{svg,html}',
    js: folder.distribution + 'js/**/*.{js,map}'
};

// @global options
// -----------------

module.exports = {
    workspace: {
        html: folder.workspace + 'templates/',
        scss: folder.workspace + 'scss/',
        svg: folder.workspace + 'svg/',
        js: {
            base: folder.workspace + 'js/',
            main: folder.workspace + 'js/main/',
            vendor: folder.workspace + 'js/vendor/'
        }
    },
    distribution: {
        html: folder.distribution,
        scss: folder.distribution + 'css/',
        svg: folder.distribution + 'images/',
        js: {
            base: folder.distribution + 'js/',
            lib: folder.distribution + 'js/lib/'
        }
    },
    defaultWatchTasks: {
        html: true,
        sass: true,
        svg: true,
        bundle: true
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
            folder.workspace + '**/*.{xml,json,txt}'
        ],
        reloadBrowsersOnChange: true
    },
    htmlOptions: {
        dataFilePath: folder.workspace + 'templates/data/global.json',
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
        outputStyle: 'expanded',
        minify: true,
        optimizationMinify: true
    },
    svgOptions: {
        cssRender: false,
        scssRender: false,
        outputName: 'sprite',
        exampleFile: true
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
        browserify: true,
        browserifyBasePath: folder.workspace + 'js/main/',
        browserifyBaseFile: 'main.js',
        outputPluginsName: 'vendor',
        minifyPlugins: true,
        outputBundleName: 'app',
        minifyBundle: true
    },
    packageManager: {
        managePlugins: true,
        src: [
            folder.pkg + 'fastclick/lib/fastclick.js',
            folder.pkg + 'svg4everybody/dist/svg4everybody.js',
            folder.pkg + 'what-input/dist/what-input.js'
        ]
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
        deployOnTheFlyObjects: folder.distribution + '**/*.{html,css,js,json,svg}',
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
