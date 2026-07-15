const userModel = require("../models/user");
const captianModel = require("../models/captian");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenBlackListToken = require("../models/blackListTokens");

async function checkUserIsLoggedIn(req, res, next) {
    const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "UnAuthorized" });
    }

    const isBlackListedToken = await tokenBlackListToken.findOne({ token });
    if (isBlackListedToken) {
       return res.status(401).json({ message: "UnAuthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET_CODE);
        const user = await userModel.findById(decoded.id);
        req.user = user;
        return next();
    }
    catch (err) {
        return res.status(401).json({ message: "UnAuthorized" });
    }
}

async function checkCaptianIsLoggedIn(req, res, next) {
    const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "UnAuthorized" });
    }

    const isBlackListedToken = await tokenBlackListToken.findOne({ token });
    if (isBlackListedToken) {
       return res.status(401).json({ message: "UnAuthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET_CODE);
        const captian = await captianModel.findById(decoded.id);
        req.captian = captian;
        return next();
    }
    catch (err) {
        return res.status(401).json({ message: "UnAuthorized" });
    }
}

module.exports = { checkUserIsLoggedIn, checkCaptianIsLoggedIn }