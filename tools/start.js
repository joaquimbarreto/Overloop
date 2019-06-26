const browserSync = require('browser-sync')
const history = require('connect-history-api-fallback')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const paths = require('./helpers/paths')

function runApp () {
  const webpackConfig = require('./config/webpackConfig')
  const bundler = webpack(webpackConfig)

  browserSync({
    open: true,
    notify: false,
    ghostMode: false,
    server: {
      baseDir: paths.clientPath,
      middleware: [
        history(),
        webpackDevMiddleware(bundler, {
          publicPath: webpackConfig.output.publicPath,
          stats: webpackConfig.stats
        }),
        webpackHotMiddleware(bundler)
      ]
    }
  })
}

runApp()
