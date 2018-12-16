var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  port: '5000',
  user: 'root',
  password: '',
  database: 'meanelectron'
})

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
})


module.exports = connection

