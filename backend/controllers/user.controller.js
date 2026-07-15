const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const userModel = require("../models/user");
const { generateToken } = require("../utils/generateToken");
const tokenBlackLister = require("../models/blackListTokens");

async function registerUser(req, res) {
   const errors = validationResult(req); // yeh function sari ki sari validation errors ko ikhatta karta hai
   if (!errors.isEmpty()) { // yahan pr ham ne check lagaya hai ke agar errors empty nahi hain toh yeh condition true ho jaye or is ka code run ho jaye
      return res.status(400).json({ errors: errors.array() });
   }
   try {
      const { fullName, email, password } = req.body;
      const { firstName, lastName } = fullName;
      if (await userModel.findOne({ email })) {
         return res.status(409).json({
            message: "User already exists"
         })
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      if(!firstName || !email || !password){
         throw new Error("All fields are required");
      }
      const user = await userModel.create({
         fullName: {
            firstName,
            lastName
         },
         email,
         password: hash
      })
      const token = generateToken(user);
      return res.status(200).json({ token, user });
   }
   catch(err){
      console.log("Register error:", err);
      return res.status(500).json({ message: "Internal Server Error" });
   }
}

async function loginUser(req, res) {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
         return res.status(401).json({ message: "Invalid email or password" });
      }

      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
         return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = generateToken(user);

      return res.status(200).json({
         message: "User Login Successfully",
         token,
      });

   }
   catch (error) {
      console.log("Login error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
   }
}

async function getUserProfile(req,res){
   return res.status(200).json({user: req.user});
}

async function tokenBlackListed(req,res){
   res.clearCookie('token');
   const token = req.cookies.token || req.headers?.authorization?.split()[0];
   await tokenBlackLister.create({
      token,
   })
   res.status(200).json({message: "User Logged Out Successfully"});
}

module.exports = { registerUser, loginUser , getUserProfile, tokenBlackListed }