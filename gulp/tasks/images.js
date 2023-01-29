export const images = () => {
    return app.gulp.src(app.path.dev.pathIMG)
        .pipe(app.plugins.imagemin([
            app.plugins.imageminGifsicle({interlaced: true}),
            app.plugins.imageminMozjpeg({quality: 75, progressive: true}),
            app.plugins.imageminOptipng({optimizationLevel: 5}),
            app.plugins.imageminSvgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(app.gulp.dest(app.path.build.pathIMG));
}