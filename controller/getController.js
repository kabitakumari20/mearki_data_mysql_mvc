const con = require('../databaseConnection/connection')
const fs = require('fs')
const axios = require('axios')
let merakiApi = 'https://saral.navgurukul.org/api/courses'
module.exports.AvailableCourses = (req, res) => {
    axios.get(merakiApi).then((result) => {
        let allData = result.data 
        console.log(allData)
        res.send(allData)
        let stringData = JSON.stringify(allData, null, 2)
        fs.writeFileSync('courses.json', stringData)
    }).catch((err) => {
        console.log(err)
    });
};