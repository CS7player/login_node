exports.sign_up = async (reqParams)=>{
 try {
  let username = reqParams['username'];
  let password = reqParams['password'];
  let email = reqParams['email'];

  return [];
 } catch (error) {
  throw error;
 }
};

//dotenv,jwttoken,dbconnection