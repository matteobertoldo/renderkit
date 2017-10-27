/**
 * @gulp watch tasks
 * @return: {tasks}
 * @description: gulp is watching you...
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var conf = require('../gulpconfig');
var sequence = require('run-sequence');
var fs = require('fs');

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
                gutil.log("File '" + gutil.colors.cyan(path) + "' has been changed");
            }

            if (conf.syncOptions.browserSync && conf.syncOptions.reloadBrowsersOnChange) {
                return global.browserSync.reload();
            }
        });
    }
};

// @default tasks
// --------------

var tasks = conf.defaultTasks;
var keys = Object.keys(tasks);

var defaultTasks = keys.filter(function(key) {
    return tasks[key];
});

// @push `browser-sync`
// @param: {bool}
// -------------------

if (conf.syncOptions.browserSync) {
    defaultTasks.push('browser-sync');
}

// @push `deploy-watch`
// @param: {bool}
// -------------------

if (conf.deployOnTheFlyOptions.deployOnTheFly) {
    if (fs.existsSync('./gulp/private/ftp.json')) {
        tasks.push('deploy-watch');
    } else {
        gutil.log("Rename '" + gutil.colors.cyan('gulp/private/ftp.json.access') + "' file into " + gutil.colors.cyan('ftp.json') + " for enable 'Deploy On The Fly' option. And configure your access options.");
    }
}

// @init all events
// @start & enjoy
// -------------------

gulp.task('watch', function(done) {
    if (defaultTasks.length) {
        sequence.apply(null, defaultTasks, done);
        gulp.watch(conf.workspace.html + '**/*.+(html|nunjucks|njk)', ['html:watch']);
        gulp.watch(conf.workspace.scss + '**/*.scss', ['sass:watch']);
        gulp.watch(conf.workspace.js + '**/*.js', ['bundle:watch']);
        gulp.watch(conf.workspace.svg + '**/*.svg', ['svg:watch']);
        stream();
    } else {
        gutil.log(gutil.colors.yellow('Set up at least one task to use `gulp watch`'));
    }
});
