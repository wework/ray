const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const del = require('del');
const rollup = require('rollup');
const rollupConfig = require('./config/rollup.config');

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

gulp.task('sass:compiled', () => {
  function buildStyles(prod) {
    return gulp
      .src('src/ray-core.scss')
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

gulp.task('sass:source', () => {
  const srcFiles = './src/**/*.scss';

  return gulp.src(srcFiles).pipe(gulp.dest('scss'));
});

gulp.task('html:source', () => {
  const srcFiles = './src/**/*.html';

  return gulp.src(srcFiles).pipe(gulp.dest('html'));
});

/**
 * JavaScript Tasks
 */

gulp.task('scripts:umd', () => {
  const srcFiles = ['./src/**/*.js'];
  const babelOpts = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false
        }
      ]
    ],
    plugins: ['@babel/plugin-transform-modules-umd']
  };

  return gulp
    .src(srcFiles)
    .pipe(babel(babelOpts))
    .pipe(gulp.dest('umd/'));
});

gulp.task('scripts:es', () => {
  const srcFiles = ['./src/**/*.js'];
  const babelOpts = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false
        }
      ]
    ]
  };

  return gulp
    .src(srcFiles)
    .pipe(babel(babelOpts))
    .pipe(gulp.dest('es/'));
});

gulp.task('scripts:rollup', () => {
  return rollup.rollup(rollupConfig).then(bundle => {
    return bundle.write(rollupConfig.output);
  });
});

gulp.task(
  'scripts:compiled',
  gulp.series('scripts:rollup', () => {
    const srcFile = './scripts/ray-core.js';

    return gulp
      .src(srcFile)
      .pipe(sourcemaps.init())
      .pipe(rename('ray-core.min.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('scripts'));
  })
);
