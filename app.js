const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const routes = require("./app/routes");
app.use(routes);
app.listen(3000, () => {
  try {
    console.log("the server is running on http://localhost:3000");
  } catch (error) {
    console.log(error);
  }
});
