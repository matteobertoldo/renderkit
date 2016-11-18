/**
 * @gulpfile tasks managment
 * @include: devDependencies on package.json
 * @require: {node_modules}
 * @author: mbertoldo@alpenite.com
 */

// @global vars
// -----------------

var gulp = require('gulp'),
include = require('gulp-html-tag-include'),
htmlbeautify = require('gulp-html-beautify'),
sass = require('gulp-sass'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
pxtorem = require('postcss-pxtorem-plus'),
processors = [
    autoprefixer({
        browsers: ['> 1%', 'last 4 versions'],
        flexbox: 'no-2009',
        grid: false
    }),
    pxtorem({
        unitPrecision: 5,
        propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
        mediaQuery: false
    })
],
svgSprite = require('gulp-svg-sprite'),
svgSpriteConfig = {
    mode: {
        symbol: {
            render: {
                css: false,
                scss: false
            },
            dist: './',
            prefix: '.svg--%s',
            sprite: 'sprite.svg',
            example: false
        }
    }
},
cleanCSS = require('gulp-clean-css'),
uglifyJS2 = require('gulp-uglify'),
gulpUtil = require('gulp-util'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
sourcemaps = require('gulp-sourcemaps'),
browserSync = require('browser-sync').create(),
staticServer = true,
WORKSPACE = 'app/',
ASSETS = 'assets/',
DIST = 'dist/';

// @html task
// -----------------

gulp.task('html', function() {
    gulp.src(WORKSPACE + 'template/*.html')
    .pipe(include({
        prefixVar: '@'
    })).on('error', gulpUtil.log)
    .pipe(htmlbeautify({
        indent_size: 4,
        end_with_newline: false,
    }))
    .pipe(gulp.dest(DIST))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// @scss task
// -----------------

gulp.task('sass', function() {
    gulp.src(WORKSPACE + 'scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(DIST + 'css/'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// @build ´app.js´ file
// -----------------

gulp.task('app', function() {
    gulp.src([WORKSPACE + 'js/vendor/**/*.js', WORKSPACE + 'js/main/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(uglifyJS2({
        compress: true
    })).on('error', gulpUtil.log)
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(DIST + 'js/'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// @svg sprite task
// -----------------

gulp.task('sprite', function() {
    gulp.src(ASSETS + 'images/icons/svg/**/*.svg')
    .pipe(svgSprite(svgSpriteConfig))
    .pipe(gulp.dest(DIST + 'svg/'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// @sync task
// @gulp is watching you...
// -----------------

gulp.task('sync', function() {
    if(staticServer) {
        browserSync.init({
            logPrefix: 'standard',
            server: {
                baseDir: './'
            },
            startPath: DIST,
            notify: true
        });
    } else {
        browserSync.init({
            logPrefix: 'standard',
            proxy: {
                target: 'localhost:8888/built/standard/' + DIST
            },
            notify: true
        });
    }

    gulp.watch(WORKSPACE + 'template/**/*.html', ['html']);
    gulp.watch(WORKSPACE + 'scss/**/*.scss', ['sass']);
    gulp.watch(WORKSPACE + 'js/**/*.js', ['app']);
    gulp.watch(ASSETS + 'images/icons/svg/**/*.svg', ['sprite']);
});

// @play
// -----------------

gulp.task('default', ['html', 'sass', 'app', 'sprite', 'sync']);
