export const build = () => {
    return app.gulp.src([
        'src/style/style.min.css',
        'src/fonts/**/*',
        'src/*.html',
    ], { base: 'src'})
    .pipe(app.gulp.dest('dist'))
}