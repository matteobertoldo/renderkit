/**
* @function: manageError()
* @return: {String}
* @description: Show on console a clean & clear errors for UglifyJS2.
*/

var gutil = require('gulp-util');
var manageError = function(err) {
    gutil.log('Error in: ' + gutil.colors.red(err.plugin));
    gutil.log('Message: ' + gutil.colors.red(err.cause.message));
    gutil.log('File: ' + gutil.colors.red(err.fileName));
    gutil.log('Line: ' + gutil.colors.red(err.cause.col));
};

module.exports = manageError;
