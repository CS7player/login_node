const pbkdf = require("@cs7player/scrap-node-lib").pbkdf;
const time = require("./../../utils/helper");
const queryData = require("./../../utils/query");

exports.sign_up = async (reqParams) => {
 try {
  let username = reqParams['username'];
  let password = reqParams['password'];
  let mail = reqParams['mail'];
  let hashPassword = await pbkdf.hashPassword(password);
  let created_at = time.getCurrentTimestamp();
  const query = 'INSERT INTO login (username, password, mail,created_at) VALUES (?, ?, ?,?)';
  const data = [username,hashPassword,mail,created_at];
  const result = queryData.dbDater(query,data);
  return result
 } catch (error) {
  throw error;
 }
};

//jwttoken