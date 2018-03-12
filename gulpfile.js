/**
 * @file: gulpfile.js
 * @description: `gulpfile.js` for RenderKit
 * @author: mbertoldo@alpenite.com
 */

const gulp = require('gulp');
const requireDir = require('require-dir');
const browserSync = require('browser-sync').create();

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
