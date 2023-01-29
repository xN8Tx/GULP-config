export function clean() {
    return app.plugins.deleteAsync(app.path.build.pathRoot)
} 