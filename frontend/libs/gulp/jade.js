"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const bourbon = require("node-bourbon");
const neat = require("node-neat");

/**
 * $ npm i gulp-jade --save
 */
module.exports = function(path){
    var task = {};

    task.target = [
        `${path.src}assets/tmpl/**/*.jade`,
    ];

    task.build = (options) => {
        options = Object.assign({},{
            locals:{},
            pretty:true
        },options);

        gulp.src([
                `${path.src}assets/tmpl/**/*.jade`,
                `!${path.src}assets/tmpl/**/_*`,
            ])
            .pipe($.plumber({
                errorHandler: $.notify.onError('<%= error.message %>')
            }))
            .pipe($.jade(options))
            .pipe(gulp.dest(`${path.dest}/`));
    }
    return task;
};

