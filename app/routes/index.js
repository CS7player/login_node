const routes = require("express").Router();

const login = require("./login");
const signUp = require("./sign_up");

routes.use("/login", login);
routes.use("/sign_up",signUp);

routes.get("/health_check", (req, res) => {
  const data = { uptime: process.uptime(), message: "Ok", date: new Date() };
  res.status(200).send(data);
});


routes.get("/",(req,res)=>{
 res.status(200).json({status:true,msg:`its Working!!!${PORT}`});
})

module.exports = routes;
