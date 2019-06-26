const server = require('./lib/server')
const config = require('./config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

function startServer () {
  return Promise.all([
    mongoose.connect(config.mongoUri),
    server.listen(config.port)
  ])
}

startServer().then(() => {
  console.log(`The server has started on ${config.port}`)
})
