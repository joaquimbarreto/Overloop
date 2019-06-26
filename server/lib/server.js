const express = require('express')
const fs = require('fs')
const path = require('path')
const applyRoutes = require('../router')
const bodyParser = require('body-parser')
const cors = require('cors')

function loadModels () {
  const modelsPath = path.resolve(__dirname, '../models')

  fs.readdirSync(modelsPath).forEach(function (file) {
    require(modelsPath + '/' + file)
  })
}

loadModels()

const server = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

server.use(cors(corsOptions))
server.use(bodyParser.json())

applyRoutes(server)

module.exports = server
