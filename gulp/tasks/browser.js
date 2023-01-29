
export const browser = () => {
    app.plugins.browserSync.init({
        server: {
            baseDir: 'src/',
        },
        port: 80
    })
}