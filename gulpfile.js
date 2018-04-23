const gulp = require('gulp');
const i18next = require('./dist/index');

gulp.task('i18next', function() {
  return gulp.src(['test/templating/*'])
    .pipe(new i18next({
        locales: ['en', 'fr'],
        output: 'test/gulp/locales'
    }))
    .pipe(gulp.dest('./'));
});
