const nps = require('nps-utils')

// gulp task list
/*
[
  // these seem problematic
  "bower-install",
  "tsd-install",
  "npm-install",
  "install",
  // this has no meat
  "test",
  // this can't possibly do anything of value
  "config",
  "copy-js",

  "compile-ts",
  "compile-sass",
  "clean",
  "build-local",
  "rebuild-local",
  "compile-and-prepare",
  "compile-and-prepare-other",
  "prepare-bower-files",
  "prepare-partial-templates",
  "prepare-main-template",
  "js-concat-only",
  "copy-images",
  "copy-fonts",
  "copy-assets"
]
*/

module.exports = {
  scripts: {
    bundle: `webpack`,
    scss: `node-sass source/styling.scss -o ./compiled`,
    serve: `webpack-dev-server --inline --progress`,
    build: nps.concurrent.nps(`bundle`, `scss`),
    test: `echo "!"`
  }
}
