import gulp from "gulp";

// CONFIG IMPORT
import { path } from "./gulp/config/path.js";

// MODULES IMPORT
import browserSync from "browser-sync"
import {deleteAsync} from "del"
import webpack from "webpack-stream";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import autoPrefixer from 'gulp-autoprefixer';
import imagemin from "gulp-imagemin";
import imageminGifsicle from "imagemin-gifsicle"
import imageminMozjpeg from "imagemin-mozjpeg"
import imageminOptipng from "imagemin-optipng"
import imageminSvgo from "imagemin-svgo"

// TASK IMPORT
import { clean } from "./gulp/tasks/clean.js";
import { styles } from "./gulp/tasks/styles.js";
import { scripts, scriptsProduction } from "./gulp/tasks/scripts.js";
import { browser } from "./gulp/tasks/browser.js";
import { images } from './gulp/tasks/images.js';
import { build } from "./gulp/tasks/build.js";



// GLOBAL CONFIG
global.app = {
    gulp: {
        src: gulp.src,
        dest: gulp.dest,
        wach: gulp.watch,
        parallel: gulp.parallel,
        series: gulp.series,
        watch: gulp.watch
    },
    plugins: {
        browserSync: browserSync,
        deleteAsync: deleteAsync,
        webpack: webpack,
        plumber: plumber,
        notify: notify,
        dartSass: dartSass,
        gulpSass: gulpSass,
        concat: concat,
        autoPrefixer: autoPrefixer,
        imagemin: imagemin,
        imageminGifsicle: imageminGifsicle,
        imageminMozjpeg: imageminMozjpeg,
        imageminOptipng: imageminOptipng,
        imageminSvgo: imageminSvgo
    },
    path: path
}

// GULP WATCH
function watching() {
    gulp.watch(['src/style/scss/*.scss'], styles)
    gulp.watch(['src/scripts/index.js','!src/scripts/bundle.js','!src/scripts/bundle.js.map'], scripts)
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
}


// GULP DEFAULT
const _default = gulp.parallel(styles, browser, watching, scripts);
gulp.task('default', _default)

// GULP BUILD
const _build = gulp.series(clean, scriptsProduction, build,images)
gulp.task('build', _build)
