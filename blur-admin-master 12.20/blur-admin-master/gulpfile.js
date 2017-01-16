'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  把所有./gulp下的js文件以文件名为变量名加载进来
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  设置default任务，执行完clean后执行build任务
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
