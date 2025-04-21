const mysql = require('mysql2');

let connection;
const createConnection = () => {
  if (connection) {
    return connection;
  }
  connection = mysql.createConnection({
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

  return connection;
};

module.exports = { createConnection };
