/**
 * @gulpfile tasks managment
 * @required: {node_modules}
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();

global.browserSync = browserSync;

// @requireDir
// @include: [gulp-tasks]
// -----------------

requireDir('./gulp/tasks', {
	recurse: false
});

// @run tasks
// -----------------

gulp.task('default', ['watch']);
