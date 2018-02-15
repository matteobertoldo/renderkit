/**
 * @file ftp.js
 * @return {stream}
 * @author mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var ftp = require('vinyl-ftp');
var log = require('fancy-log');
var colors = require('ansi-colors');

try {
    var ftpconfig = require('../private/ftp.json');
} catch (err) {
    var ftpconfig = {};
}

// @ftp `create` options
// @return {Obj}
// --------------------

var ftpconnection = ftp.create({
    secure: conf.ftpOptions.sftpConnection,
    host: ftpconfig.host,
    user: ftpconfig.user,
    password: ftpconfig.password,
    port: ftpconfig.port,
    parallel: conf.ftpOptions.parallelUploads,
    reload: conf.ftpOptions.cacheReload,
    debug: conf.ftpOptions.debugMode,
    log: (conf.ftpOptions.log) ? log : null
});

// @function addftpElem
// @return [stream]
// -------------------

var addftpElem = function(fullpath) {
    return gulp.src(fullpath, {
        base: conf.deployOnTheFlyOptions.deployOnTheFlyFolder,
        buffer: false
    }).pipe(ftpconnection.newer(conf.ftpOptions.deployOnRemoteFolder))
    .pipe(ftpconnection.dest(conf.ftpOptions.deployOnRemoteFolder));
};

// @deploy ftp options
// @return [stream]
// --------------------

gulp.task('ftp:deploy', function() {
    return ftpconnection,
    gulp.src(conf.ftpOptions.folderAndFilesForDeploy, {
        buffer: false
    }).pipe(ftpconnection.newer(conf.ftpOptions.deployOnRemoteFolder))
    .pipe(ftpconnection.dest(conf.ftpOptions.deployOnRemoteFolder))
    .pipe(ftpconnection.clean(conf.ftpOptions.deployOnRemoteFolder + '**', conf.ftpOptions.baseFolderForDeploy));
});

gulp.task('ftp:cleandir', function() {
    return ftpconnection,
    ftpconnection.rmdir(conf.ftpOptions.remoteFolderToDelete, function(err) {
        if (err) {
            log(colors.red(err));
        } else {
            return;
        }
    });
});

// @export ftp connection, host & functions
// --------------------

module.exports = {
    ftpconnection: ftpconnection,
    ftphost: ftpconfig.host,
    addftpElem: addftpElem
};
