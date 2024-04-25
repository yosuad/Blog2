const { src, dest, whatch, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  src("src/scss/**/*.scss") //INDENTIFICAR EL ARCHIVO DE SASS
    .pipe(sass()) //COMPILARLO
    .pipe(dest("build/css")); //ALMACENARLO

  done(); // callback que avisa a gulp cuando llegamos al final
}

function dev(done) {
  watch("src/scss/**/*.scss", css);
  done();
}

exports.css = css;
exports.dev = dev;
