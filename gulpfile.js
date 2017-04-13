const gulp = require('gulp')
const browserify = require('browserify')
gulp.task('compileEs6',()=>{
    browserify('index.js').transform('babelify',{presets:['es2015']}).bundle().pipe(require('fs').createWriteStream('public/bundle.js'))
})

gulp.task('watchAndCompile',()=>{
    gulp.watch('index.js',['compileEs6'])
})
