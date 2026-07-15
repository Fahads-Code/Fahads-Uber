const jwt = require("jsonwebtoken");

const generateToken = (user) => {
   const token = jwt.sign({id: user._id, email: user.email}, process.env.TOKEN_SECRET_CODE, { expiresIn: "1d" });
   return token
}

module.exports = { generateToken }