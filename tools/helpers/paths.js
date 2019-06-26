const path = require('path')

const rootPath = path.resolve(__dirname, '../../')
const clientPath = path.resolve(rootPath, 'client')
const buildPath = path.resolve(rootPath, 'build')

module.exports = {
  rootPath,
  clientPath,
  buildPath
}
