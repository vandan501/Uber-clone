const mongooes = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongooes.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Firstname must be 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Firstname must be 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    minlength: [7, "Email must be 7 characters long"],
  },
  password: {
    type: String,
    required: true,
    minlength: [3, "Password must be atleast 3 characters long"],
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    brand: {
      type: String,
      required: true,
      minlength: [3, "Brand must be atleast 3 characters long"],
    },
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be atleast 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      unique: true,
      minlength: [3, "Plate must be atleast 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      minlength: [1, "Capacity must be at least 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongooes.model("captain", captainSchema);

module.exports = captainModel;
