const pbkdf = require("@cs7player/scrap-node-lib").pbkdf;

exports.login = async (reqParams) => {
 try {
  let username = reqParams['username'];
  let password = reqParams['password'];
  let hashPassword =await pbkdf.hashPassword(username);
  console.log(username,password,hashPassword);
  return hashPassword;
 } catch (error) {
  throw error;
 }
};