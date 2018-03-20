// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

var folder = {
    workspace: './',
    distribution: 'dist/',
    docs: 'docs/'
};

module.exports = {
    defaultWatchTasks: {
        uikit: true,
        sass: true,
        sassdoc: true,
        svg: true
    },
    workspace: {
        uikit: folder.workspace + 'uikit/',
        scss: folder.workspace + 'scss/**/*.s+(a|c)ss',
        svg: folder.workspace + 'svg/**/*.svg'
    },
    distribution: {
        uikit: folder.docs,
        scss: [
            folder.distribution + 'css/',
            folder.docs + 'renderkit/css/'
        ],
        svg: folder.docs + 'renderkit/svg/'
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
        outputName: 'renderkit',
        outputStyle: 'expanded',
        optimizationMinify: true,
        sassdoc: true,
        sassdocDist: folder.docs + 'sass/'
    },
    uikitOptions: {
        dataFilePath: folder.workspace + 'uikit/data/global.json',
        indentSize: 4,
        endWithNewline: false
    },
    svgOptions: {
        outputName: 'sprite',
        exampleFile: true
    },
    syncOptions: {
        staticServer: true,
        staticServerBaseDir: './',
        startPath: folder.docs + 'index.html',
        proxyName: 'localhost:8888/',
        logPrefix: 'renderkit',
        notification: false
    },
    cleanOptions: {
        generatedFiles: {
            html: folder.docs + '*.html',
            css: folder.distribution + 'css/**/*.{css,map}',
            svg: folder.docs + 'images/**/*.{svg,html}'
        },
        dryRun: true,
        forceDelete: false,
        cleanAllGeneratedFiles: true,
        cleanFilesByType: function() {
            return this.generatedFiles.html;
        }
    }
};
