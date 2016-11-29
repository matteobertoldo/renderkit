/**
 * @browser-sync task
 * @param: set staticServer {true||false}
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');

gulp.task('browser-sync', function() {
    if(conf.syncOptions.staticServer) {
        global.browserSync.init({
            server: {
                baseDir: './'
            },
            startPath: conf.syncOptions.startPath,
            notify: conf.syncOptions.notification,
            logPrefix: conf.syncOptions.logPrefix
        });
    } else {
        global.browserSync.init({
            proxy: {
                target: conf.syncOptions.proxyName
            },
            notify: conf.syncOptions.notification,
            logPrefix: conf.syncOptions.logPrefix
        });
    }
});
