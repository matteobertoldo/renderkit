// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

import gulp from 'gulp';
import requireDir from 'require-dir';
import browserSync from 'browser-sync';

global.browserSync = browserSync.create();

requireDir('./gulp/tasks', {
	recurse: false
});

gulp.task('default', ['watch']);
