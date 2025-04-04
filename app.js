const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors((req, callback) => {
 callback(null, { origin: true });
}));
app.use(express.json());
require('./app/utils/constants');
const routes = require("./app/routes");
app.use(routes);
require('./app/utils/db');
app.listen(PORT, () => {
 try {
  console.log(`the server is running on http://localhost:${PORT}`);
 } catch (error) {
  console.log(error);
 }
});
