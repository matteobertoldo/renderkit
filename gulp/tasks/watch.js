/**
 * @file watch.js
 * @description gulp is watching you...
 * @author mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var watch = require('gulp-watch');
var conf = require('../gulpconfig');
var sequence = require('run-sequence');
var fs = require('fs');
var log = require('fancy-log');
var colors = require('ansi-colors');

// @watch stream configuration
// @return: browserSync.reload()
// -------------------

var stream = function() {
    if (conf.syncOptions.stream) {
        return watch(conf.syncOptions.streamFoldersToWatch, {
            ignoreInitial: true,
            cwd: process.cwd()
        }).on('change', function(path) {
            if (conf.syncOptions.streamLog) {
                log("File '" + colors.cyan(path) + "' has been changed");
            }

            if (conf.syncOptions.browserSync && conf.syncOptions.reloadBrowsersOnChange) {
                return global.browserSync.reload();
            }
        });
    }
};

// @default watch tasks
// --------------

var tasks = conf.defaultWatchTasks;
var keys = Object.keys(tasks);

var defaultWatchTasks = keys.filter(function(key) {
    return tasks[key];
});

// @push `browser-sync`
// @param {bool}
// -------------------

if (conf.syncOptions.browserSync) {
    defaultWatchTasks.push('browser-sync');
}

// @init all events
// @start & enjoy
// -------------------

gulp.task('watch', function(done) {
    if (defaultWatchTasks.length) {
        sequence.apply(null, defaultWatchTasks, done);
        gulp.watch(conf.workspace.html + '**/*.+(html|nunjucks|njk)', ['html:watch']);
        gulp.watch(conf.workspace.scss + '**/*.scss', ['sass:watch']);
        gulp.watch(conf.workspace.svg + '**/*.svg', ['svg:watch']);
        stream();
    } else {
        log(colors.yellow('Set up at least one task to use `gulp watch`'));
    }
});
