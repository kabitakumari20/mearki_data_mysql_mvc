const con = require('../databaseConnection/connection')

module.exports.deleteDataById = (req,res) => {
    con.query('delete from courses_details where id =?',req.params.id, (err) => {
        if(err)throw err;
        console.log('one raw data has deleted')
        res.send('one raw data has deleted')
    });
}