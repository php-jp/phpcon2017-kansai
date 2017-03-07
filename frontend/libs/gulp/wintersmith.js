"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const browserSync = require("browser-sync");

const wintersmith = require("wintersmith");

/**
 * configurations are see https://github.com/jnordberg/wintersmith/blob/master/src/core/config.coffee
 */
module.exports = (path) => {
    var task = {};

    task.preview = (configPath) => {
        var env = wintersmith(configPath);

        env.preview(function(error,server){
            //console.log("hoge",server);
        })

        browserSync.init({
            proxy: "http://localhost:8080",
            open:"external",
            notify: false
        });
        gulp.watch([
            `${path.src}/**/*`
        ], function(){
            setTimeout(function(){
                browserSync.reload();
            },500);
        });
    }

    task.build = (configPath) => {
        var env = wintersmith(configPath);

        env.build((error) => {
            if (error) throw error;
            console.log('Done!');
        });

    }


    return task;
}