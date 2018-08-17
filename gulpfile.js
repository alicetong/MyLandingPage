var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function() {
 
    return gulp.src('sass/main.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('css/'));
});
 
gulp.task('buildsass', ['sass'], function() {
    gulp.watch('sass/main.sass', ['sass']);
})