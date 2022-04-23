/*jshint esversion: 6 */
'use strict';

const gulp = require('gulp');
const zip = require('gulp-zip');

const buildZip = () => {
    return gulp.src('production/build/**/*')
        .pipe(zip('biteme-controller.zip'))
        .pipe(gulp.dest('production/release/'));
};

export const buildPackage = gulp.series(buildZip);
