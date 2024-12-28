const captainModel = require("../models/capttain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  try {
    // Validate request payload
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    // Check if captain already exists
    const isCaptain = await captainModel.findOne({ email });
    if (isCaptain) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await captainModel.hashPassword(password);

    // Call service function to create captain
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      brand: vehicle.brand,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    // Generate token for the captain (if needed)
    const token = captain.generateAuthToken();

    // Send response
    res.status(201).json({ token, captain });
  } catch (error) {
    console.error("Error registering captain:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports.loginCaptain = async (req, res, next) => {
  try {
    // Validate request payload
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
      res.status(400).json("Invalid Email or Password");
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
      res.status(400).json("Invalid Email or Password");
    }

    const token = captain.generateAuthToken();
    res.cookie("token", token);

    res.status(200).json({ token, captain });
  } catch (error) {
    console.error("Error while Login captain:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
