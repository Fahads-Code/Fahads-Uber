const jwt = require("jsonwebtoken");

const generateTokenForCaptian = async (captian) => {
   const token = jwt.sign({id: captian._id, email: captian.email}, process.env.TOKEN_SECRET_CODE, {expiresIn: "1d"});
   return token
}

module.exports = { generateTokenForCaptian }