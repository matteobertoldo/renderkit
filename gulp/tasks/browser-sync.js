/**
 * @file browser-sync.js
 * @description Generate a "browser-sync" server. Configure your `static` or `proxy` server.
 * @author mbertoldo@alpenite.com
 */

const gulp = require('gulp'),
conf = require('../gulpconfig');

gulp.task('browser-sync', () => {
    if (conf.syncOptions.staticServer) {
        return global.browserSync.init({
            server: {
                baseDir: './'
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
