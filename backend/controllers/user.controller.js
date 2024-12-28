const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const sendEmail = require("../utils/sendEmail");
module.exports.registerUser = async (req, res, next) => {
  // check the express-validator if any error or not..
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // get the details from the request
  const { fullname, email, password } = req.body;

  // Check if email already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }
  //   converting normal password in to hash password
  const hashedPassword = await userModel.hashPassword(password);
  //   creating user
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });
  // generating JWT Token
  const token = user.generateAuthToken();

  // Send welcome email
  await sendEmail({
    to: email,
    subject: "Welcome to Our App!",
    text: `Hi ${fullname.firstname},\n\nCongratulations on creating your account! We're excited to have you on board.\n\nBest regards,\nThe Team`,
  });

  // Exclude password field
  const userObj = user.toObject();
  delete userObj.password;

  res.status(200).json({
    token,
    user: userObj,
  });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // get the details from the request
  const { email, password } = req.body;

  // Check if email already exists
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid Email or Password " });
  }
  // check the password or compare it
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Email or Password " });
  }
  const token = user.generateAuthToken();
  // Exclude password field
  const userObj = user.toObject();
  delete userObj.password;
  
  res.status(200).json({
    token,
    user:userObj,
  });
};
