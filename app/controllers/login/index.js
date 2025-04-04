const login_mdl = require('../../models/login');

exports.login = async(req,res,next)=>{
 try{
  const reqParams = req["body"] || {}
  const response = await login_mdl.login(reqParams)
  const result = response
  res.status(200).json(result)
 } catch(error){
  next(error)
 }
}