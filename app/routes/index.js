const routes = require("express").Router();

const login = require("./login");
const signUp = require("./sign_up");

routes.use("/login", login);
routes.use("/sign_up",sign_up);

routes.get("/health_check", (req, res) => {
  const data = { uptime: process.uptime(), message: "Ok", date: new Date() };
  res.status(200).send(data);
});

module.exports = routes;
