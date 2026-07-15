const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerCaptian, loginCaptian, captianProfile, logoutCaptian } = require("../controllers/captian.controller");
const {checkCaptianIsLoggedIn} = require("../middlewares/auth.middleware");

router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullName.firstName').isLength({min: 3}).withMessage("First Name must be atleast 3 characters long"),
    body('password').isLength({min: 6}).withMessage("Password must be atleast 6 characters long"),
    body('vehicle.color').isLength({min: 3}).withMessage("Vehicle color must be atleast 3 characters long"),
    body('vehicle.plate').isLength({min: 3}).withMessage("Vehicle plate must be atleast 3 characters long"),
    body('vehicle.capacity').isInt({min: 1}).withMessage("Vehicle capacity must be atleast 1"),
    body('vehicle.type').isIn(['car', 'auto', 'moto']).withMessage('Invalid vehicle type')
], registerCaptian);

router.post("/login", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min: 6}).withMessage("Password must be atleast 6 characters long")
], loginCaptian)

router.get("/profile", checkCaptianIsLoggedIn, captianProfile);
router.get("/logout", checkCaptianIsLoggedIn, logoutCaptian);


module.exports = router;