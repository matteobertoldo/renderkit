/**
 * @gulp html "nunjucks" task
 * @description: Nunjucks language see more @https://mozilla.github.io/nunjucks/.
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var fs = require('fs');
var path = require('path');
var plumber = require('gulp-plumber');
var nunjucksRender = require('gulp-nunjucks-render');
var htmlBeautify = require('gulp-html-beautify');
var gutil = require('gulp-util');
var data = require('gulp-data');

// @get "data" options
// @param: file
// @return: {String}
// --------------------

var getData = function(file) {
    return JSON.parse(fs.readFileSync(path.resolve(conf.htmlOptions.dataFilePath), 'utf8'));
};
var dataJSON = getData();

gulp.task('html', function() {
    return gulp.src(conf.workspace.html + '*.+(html|nunjucks|njk)')
    .pipe(plumber())
    .pipe(data(dataJSON))
    .pipe(nunjucksRender({
        path: [conf.workspace.html]
    }))
    .on('error', function(err) {
        gutil.log('Error in: ' + gutil.colors.red(err.plugin));
        gutil.log('Message: ' + gutil.colors.red(err.message));
        gutil.log('File: ' + gutil.colors.red(err.fileName));
    })
    .pipe(htmlBeautify({
        indent_size: conf.htmlOptions.indentSize,
        end_with_newline: conf.htmlOptions.endWithNewLine,
    }))
    .pipe(gulp.dest(conf.distribution.html));
});

gulp.task('html:watch', ['html'], function() {
    return global.browserSync.reload();
});
