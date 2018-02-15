/**
* @function manageError()
* @return {String}
* @description Show on console a clean & clear errors for UglifyJS2.
*/

var log = require('fancy-log');
var colors = require('ansi-colors');

var manageError = function(err) {
    log('Error in: ' + colors.red(err.plugin));
    log('Message: ' + colors.red(err.cause.message));
    log('File: ' + colors.red(err.fileName));
    log('Line: ' + colors.red(err.cause.col));
};

module.exports = manageError;
