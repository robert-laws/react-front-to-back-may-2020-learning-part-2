const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // get token from the header
  const token = req.header('x-auth-token');

  // check if not token
  if(!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch(error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
}