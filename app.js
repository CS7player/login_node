const express = require("express");
const cors = require("cors");
const app = express();
// app.use(cors('*'));
app.use(cors({
 origin: function (origin, callback) {
   //console.log('Request Origin:', origin); // This logs every request origin
   callback(null, true); // Allow all origins
 }
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
