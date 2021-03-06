// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const folder = {
    assets: 'assets/',
    distribution: 'dist/',
    docs: 'docs/',
    scss: 'scss/',
    uikit: 'uikit/',
};

module.exports = {
    defaultWatchTasks: {
        uikit: true,
        sass: true,
        sassdoc: true,
        copy: true
    },
    workspace: {
        uikit: {
            base: folder.uikit,
            src: folder.assets + 'njk/index.njk',
            data: folder.uikit + 'data/global.json'
        },
        scss: [
            folder.scss + '**/*.scss',
            folder.assets + 'scss/**/*.scss'
        ],
        sassdoc: folder.scss + '**/*.scss'
    },
    distribution: {
        uikit: folder.docs,
        scss: folder.distribution + 'css/',
        sassdoc: folder.docs + 'sassdoc/'
    },
    cssOptions: {
        browsersSupport: [
            '> 1%',
            'last 7 versions'
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
        outputStyle: 'expanded',
        optimizationMinify: true
    },
    uikitOptions: {
        beautify: false,
        indentSize: 4,
        endWithNewline: false,
        minifyInline: true,
        outputExt: '.html'
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
                folder.docs + 'css/**/*.{css,map}',
                folder.docs + 'sassdoc/**/*'
            ]
        },
        dryRun: true,
        forceDelete: false,
        cleanAllGeneratedFiles: true,
        cleanFilesByType: () => {
            return this.generatedFiles.html;
        }
    }
};
