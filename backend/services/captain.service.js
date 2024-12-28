const captainModel = require("../models/capttain.model");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  brand,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  try {
    // Check if all required fields are provided
    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !brand ||
      !color ||
      !plate ||
      !capacity ||
      !vehicleType
    ) {
      throw new Error(
        "All fields are required: firstname, lastname, email, password, brand, color, plate, capacity, vehicleType."
      );
    }

    // Create a new captain document
    const captain = new captainModel({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        brand,
        color,
        plate,
        capacity,
        vehicleType,
      },
    });

    // Save the captain to the database
    await captain.save();

    return captain;
  } catch (error) {
    throw new Error(`Error creating captain: ${error.message}`);
  }
};
