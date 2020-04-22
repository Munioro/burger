const mysql =  require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    PORT: 3306,
    user: 'root',
    password: 'Taheahtzi7',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`connection id ${connection.threadId}`);
});
module.exports = connection;