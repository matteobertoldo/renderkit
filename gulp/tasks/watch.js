// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const gulp = require('gulp'),
watch = require('gulp-watch'),
conf = require('../gulpconfig'),
sequence = require('run-sequence'),
log = require('fancy-log'),
colors = require('ansi-colors');

let tasks = conf.defaultWatchTasks;
let keys = Object.keys(tasks);

let defaultWatchTasks = keys.filter((key) => {
    return tasks[key];
});

if (conf.syncOptions.browserSync) {
    defaultWatchTasks.push('browser-sync');
}

gulp.task('watch', (done) => {
    if (defaultWatchTasks.length) {
        sequence.apply(null, defaultWatchTasks, done);
        gulp.watch([
            conf.workspace.uikit + '**/*.+(html|nunjucks|njk)',
            conf.uikitOptions.dataFilePath
        ], ['uikit:watch']);
        gulp.watch(conf.workspace.scss, ['sass:watch', 'sassdoc']);
        gulp.watch(conf.workspace.svg, ['svg:watch']);
    } else {
        log(colors.red('Set up at least one task to use `gulp watch`'));
    }
});
