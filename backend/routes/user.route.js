const express = require("express");
const router = express.Router();
const { body } = require("express-validator"); // express-validator ek library hai jo aane wali request ke andar jo body hai us ka data validate karti hai, is me se ham {body} 
                                               // function nikal rahe hain, request body ke andar ke fields ko check karta hai.
const { registerUser , loginUser , getUserProfile , tokenBlackListed } = require("../controllers/user.controller");
const { checkUserIsLoggedIn } = require("../middlewares/auth.middleware");

router.post("/register", [ // yeh array main validation middleware hai, jo errors ko pakadne main kaam aata ha
   body('email').isEmail().withMessage("Invalid Email"),
   body('fullName.firstName').isLength({ min: 3 }).withMessage("First name must be atleast 3 characters long"),
   body('password').isLength({ min: 6 }).withMessage("Password must be atleast 6 characters long")
], registerUser)

router.post("/login", [
   body('email').isEmail().withMessage('Invalid Email'),
   body('password').isLength({min: 6}).withMessage('Password is incorrect')
], loginUser)

router.get("/profile", checkUserIsLoggedIn, getUserProfile)
router.get("/logout", checkUserIsLoggedIn, tokenBlackListed)


module.exports = router