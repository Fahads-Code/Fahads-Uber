const { createCaptian } = require("../services/captian.service");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const {generateTokenForCaptian} = require("../utils/generateTokenForCaptian");
const captianModel = require("../models/captian");
const blackListTokensModel = require("../models/blackListTokens");

async function registerCaptian(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password, vehicle } = req.body;
    let isCaptianAlreadyExists = await captianModel.findOne({email});

    if(isCaptianAlreadyExists){
        return res.status(409).json({
            message: "Captian is already exists",
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const captian = await createCaptian(
        fullName.firstName,
        fullName.lastName,
        email,
        hashedPassword,
        vehicle.capacity,
        vehicle.color,
        vehicle.plate,
        vehicle.type
    )

    const token = await generateTokenForCaptian(captian);
    res.status(201).json({captian, token});
}

async function loginCaptian(req,res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(401).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    const captian = await captianModel.findOne({email}).select('+password');

    if(!captian){
        return res.status(401).json({message: "Something went wrong"});
    }

    const isMatch = await bcrypt.compare(password, captian.password);
    if(!isMatch){
        return res.status(401).json({message: "Something went wrong"});
    }

    const token = await generateTokenForCaptian(captian);
    res.cookie("token", token);
    res.status(200).json({captian, token});
}

async function captianProfile(req,res){
  res.status(200).json({captian: req.captian});
}

async function logoutCaptian(req,res){
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blackListTokensModel.create({token});
    res.clearCookie('token');
    res.status(200).json({message: "Captian logged out successfully!"})
}

module.exports = { registerCaptian, loginCaptian, captianProfile, logoutCaptian };