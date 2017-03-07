"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const php = require("gulp-connect-php");
const browserSync = require("browser-sync");

/**
 * npm install browser-sync gulp-connect-php --save
 */
module.exports = (path) => {
    var task = {};

    task.start = (config) => {
        config = Object.assign({},{
            proxy: "127.0.0.1:8000",
            open: "external",
            //notify: false
        },config);

        var server = {
            base: `${path.dest}`,
        }

        php.server(server,() => {
            browserSync(config)
        });

        gulp.watch(`${path.dest}/**/*`, () => {
            setTimeout(function(){
                browserSync.reload();
            },500);
        });
    }

    return task;
}
