"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const browserSync = require("browser-sync");

const {src,dest} = global;

gulp.task("server",()=> {

    browserSync({
        server:{
            baseDir:"public",
            index: "index.html",
        },
        open: "external"
    })

    return gulp.watch(`${dest}/**/*`, (e) => {
        setTimeout(function(){
            browserSync.reload();
        },500);
    });
});

gulp.task("server:reload",()=>{
    setTimeout(()=>{
        browserSync.reload();
    },500)
})
