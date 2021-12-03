const express = require('express')
const Router = express.Router()
const getControllerApi = require('../controller/getController')

Router.use('/', getControllerApi.AvailableCourses)

module.exports = Router