export const styles = () => {
    const sass = app.plugins.gulpSass(app.plugins.dartSass);

    return app.gulp.src(app.path.dev.pathSCSS)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(app.plugins.concat('style.min.css'))
        .pipe(app.plugins.autoPrefixer({ overrideBrowserslist: [ 'last 10 version' ], grid: true }))
        .pipe(app.gulp.dest(app.path.dev.pathCSS))
        .pipe(app.plugins.browserSync.stream());
}