"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const webpack = require("webpack");

/**
 * $ npm i gulp-webpack babel-loader html-loader babel-core  babel-preset-es2015 --save
 */
module.exports = (path) => {
    var task = {};

    task.target = [
        `${path.src}assets/js/**/*`,
    ];

    task.build = (config) => {
        config = Object.assign({},{
            "entry": {
                "common": `${path.src}assets/js/common.js`
            },
            "output": {
                "filename": `[name].bundle.js`
            },
            externals: {
//                "vue": "Vue"
            },
            module: {
                loaders: [
                    { test: /\.js/,exclude: /node_modules/, loader: "babel" ,query:{presets:"es2015"}},
                    { test: /\.html/, loader: "html" }
                ]
            },
            resolve: {
                extensions:["",".js"]
            },
            plugins:[
                //new webpack.optimize.UglifyJsPlugin()
            ],
            dev: true,
            devtool: "source-map"
        },config);
        gulp.src([`${path.src}assets/js/**/*.js`])
            .pipe($.webpack(config))
            .pipe(gulp.dest(`${path.dest}assets/js/`))
    }


    return task;
}
