var express = require('express')
var app = express()
var cors = require('cors')
var db = require('./config')

app.use(cors())

app.get('/', function (req, res) {
    db.query('SELECT * FROM profile', (err, result, f) => {
        if(err) throw err
        res.send(result)
    })
})

app.listen(5001, () => console.log(`Example app listening on port 5001!`))