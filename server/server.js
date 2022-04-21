const path = require('path')
const express = require('express')
const users = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/api/v1/users', users)

module.exports = server
