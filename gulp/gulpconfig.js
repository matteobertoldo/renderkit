// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

var folder = {
    assets: 'assets/',
    distribution: 'dist/',
    docs: 'docs/',
    scss: 'scss/',
    svg: 'svg/',
    uikit: 'uikit/',
};

module.exports = {
    defaultWatchTasks: {
        uikit: true,
        sass: true,
        sassdoc: true,
        svg: true
    },
    workspace: {
        uikit: {
            base: folder.uikit,
            src: folder.uikit + '*.+(html|nunjucks|njk)',
            data: folder.uikit + 'data/global.json'
        },
        scss: [
            folder.scss + '**/*.s+(a|c)ss',
            folder.assets + '**/*.s+(a|c)ss'
        ],
        sassdoc: folder.scss + '**/*.s+(a|c)ss',
        svg: folder.svg + '**/*.svg',
    },
    distribution: {
        uikit: folder.docs,
        scss: [
            folder.distribution + 'css/',
            folder.docs + 'renderkit/css/'
        ],
        sassdoc: folder.docs + 'sass',
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
        singleOutput: false,
        outputStyle: 'expanded',
        optimizationMinify: true
    },
    uikitOptions: {
        indentSize: 4,
        endWithNewline: false,
        minifyInline: true
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
            css: [
                folder.distribution + 'css/**/*.{css,map}',
                folder.docs + 'renderkit/css/**/*.{css,map}'
            ],
            svg: folder.docs + 'renderkit/svg/**/*.{svg,html}'
        },
        dryRun: true,
        forceDelete: false,
        cleanAllGeneratedFiles: true,
        cleanFilesByType: function() {
            return this.generatedFiles.html;
        }
    }
};
