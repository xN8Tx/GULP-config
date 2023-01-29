export const scripts = () => {
    return app.gulp.src(app.path.dev.pathJS)
        .pipe(app.plugins.plumber({
            errorHandler:
                app.plugins.notify.onError({
                    title: 'JavaScript Error',
                    message: 'Error: <%= error.message %>'
                })
            }
        ))
        .pipe(
            app.plugins.webpack({
                    mode: 'development',
                    output: {
                        filename: 'bundle.js'
                    },
                    devtool: 'source-map'

            })
        )
        .pipe(app.gulp.dest(app.path.dev.pathBunJS))
        .pipe(app.plugins.browserSync.stream());
}

export const scriptsProduction = () => {
    return app.gulp.src(app.path.dev.pathJS)
        .pipe(
            app.plugins.webpack({
                    mode: 'production',
                    output: {
                        filename: 'bundle.js'
                    }
            })
        )
        .pipe(app.gulp.dest(app.path.build.pathJS))
}
