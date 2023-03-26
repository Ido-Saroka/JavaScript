/*
 * @description Main entry point for defining Gulp tasks and Gulp plugin usage.
 * Additional information and resources:
 * https://go.microsoft.com/fwlink/?LinkId=518007
 * Gulp 4.0 Tutorial 2020 - https://www.youtube.com/watch?v=ssG5mziTF3E
 */

//Required dependencies
const gulp = require('gulp');
const concat = require('gulp-concat');


const { src, watch, parallel, series } = require('gulp');

/**
 * watchTask - Used for performing required operations when a change occurs on specific paths
 * */
function watchTask() {
    watch([jsFilesPath], { interval: 500 }, gulp.series('performJSOperations'));
}


/**
 * @description Task is used to run JS task in an async way (used for solving the error: "Did you forget to signal async completion?").
 * */
gulp.task('performJSOperations', (done) => {
    jsTask();
    done();
  });


// #region JS Build Functions

//* */*.js - get js files from the src folder and all subfolders
const jsFilesPath = 'src/**/*.js';

// Output path for the produced files
const outputPath = './build/';

// Final build js file name
const finalJsFileName = 'built.js';

function jsTask() {
    //Get all js files from project dir
    let jsSrcStream = src().on('error', handleError);
    
    //Piped operations
    jsSrcStream = jsSrcStream
    .pipe(concat(finalJsFileName))
    .on('error', handleError);
    
    // copy the files to the output path
    jsSrcStream.pipe(gulp.dest(outputPath));

}
// #endregion


// #region General Functions
/**
 * @description used for error handling received from various gulp tasks
 * @param  {exception} err
 */
function handleError(err) {
    console.log(err.toString());
    process.exit(-1);
  }

// #endregion

//Set default gulp task
gulp.task('default', 'performJSOperations');