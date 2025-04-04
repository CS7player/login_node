const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
 try {
  const payload = { "id": data.id, "username": data.username };
  const secret_key = SECRET_KEY || 'test';
  const token = await jwt.sign(payload, secret_key);
  return token;
 } catch (error) {
  return error;
 }
}

exports.verifyToken = (req) => {
 try {
  const token = req.headers['authorization'];
  if (!token) {
   return res.status(403).send('Token is required');
  }
  // Remove 'Bearer ' prefix if it exists (e.g. 'Bearer <token>')
  const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;
  const secret_key = SECRET_KEY || 'test';
  jwt.verify(tokenWithoutBearer, secret_key, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid or expired token');
    }
   })
  req.user = decoded;
 } catch (error) {
  throw error
 }
}