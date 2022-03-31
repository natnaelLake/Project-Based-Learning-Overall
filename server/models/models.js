const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'hayme@aastu',
    database:'DB_demo'
});

module.exports = connection;



