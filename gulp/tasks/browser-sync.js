// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const gulp = require('gulp');
const conf = require('../gulpconfig');

gulp.task('browser-sync', () => {
    if (conf.syncOptions.staticServer) {
        return global.browserSync.init({
            server: {
                baseDir: conf.syncOptions.staticServerBaseDir
            },
            startPath: conf.syncOptions.startPath,
            notify: conf.syncOptions.notification,
            logPrefix: conf.syncOptions.logPrefix
        });
    } else {
        return global.browserSync.init({
            proxy: {
                target: conf.syncOptions.proxyName
            },
            notify: conf.syncOptions.notification,
            logPrefix: conf.syncOptions.logPrefix
        });
    }
});
