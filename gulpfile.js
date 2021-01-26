/* Variables */
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const notify = require("gulp-notify");
const imagemin = require('gulp-imagemin');



gulp.task("images", () => {
  gulp
  gulp.src('./src/assets/*')
    .pipe(imagemin([
      
      imagemin.svgo({
        /*  Compress SVG images */
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest('./dist/assets'));
    
});





/* HTML Minify */
gulp.task("minify", () => {
  return gulp
    .src("./src/**/*.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("./dist"));
    
});

/* SASS */
gulp.task("sass", () => {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/css"));
    
     
});



/* JavaScript */
gulp.task("javascript", () => {
  gulp
    .src("./src/js/**/*.js")
    .pipe(concat("all.js"))
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
    
    
});


gulp.task("watch", () => {
gulp.watch("./src/**/*.html", ["minify"]);
  gulp.watch("./src/sass/**/*.scss", ["sass"]);
  gulp.watch("./src/js/**/*.js", ["javascript"]);
  gulp.watch("./src/assets/*", ["images"]);
});



gulp.task("default", (done) => {
  gulp.series("watch", "minify", "sass", "javascript","images");
  done();
});    



