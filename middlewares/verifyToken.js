const jwt = require("jsonwebtoken");
require("dotenv").config();
const key = process.env.JWT_KEY;

const verifyToken = async (req, res, next) => {
  jwt.verify(req.headers["x-access-token"], key, function (err, decoded) {
    if (err) {
      res
        .status(403)
        .json({ success: false, message: `You're not authorized.` });
      return;
    }

    req.body.user = decoded;
    next();
  });
};

module.exports = verifyToken;
