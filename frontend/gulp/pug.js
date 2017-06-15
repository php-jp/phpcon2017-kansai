"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const {src,dest,jade_option} = global;

const localsResolver = ()=>{
    return new Promise((resolve)=>{
        resolve({})
    })
}

gulp.task("pug",() => {
    localsResolver().then((locals)=>{

        locals.sponsors = require("../assets/data/sponsors.js")
        locals.staffs = require("../assets/data/staffs.js")
        locals.speakers = require("../assets/data/speakers.js")

        let options = (jade_option)?jade_option:{
                locals,
                pretty: true,
                basedir: `${src}assets/tmpl/`,
                filters: {
                }
        };

        let srcPattern = [
            `${src}assets/tmpl/**/*.pug`,
            `!${src}assets/tmpl/**/_*`,
        ];
        return  gulp.src(srcPattern)
            .pipe($.plumber({
                errorHandler: $.notify.onError('<%= error.message %>')
            }))
            .pipe($.pug(options))
            .pipe(gulp.dest(`${dest}/`));
    })
});

gulp.task("pug:reload",(cb)=>{
    const runSequence = require("run-sequence");
    runSequence("pug","server:reload",cb)
})

gulp.task("pug:watch",()=>{
    let target = [
        `${src}assets/tmpl/**/*`,
    ];
    return gulp.watch(target,["pug"])
});

global.watch.push("pug:watch")
global.build.push("pug")
