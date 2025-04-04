const pbkdf = require("@cs7player/scrap-node-lib").pbkdf;
const queryData = require("./../../utils/query");
const jwt = require("../../utils/jwt");

exports.login = async (reqParams) => {
 try {
  let username = reqParams['username'];
  let password = reqParams['password'];
  let query1 = 'select * from login where username = ?'
  let result = await queryData.dbDater(query1,[username]);
  if(result.length == 0){
   return {status : false , msg :'user not found'};
  }
  let hashPassword = result[0]['password'];
  let checking =await pbkdf.checkPassword(password,hashPassword);
  if(!checking){
   return { status: false, msg: 'incorrect password'};
  }
  const token =await jwt.generateToken(result[0]);
  return {status : true , msg:'Login Successfully!!!',jwt_token : token};
 } catch (error) {
  throw error;
 }
};