const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const open = require('open');
const source = require('vinyl-source-stream');
const gulpESLintNew = require('gulp-eslint-new');
const connect = require('gulp-connect');

var config = {
  name: 'CHZ Extension',
  root: 'dist',
  port: 8080,
  devBaseUrl: 'http://localhost',
}

gulp.task('lint', function () {
  return gulp.src('./src/**/*.js')
    .pipe(gulpESLintNew())
    .pipe(gulpESLintNew.format())
    .pipe(gulpESLintNew.failAfterError());
});

gulp.task('build-app', function (done) {
  browserify({ entries: './src/index.js', debug: true }).plugin('css-modulesify', {
    o: config.root + '/chz-extension.css'
  }).transform(babelify)
    .bundle()
    .pipe(source('chz-extension.bundle.js'))
    .pipe(gulp.dest(config.root + '/js/'))
    .on('error', function (err) {
      console.error('Build error:', err);
      done(err);
    })
    .on('end', function () {
      done();
    });
});

gulp.task('build-background', function (done) {
  browserify({ entries: './src/background.js', debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source('background.js'))
    .pipe(gulp.dest(config.root + '/js/'))
    .on('error', function (err) {
      console.error('Background build error:', err);
      done(err);
    })
    .on('end', function () {
      done();
    });
});

gulp.task('build-html', function (done) {
  gulp.src('./popup.html')
    .pipe(gulp.dest(config.root))
    .on('end', function () {
      done();
    });
});

gulp.task('build-manifest', function (done) {
  gulp.src('./manifest.json')
    .pipe(gulp.dest(config.root))
    .on('end', function () {
      done();
    });
});

gulp.task('build-assets', function (done) {
  gulp.src('./icon.svg')
    .pipe(gulp.dest(config.root))
    .on('end', function () {
      done();
    });
});

gulp.task('build', gulp.series('build-app', 'build-background', 'build-html', 'build-manifest', 'build-assets'));

gulp.task('connect', function () {
  connect.server({
    root: config.root,
    port: config.port,
    base: config.devBaseUrl + ':' + config.port,
    livereload: true
  });
});

gulp.task('open', function () {
  gulp.src(config.root + '/index.html')
    .pipe(open('', { url: config.devBaseUrl + ':' + config.port + '/index.html' }));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', gulp.series('build-app', 'build-background'));
  gulp.watch('./popup.html', gulp.series('build-html'));
  gulp.watch('./manifest.json', gulp.series('build-manifest'));
  gulp.watch('./icon.svg', gulp.series('build-assets'));
});

gulp.task('default', gulp.series('build')); 