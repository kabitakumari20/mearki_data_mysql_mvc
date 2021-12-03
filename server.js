const express = require('express')
const app = express()
app.use(express.json())

const call_APIs = require('./routes/index')

app.use('/', call_APIs)

app.listen(9000, (err) => {
    if(err) throw err;
    console.log('Server running ---')
});


