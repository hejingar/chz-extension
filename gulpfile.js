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

gulp.task('build', function (done) {
  browserify({ entries: './src/index.js', debug: true }).plugin('css-modulesify', {
    o: config.root + '/chz-extension.css'
  }).transform(babelify)
    .bundle()
    .pipe(source('chz-extension.bundle.js'))
    .pipe(gulp.dest(config.root + '/js'))
    .pipe(connect.reload());

  done();
});

gulp.task('copy-manifest', function (done) {
  gulp.src('./manifest.json')
    .pipe(gulp.dest(config.root));

  done()
});

gulp.task('copy-html', function (done) {
  gulp.src('./popup.html')
    .pipe(gulp.dest(config.root));

  done()
});

gulp.task('copy-icons', function (done) {
  gulp.src('./icon.svg')
    .pipe(gulp.dest(config.root));

  done()
});

gulp.task('connect', function (done) {
  connect.server({
    name: 'CHZ Extension',
    root: 'dist',
    port: config.port,
    devBaseUrl: config.devBaseUrl,
    livereload: true
  });

  open(`${config.devBaseUrl}:${config.port}`)

  done();
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', gulp.series('lint', 'build'));
  gulp.watch('./src/**/*.css', gulp.series('build'));
  gulp.watch('./manifest.json', gulp.series('copy-manifest'));
  gulp.watch('./popup.html', gulp.series('copy-html'));
});

gulp.task('default', gulp.series('copy-manifest', 'copy-html', 'copy-icons', 'build')); 