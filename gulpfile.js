"use strict"
/**
 * common installers
 * npm i gulp gulp-load-plugins gulp-plumber gulp-notify run-sequence --save
 */
var gulp = require("gulp");
var runSequence = require("run-sequence");

var src = "./frontend/";
if(process.env.APP_MODE=="build"){
    var dest = "./build/";
}else{
    var dest = "./public/";
}

var tasks = {};
[
    "sass",
    "jade",
    "webpack",
    "browserSync"
    //"wintersmith"
].forEach((taskName) => {
    tasks[taskName] = require(`./frontend/libs/gulp/${taskName}.js`)({src,dest})
})

gulp.task("sass",()=> tasks.sass.bourbon());
gulp.task("watch:sass",()=> gulp.watch(tasks.sass.target,["sass"]) );

gulp.task("jade",()=> tasks.jade.build({}));
gulp.task("watch:jade",()=> gulp.watch(tasks.jade.target,["jade"]) );

gulp.task("webpack",() => tasks.webpack.build());
gulp.task("watch:webpack",() => gulp.watch(tasks.webpack.target,["webpack"]) );

//gulp.task("ws:preview",() => tasks.wintersmith.preview("./wintersmith.json"));
//gulp.task("ws:build",  () => tasks.wintersmith.build("./wintersmith.json"));

gulp.task("server",() => tasks.browserSync.start());

gulp.task("watch",[
    "watch:sass",
    "watch:jade",
    "watch:webpack",
    "server"
]);

gulp.task("build",function(cb){
    runSequence([
        "sass",
        "jade",
        //"webpack"
    ],cb);
});

gulp.task("default",["watch"])
