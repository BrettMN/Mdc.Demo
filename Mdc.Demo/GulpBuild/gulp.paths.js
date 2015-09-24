var path = require('path');

var appRoot = 'src/';
var outputRoot = 'app/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    allSource: appRoot + '**/*.*',
    style: 'styles/**/*.css',
    output: outputRoot
};
