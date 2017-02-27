var gulp = require('gulp');
var conf = require('../gulpconfig');
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
var ftpconfig = require('../private/ftp.json');

// @ftp options
// @note: all options (https://github.com/morris/vinyl-ftp#ftpcreate-config-)
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
    log: (conf.ftpOptions.log) ? gutil.log : null
});

// @set: deploy global files or deploy by file type.
// @param: {bool}
// --------------------

gulp.task('ftp:deploy', function() {
    return ftpconnection,
    gulp.src(conf.ftpOptions.foldersAndFilesForDeploy, {
        buffer: false
    }).pipe(ftpconnection.newer(conf.ftpOptions.deployOnRemoteFolder))
    .pipe(ftpconnection.dest(conf.ftpOptions.deployOnRemoteFolder));
});

gulp.task('ftp:fileslog', function() {
    return ftpconnection,
    ftpconnection.src(conf.ftpOptions.deployOnRemoteFolder + '**/*', {
        base: '.',
        buffer: true
    });
});