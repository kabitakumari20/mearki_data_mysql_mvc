const express = require('express')
const Router = express.Router()
const postController = require('../controller/postController')

Router.post('/', postController.addData)

module.exports = Router