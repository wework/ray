const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rollup = require('rollup');

const rollupConfig = require('./config/rollup.config');
const babelConfig = require('./babel.config');

const DIST_PATH = 'dist';
const SRC_FILES = ['./src/**/!(*.test).js '];

gulp.task('scripts:umd', () => {
  return gulp
    .src(SRC_FILES)
    .pipe(babel(babelConfig))
    .pipe(gulp.dest(`${DIST_PATH}/umd`));
});

gulp.task('scripts:es', () => {
  return gulp
    .src(SRC_FILES)
    .pipe(babel(babelConfig))
    .pipe(gulp.dest(`${DIST_PATH}/es`));
});

gulp.task('scripts:rollup', () => {
  return rollup.rollup(rollupConfig).then(bundle => {
    return bundle.write(rollupConfig.output);
  });
});

gulp.task('scripts:rollup:minify', () => {
  const srcFile = `./${DIST_PATH}/index.bundle.js`;

  return gulp
    .src(srcFile)
    .pipe(sourcemaps.init())
    .pipe(rename('index.bundle.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${DIST_PATH}/`));
});

gulp.task(
  'scripts:compiled',
  gulp.series('scripts:rollup', 'scripts:rollup:minify')
);
