const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: SQL_HOST,  
  user: SQL_USER,  
  password: SQL_PASSWORD, 
  database: SQL_DATABASE 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});


module.exports = { connection };
