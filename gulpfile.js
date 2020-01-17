const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const rimraf = require('rimraf');
const sass = require('gulp-sass');
const runSequence = require('run-sequence').use(gulp);
const spritesmith = require('gulp.spritesmith');
const rename = require('gulp-rename');

/* -------- Server  -------- */
gulp.task('server', function () {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: 'public/assets'
        }
    });

    gulp.watch('app/assets/**/**/*', ['build']);
});

/* ------------ Styles compile ------------- */
gulp.task('css:compile', function () {
    return gulp
        .src('app/assets/scss/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('public/assets/css'));
});

/* ------------ html compile ------------- */
gulp.task('html', function () {
    return gulp.src('app/assets/*.html').pipe(gulp.dest('public/assets'));
});

/* ------------ Sprite ------------- */
gulp.task('sprite', function (cb) {
    const spriteData = gulp.src('app/assets/img/*.png').pipe(
        spritesmith({
            imgName: 'sprite.png',
            imgPath: '../img/sprite.png',
            cssName: 'sprite.scss'
        })
    );

    spriteData.img.pipe(gulp.dest('public/img/'));
    spriteData.css.pipe(gulp.dest('app/sass/global/'));
    cb();
});

/* ------------ Copy fonts ------------- */
gulp.task('copy:fonts', function () {
    return gulp.src('app/assets/fonts/**/*.*').pipe(gulp.dest('public/fonts'));
});

/* ------------ Copy images ------------- */
gulp.task('copy:img', function () {
    return gulp.src('app/assets/img/**/*.*').pipe(gulp.dest('build/img'));
});

/* ------------ Build process ------------- */
gulp.task('build', function (callback) {
    runSequence(
        'clean',
        ['css:compile', 'html', 'copy:fonts', 'copy:img', 'browserify'],
        'reload-browser',
        callback
    );
});

/* ------------ Reload browser ------------- */
gulp.task('reload-browser', function () {
    browserSync.reload();
});

/* ------------ JS compile ------------- */
gulp.task('browserify', function () {
    return gulp.src('app/assets/js/*').pipe(gulp.dest('public/js/'))
});

/* ------------ Delete ------------- */
gulp.task('clean', function del(cb) {
    return rimraf('./public/css', cb);
});