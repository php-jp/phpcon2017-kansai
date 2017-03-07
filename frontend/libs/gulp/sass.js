"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const bourbon = require("node-bourbon");
const neat = require("node-neat");

/**
 * $ npm i gulp-sass node-bourbon node-neat gulp-pleeease --save
 */
module.exports = function(path){

    var task = {};

    task.target = [
        `${path.src}assets/scss/**/*.scss`
    ];

    task.bourbon = (options) => {
        options = Object.assign({},{
            sourceMap: true,
            includePaths: bourbon.with(neat.includePaths)
        },options);

        gulp
            .src([
                `${path.src}assets/scss/**/*.scss`,
                `!${path.src}assets/scss/**/_*`,
            ])
            .pipe($.plumber({
                errorHandler: $.notify.onError('<%= error.message %>')
            }))
            .pipe($.sass(options))
            .pipe(gulp.dest(`${path.dest}assets/css/`));
    }

    return task;
};