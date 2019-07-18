const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const del = require('del');
const rollup = require('rollup');
const rollupConfig = require('./config/rollup.config');
const babelConfig = require('./babel.config');

const SRC_FILES = ['./src/**/*.js'];
const SASS_SRC_FILES = './src/**/*.scss';

gulp.task('clean', () =>
  del([
    'scss',
    'css',
    'scripts',
    'html',
    'dist',
    'es',
    'umd',
    'storybook-static'
  ])
);

gulp.task('sass:source', () => {
  return gulp.src(SASS_SRC_FILES).pipe(gulp.dest('scss'));
});

gulp.task('sass:compiled', () => {
  function buildStyles(prod) {
    const scssSources = ['src/ray-core.scss'];

    if (!prod) {
      scssSources.push('src/ray-debug.scss');
    }

    return gulp
      .src(scssSources)
      .pipe(concat('ray-core.scss'))
      .pipe(sourcemaps.init())
      .pipe(
        sass({
          outputStyle: prod ? 'compressed' : 'expanded'
        }).on('error', sass.logError)
      )
      .pipe(
        autoprefixer({
          browsers: ['> 1%', 'last 2 versions']
        })
      )
      .pipe(
        rename(filePath => {
          if (prod) {
            // eslint-disable-next-line no-param-reassign
            filePath.extname = `.min${filePath.extname}`;
          }
        })
      )
      .pipe(
        sourcemaps.write('.', {
          includeContent: false,
          sourceRoot: '../src'
        })
      )
      .pipe(gulp.dest('css'));
  }

  return Promise.all([buildStyles(), buildStyles(true)]);
});

gulp.task('scripts:umd', () => {
  const babelOpts = {
    ...babelConfig,
    plugins: [...babelConfig.plugins, '@babel/plugin-transform-modules-umd']
  };

  return gulp
    .src(SRC_FILES)
    .pipe(babel(babelOpts))
    .pipe(gulp.dest('umd/'));
});

gulp.task('scripts:es', () => {
  return gulp
    .src(SRC_FILES)
    .pipe(babel(babelConfig))
    .pipe(gulp.dest('es/'));
});

gulp.task('scripts:rollup', () => {
  return rollup.rollup(rollupConfig).then(bundle => {
    return bundle.write(rollupConfig.output);
  });
});

gulp.task('scripts:rollup:minify', () => {
  const srcFile = './scripts/ray-core.js';

  return gulp
    .src(srcFile)
    .pipe(sourcemaps.init())
    .pipe(rename('ray-core.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('scripts'));
});

gulp.task(
  'scripts:compiled',
  gulp.series('scripts:rollup', 'scripts:rollup:minify')
);
