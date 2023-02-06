const gulp        = require('gulp');
const browserSync = require("browser-sync").create();
const scss = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require("gulp-imagemin");

gulp.task('browsersync', function () {
    browserSync.init({
        server: {
            baseDir: "app/",
        },
        notify: false,
    });
})

gulp.task('styles', function (){
  return gulp.src("app/scss/*.scss")
      .pipe(scss({outputStyle: 'compressed'}))
      .pipe(rename({
        prefix: "",
        suffix: ".min",
      }))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest("app/css"))
      .pipe(browserSync.stream());
});

gulp.task('images', function () {
  return gulp.src("app/images/**/*.*")
    .pipe(imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
})

gulp.task('watch', function (){
  gulp.watch("app/**/*.scss", gulp.parallel('styles'))
  gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'browsersync', 'styles'));