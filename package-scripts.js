const nps = require('nps-utils')

module.exports = {
  scripts: {
    bundle: {
      description: `bundle the uh, bundle`,
      script: `webpack`
    },
    precommit: {
      description: `do stuff before committing (use --no-verify to skip -- at your peril)`,
      script: nps.concurrent.nps(`bundle`, `lint`)
    },
    serve: {
      description: `serve up application locally`,
      script: `webpack-dev-server --inline --progress`
    },
    build: {
      description: `build all-the-things`,
      // ostensibly this will contain more than one thing
      script: nps.concurrent.nps(`bundle`)
    },
    test: {
      description: `right now there are no tests, so be wary`,
      script: `echo "let's remember to add tests"`
    },
    lint: {
      description: `wish this was eslint, 'cause the rules here are loose`,
      script: `tslint source/*/*.ts*`
    },
    dependencies: {
      script: `nps dependencies.graph`,
      description: `do stuff relative to dependencies`,
      graph: {
        description: `draw a dependency graph, or whatever`,
        script: nps.series(
          `madge source/index.ts --image dependency-graph.svg`,
          `svgo dependency-graph.svg`
        )
      }
    }
  }
}
