const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const open = require('open');
const source = require('vinyl-source-stream');
const gulpESLintNew = require('gulp-eslint-new');
const connect = require('gulp-connect');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const fs = require('fs');

var config = {
  name: 'GoodStake',
  root: 'dist',
  chromeRoot: 'dist-chrome',
  firefoxRoot: 'dist-firefox',
  port: 8080,
  devBaseUrl: 'http://localhost',
}

gulp.task('lint', function () {
  return gulp.src('./src/**/*.js')
    .pipe(gulpESLintNew())
    .pipe(gulpESLintNew.format())
    .pipe(gulpESLintNew.failAfterError());
});

// Build CSS with Tailwind processing
gulp.task('build-css', function () {
  return gulp.src('./src/index.css')
    .pipe(postcss())
    .pipe(rename('chz-extension.css'))
    .pipe(gulp.dest(config.root));
});

gulp.task('build-css-chrome', function () {
  return gulp.src('./src/index.css')
    .pipe(postcss())
    .pipe(rename('chz-extension.css'))
    .pipe(gulp.dest(config.chromeRoot));
});

gulp.task('build-css-firefox', function () {
  return gulp.src('./src/index.css')
    .pipe(postcss())
    .pipe(rename('chz-extension.css'))
    .pipe(gulp.dest(config.firefoxRoot));
});

gulp.task('build-app', function (done) {
  browserify({ entries: './src/index.js', debug: true })
    .transform(babelify)
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

gulp.task('build-app-chrome', function (done) {
  browserify({ entries: './src/index.js', debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source('chz-extension.bundle.js'))
    .pipe(gulp.dest(config.chromeRoot + '/js/'))
    .on('error', function (err) {
      console.error('Chrome build error:', err);
      done(err);
    })
    .on('end', function () {
      done();
    });
});

gulp.task('build-app-firefox', function (done) {
  browserify({ entries: './src/index.js', debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source('chz-extension.bundle.js'))
    .pipe(gulp.dest(config.firefoxRoot + '/js/'))
    .on('error', function (err) {
      console.error('Firefox build error:', err);
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

gulp.task('build-background-chrome', function (done) {
  browserify({ entries: './src/background.js', debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source('background.js'))
    .pipe(gulp.dest(config.chromeRoot + '/js/'))
    .on('error', function (err) {
      console.error('Chrome background build error:', err);
      done(err);
    })
    .on('end', function () {
      done();
    });
});

gulp.task('build-background-firefox', function (done) {
  browserify({ entries: './src/background.js', debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source('background.js'))
    .pipe(gulp.dest(config.firefoxRoot + '/js/'))
    .on('error', function (err) {
      console.error('Firefox background build error:', err);
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

gulp.task('build-html-chrome', function (done) {
  gulp.src('./popup.html')
    .pipe(gulp.dest(config.chromeRoot))
    .on('end', function () {
      done();
    });
});

gulp.task('build-html-firefox', function (done) {
  gulp.src('./popup.html')
    .pipe(gulp.dest(config.firefoxRoot))
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

gulp.task('build-manifest-chrome', function (done) {
  gulp.src('./manifest.chrome.json')
    .pipe(rename('manifest.json'))
    .pipe(gulp.dest(config.chromeRoot))
    .on('end', function () {
      done();
    });
});

gulp.task('build-manifest-firefox', function (done) {
  gulp.src('./manifest.firefox.json')
    .pipe(rename('manifest.json'))
    .pipe(gulp.dest(config.firefoxRoot))
    .on('end', function () {
      done();
    });
});

gulp.task('build-assets', function (done) {
  gulp.src(['./icon.svg', './1.png', './2.png'])
    .pipe(gulp.dest(config.root))
    .on('end', function () {
      done();
    });
});

gulp.task('build-assets-chrome', function (done) {
  gulp.src(['./icon.svg', './1.png', './2.png'])
    .pipe(gulp.dest(config.chromeRoot))
    .on('end', function () {
      done();
    });
});

gulp.task('build-assets-firefox', function (done) {
  gulp.src(['./icon.svg', './1.png', './2.png'])
    .pipe(gulp.dest(config.firefoxRoot))
    .on('end', function () {
      done();
    });
});

// Create directories if they don't exist
gulp.task('create-dirs', function (done) {
  if (!fs.existsSync(config.root)) {
    fs.mkdirSync(config.root, { recursive: true });
  }
  if (!fs.existsSync(config.root + '/js')) {
    fs.mkdirSync(config.root + '/js', { recursive: true });
  }
  done();
});

gulp.task('create-dirs-chrome', function (done) {
  if (!fs.existsSync(config.chromeRoot)) {
    fs.mkdirSync(config.chromeRoot, { recursive: true });
  }
  if (!fs.existsSync(config.chromeRoot + '/js')) {
    fs.mkdirSync(config.chromeRoot + '/js', { recursive: true });
  }
  done();
});

gulp.task('create-dirs-firefox', function (done) {
  if (!fs.existsSync(config.firefoxRoot)) {
    fs.mkdirSync(config.firefoxRoot, { recursive: true });
  }
  if (!fs.existsSync(config.firefoxRoot + '/js')) {
    fs.mkdirSync(config.firefoxRoot + '/js', { recursive: true });
  }
  done();
});

// Updated build tasks to include CSS processing
gulp.task('build', gulp.series('create-dirs', 'build-css', 'build-app', 'build-background', 'build-html', 'build-manifest', 'build-assets'));

gulp.task('build-chrome', gulp.series('create-dirs-chrome', 'build-css-chrome', 'build-app-chrome', 'build-background-chrome', 'build-html-chrome', 'build-manifest-chrome', 'build-assets-chrome'));

gulp.task('build-firefox', gulp.series('create-dirs-firefox', 'build-css-firefox', 'build-app-firefox', 'build-background-firefox', 'build-html-firefox', 'build-manifest-firefox', 'build-assets-firefox'));

gulp.task('build-all', gulp.series('build-chrome', 'build-firefox'));

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
  gulp.watch('./src/**/*.css', gulp.series('build-css'));
  gulp.watch('./popup.html', gulp.series('build-html'));
  gulp.watch('./manifest.json', gulp.series('build-manifest'));
});

gulp.task('default', gulp.series('build'));