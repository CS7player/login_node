const { connection } = require("../../utils/db");

exports.sign_up = async (reqParams) => {
 try {
  let username = reqParams['username'];
  let password = reqParams['password'];
  let mail = reqParams['mail'];
  const query = 'INSERT INTO login (username, password, mail) VALUES (?, ?, ?)';
  const result = await new Promise((resolve, reject) => {
   connection.query(query, [username, password, mail], (err, results) => {
    if (err) {
     reject(err);
    } else {
     resolve(results);
    }
   });
  });
  return result;
 } catch (error) {
  throw error;
 }
};

//dotenv,jwttoken,dbconnection