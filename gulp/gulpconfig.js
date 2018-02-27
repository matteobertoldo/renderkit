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

// @global options
// -----------------

module.exports = {
    defaultWatchTasks: {
        html: true,
        sass: true,
        svg: true
    },
    workspace: {
        html: folder.workspace + 'uikit/',
        scss: folder.workspace + 'scss/',
        svg: folder.workspace + 'svg/'
    },
    distribution: {
        html: folder.distribution,
        scss: folder.distribution + 'css/',
        svg: folder.distribution + 'images/'
    },
    htmlOptions: {
        dataFilePath: folder.workspace + 'uikit/data/global.json',
        indentSize: 4,
        endWithNewline: false
    },
    cssOptions: {
        browsersSupport: [
            '> 1%',
            'last 6 versions'
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
    cleanOptions: {
        generatedFiles: {
            html: folder.distribution + '*.html',
            css: folder.distribution + 'css/**/*.{css,map}',
            svg: folder.distribution + 'images/**/*.{svg,html}'
        },
        dryRun: false,
        forceDelete: false,
        cleanAllDistributionFiles: true,
        cleanFilesByType: function() {
            return this.generatedFiles.html;
        }
    }
};
