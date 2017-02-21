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
    log: (conf.ftpOptions.logMode) ? gutil.log : null
});

// @set: deploy global files or deploy by file type.
// @param: {bool}
// --------------------

var localfiles = (conf.ftpOptions.fullFolderForDeploy) ? conf.ftpOptions.folderForDeploy + '**/*' : conf.ftpOptions.deployByFile;

gulp.task('deploy:ftp', function() {
    return ftpconnection, gulp.src(localfiles)
    .pipe(ftpconnection.newer(conf.ftpOptions.deployRemoteFolder))
    .pipe(ftpconnection.clean(localfiles, conf.ftpOptions.deployRemoteFolder))
    .pipe(ftpconnection.dest(conf.ftpOptions.deployRemoteFolder));
});
