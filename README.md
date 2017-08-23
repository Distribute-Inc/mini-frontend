```
           _       _
 _ __ ___ (_)_ __ (_)
| '_ ` _ \| | '_ \| |
| | | | | | | | | | |
|_| |_| |_|_|_| |_|_|
```

# Installation

* `git clone https://github.com/Distribute-Inc/mini-frontend.git mini`
* `cd mini`
* `yarn install` (`brew install yarn` - or [whatever you prefer](https://yarnpkg.com/en/docs/install))
* `yarn serve`

## Recommended installation

So because we're forwarding commands from `yarn` to `nps`, you don't have to install `nps` yourself, but you probably should.

* `yarn install nps global` or `npm i nps -g` (you may require the latter as `yarn`'s cli-executable installations are sometimes janky, YMMV)

# Scripts

This repo uses [nps](https://github.com/kentcdodds/nps) to allow for simple commands which can be executed individually (and which behave identically to running the command in the terminal).

For any of the following, you can run either `nps <command>` or `yarn <command>` (as they have been copied into the `package.json#scripts` as well):

* `bundle` - bundle the uh, bundle
* `precommit` - do stuff before committing (use --no-verify to skip -- at your peril)
* `serve` - serve up application locally
* `build` - build all-the-things
* `test` - right now there are no tests, so be wary
* `lint` - wish this was eslint, 'cause the rules here are loose
* `dependencies` - do stuff relative to dependencies
* `dependencies.graph` - draw a dependency graph, or whatever
