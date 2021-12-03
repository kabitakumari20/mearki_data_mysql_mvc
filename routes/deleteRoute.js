const express = require('express')
const Router = express.Router()

const deleteController = require('../controller/deleteController')

Router.use('/:id', deleteController.deleteDataById)

module.exports = Router