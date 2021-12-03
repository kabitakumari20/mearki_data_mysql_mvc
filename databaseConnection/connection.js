const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sapna@2104',
    database: 'available_courses'

});
con.connect((err) =>{
    if(err) throw err;
    console.log('Database connected sucessfully')
    let sql = "create table if not exists courses_details (id int, name varchar(255), type varchar(255), logo varchar(255), short_description varchar(255))"
    con.query(sql, (err) =>{
        if(err) throw err;
        console.log('Table created!')
    });
});

module.exports = con