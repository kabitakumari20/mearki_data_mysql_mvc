const express = require('express')
const Router = express.Router()

const putController = require('../controller/putController')

Router.put('/:id', putController.dataUpdate)

module.exports = Router