const express = require('express')
const bodyParser = require('body-parser')
const contactsRouter = require('../contacts')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', contactsRouter)

module.exports = app
