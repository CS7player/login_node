const routes = require('express').Router();
const { check, validationResult } = require("express-validator");
const signUp_ctrl = require('../../controllers/sign_up');

routes.post('/',[
 check("username", "Invalid Username").isString().trim().isLength({ min: 7 }),
 check("mail","Invalid Email").trim().isEmail(),
 check("password", "Invalid  password").isString().trim().isLength({ min: 7 }),
],(req,res,next)=>{
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
   res.status(400).json({ status: false, error: errors.array() });
  } else {
   signUp_ctrl.sign_up(req, res, next);
  }
})

module.exports = routes;