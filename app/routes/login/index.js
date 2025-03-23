const routes = require("express").Router();
const { check, validationResult } = require("express-validator");
const login_ctrl = require('../../controllers/login');

routes.post("/",[
 check("username", "Invalid Username").isString().trim().isLength({ min: 7 }),
 check("password", "Invalid  password").isString().trim().isLength({ min: 7 }),
],(req,res,next)=>{
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
  res.status(400).json({ status: false, error: errors.array() });
 } else {
  login_ctrl.login(req, res, next);
 }
})

module.exports = routes