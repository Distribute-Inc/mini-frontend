const path = require('path')
const webpack = require(`webpack`)
const autoprefixer = require(`autoprefixer`)
const HtmlWebpackPlugin = require(`html-webpack-plugin`)
const CopyWebpackPlugin = require(`copy-webpack-plugin`)
const ExtractTextPlugin = require(`extract-text-webpack-plugin`)

const ENV = process.env.npm_lifecycle_events
const isTest = ENV === `test` || ENV === `test-watch`
const isProd = ENV === `build`
const devtool = (
  isTest ?
  `inline-source-map` :
  isProd ?
  `source-map` :
  `eval-source-map`
)

module.exports = (() => {
  const config = {
    entry: {
      bundle: `./source/index.ts`
      // vendor: [
      //   `angular`,
      //   `angular-ui-router`
      // ]
    },
    output: {
      path: __dirname + `/compiled`,
      publicPath: `http://localhost:8080`,
      filename: `[name].bundle.js`,
      chunkFilename: `[name].bundle.js`
    },
    devtool,
    resolve: {
      extensions: [`.ts`, `.jsx`, `.js`, `.json`, `.tsx`]
    },
    // node: {
    //   console: true,
    //   fs: `empty`,
    //   net: `empty`,
    //   tls: `empty`
    // },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: [`awesome-typescript-loader`, `angular1-template-loader`]
        },
        {
          test: /\.html$/,
          exclude: [
            path.resolve(__dirname, 'source/public/index.html')
          ],
          loader: `ngtemplate-loader?relativeTo=${__dirname}!html-loader`
        },
        {
          test: /\.js$/,
          loader: `babel-loader`,
          exclude: /node_modules/
        },
        {
          test: /\.scss*/,
          loader: ExtractTextPlugin.extract({
            fallback: `style-loader`,
            use: [
              `css-loader`,
              `postcss-loader`
            ]
          })
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      // Automatically load React instead of needing
      // `import React from 'react'` everywhere
      // new webpack.ProvidePlugin({
      //   angular: `angular`
      // }),
      // new webpack.optimize.ModuleConcatenationPlugin()
      new webpack.LoaderOptionsPlugin({
        test: /\.scss$/i,
        options: {
          postcss: {
            plugins: [autoprefixer]
          }
        }
      }),
      new HtmlWebpackPlugin({
        template: `./source/public/index.html`,
        inject: `body`
      }),
      new ExtractTextPlugin({
        filename: `css/[name].css`, disable: !isProd
      })
    ],
    stats: { colors: true }
  }
  if (isTest) {
    config.module.rules.push({
      enforce: `pre`,
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/
      ],
      loader: `istanbul-instrumenter-loader`,
      query: {
        esModules: true
      }
    })
  }
  config.devServer = {
    contentBase: `./src/public`,
    stats: `minimal`
  }
  return config
})()
