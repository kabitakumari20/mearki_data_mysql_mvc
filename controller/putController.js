const con = require('../databaseConnection/connection')

module.exports.dataUpdate = (req,res) => {
   
    con.query('update courses_details set name = ? where id =?',[req.body.name, req.params.id], (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Data has updated')
    });
};
