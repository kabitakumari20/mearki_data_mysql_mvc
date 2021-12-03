const express = require('express')
const Router = express.Router()

const getRoute = require('./getRoute')
const postRoute = require('./postRoute')
const getShowDataRoute = require('./getShowDataRoute')
const putRoute = require('./putRoute')
const deleteRoute = require('./deleteRoute')

Router.use('/getAllData', getRoute)
Router.use('/insertData', postRoute)
Router.use('/showAllData', getShowDataRoute)
Router.use('/updateData', putRoute)
Router.use('/deleteData', deleteRoute)

module.exports = Router