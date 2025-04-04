const { connection } = require("./db");
const util = require('util');
const queryAsync = util.promisify(connection.query).bind(connection);

exports.dbDater = async (query, whr) => {
 try {
  const results = await queryAsync(query, whr);
  return results;
 } catch (err) {
  throw err;
 }
}
