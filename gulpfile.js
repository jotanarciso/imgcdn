var gulp = require("gulp");
var tinypng = require("gulp-tinypng-compress");

gulp.task("tinypng", async function() {
  return gulp
    .src("img/**/*.{png,jpg,jpeg}")
    .pipe(
      tinypng({
        key: "sGffJRZy4jXNVFZ2qVTrkPy7QFTGGDkn",
        sigFile: "img/.tinypng-sigs",
        log: true
      })
    )
    .pipe(gulp.dest("build"));
});
