'use strict';

var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("default", function () {
    return gulp.src([ "index.js", "lib/**/*.js" ], { base: './' })
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '..' }))
        .pipe(gulp.dest("./dist"));
});
