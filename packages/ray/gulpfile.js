const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

gulp.task('clean', () => del(['scss', 'css', 'scripts', 'html', 'dist']));

gulp.task('sass:compiled', () => {
  function buildStyles(prod) {
    return gulp
      .src('lib/application.scss')
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
  const srcFiles = './lib/**/*.scss';

  return gulp.src(srcFiles).pipe(gulp.dest('scss'));
});

gulp.task('html:source', () => {
  const srcFiles = './lib/**/*.html';

  return gulp.src(srcFiles).pipe(gulp.dest('html'));
});
