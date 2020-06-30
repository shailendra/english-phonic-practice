var gulp = require("gulp");
var concat = require("gulp-concat");
var minify = require("gulp-minify");
var sourcemaps = require("gulp-sourcemaps");

//--- below all External Liberary plugins JS Concat in one js folder
var libJSArray = [];



//--- below Common JS for site Concat in one js folder
var commonJSArray = [
	'resources/js/class/Utils.js',
	'resources/js/class/screen/BaseScreen.js', 
	'resources/js/class/screen/LandingScreen.js',
	'resources/js/class/screen/AlphabetScreen.js', 
	'resources/js/class/Base.js'
	]
//--- below js create its Page wise min js  in build folder
var separateJSArray = [];
//separateJSArray.push("js-source/app/animation.js");

var cssArray = [];

//---- CSS ---------------------
//---- one time Compress css cmd -:   gulp processCSS
function processCSS(){
  if (cssArray.length <= 0) {
    return
  }
  return gulp.src(cssArray, { allowEmpty: true })
    .pipe(concat('common-min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
}
gulp.task('processCSS', processCSS)
function watchCSS (cb) {
  processCSS();
  cb()
}

//---- continuew Compress css cmd -:   gulp watchCSS
gulp.task('watchCSS', function (cb) {
  watchCSS(cb)
  gulp.watch(cssArray, watchCSS)
})

//---- Javascript ---------------------
//---- one time Compress JS cmd -:   gulp processLibJS
function processLibJS() {
  if (libJSArray.length <= 0) {
    return
  }
   return gulp.src(libJSArray,{allowEmpty:true})
       .pipe(concat("common-lib.js"))
       .pipe(minify({
           ext: {
               src: "-debug.js",
               min: ".js",
           },
       }))
       .pipe(gulp.dest("js"));
}
gulp.task("processLibJS", processLibJS);

//---- one time Compress JS cmd -:   gulp processJS
function processCommonJS(){
  if (commonJSArray.length <= 0) {
    return
  }
   return gulp.src(commonJSArray,{allowEmpty:true})
       .pipe(concat("main.js"))
       .pipe(sourcemaps.init())
       .pipe(minify({
           ext: {
               src: "-debug.js",
               min: ".js",
           },
       }))
       .pipe(sourcemaps.write("./maps"))
       .pipe(gulp.dest("js"));
}
function processSeparateJS(){
  if (separateJSArray.length <= 0) {
    return
  }
   return gulp.src(separateJSArray,{allowEmpty:true})
       .pipe(sourcemaps.init())
       .pipe(minify({
           ext: {
               src: "-debug.js",
               min: ".js",
           },
       }))
       .pipe(sourcemaps.write("./maps"))
       .pipe(gulp.dest("js"));
}
function processJS(cb) {
   processCommonJS();
   processSeparateJS();
   cb();  
}
gulp.task("processJS", processJS);

//---- continuew Compress JS cmd -:   gulp watchJS
gulp.task("watchJS", function (cb) {
   processJS(cb);
   processLibJS(cb);
   gulp.watch([...commonJSArray, ...separateJSArray,], processJS);
});
