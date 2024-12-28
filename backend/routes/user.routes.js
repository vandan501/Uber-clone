const express = require("express");
const router=express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware=require("../middlewares/auth.middleware");
router.post("/register",[
    body("email").isEmail().isLength({min:5}).withMessage("Invalid Email or email must be 5 characters long"),
    body('fullname.firstname').isLength({min:3}).withMessage("Firstname must be 3 characters long"),
    body('password').isLength({min:3}).withMessage("Password must  be 3 characters long")
],userController.registerUser )

router.post("/login",[
    body("email").isEmail().isLength({min:5}).withMessage("Invalid Email or email must be 5 characters long"),
    body('password').isLength({min:3}).withMessage("Password must  be 3 characters long")
],userController.loginUser )

router.get("/userprofile",authMiddleware.authUser,userController.userProfile)
router.get("/logout",authMiddleware.authUser,userController.logout);
module.exports=router;