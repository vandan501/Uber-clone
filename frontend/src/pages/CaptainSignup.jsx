import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { captainDataContext } from "../context/CaptainContext.jsx";
function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(captainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        brand: vehicleBrand,
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: parseInt(vehicleCapacity, 10) || 0,
        vehicleType: vehicleType,
      },
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );
      if (response.status === 200 || response.status === 201) {
        const data = response?.data;
        setCaptain(data?.captain);
        localStorage.setItem("token", data?.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setVehicleBrand("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  return (
    <div className="p-7  w-full ">
      <div className="w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
          className="w-14 mb-7"
        />
        <form className="m-auto w-full" onSubmit={submitHandler}>
          <h1 className="text-xl mb-2">What's Your Name?</h1>
          <div className="flex gap-4">
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base"
              type="text"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              required
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base"
              type="text"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              placeholder="Last name"
            />
          </div>

          <h1 className="text-xl mb-2">What's Your Email?</h1>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full  text-lg placeholder:text-base"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
          />
          <h1 className="text-xl mb-2">Enter Password</h1>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full  text-lg placeholder:text-base"
            type="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <h1 className="text-xl mb-2">Vehicle Details</h1>
          <div className="flex gap-4 w-full">
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border  w-1/2 text-lg placeholder:text-base"
              type="text"
              value={vehicleBrand}
              onChange={(e) => setVehicleBrand(e.target.value)}
              placeholder="Vehicle Brand"
              aria-label="Vehicle Brand"
            />
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border  w-1/2 text-lg placeholder:text-base"
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder="Vehicle Color"
            />
          </div>
          <div className="flex  gap-4">
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border  w-1/2 text-lg placeholder:text-base"
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder="Vehicle Plate"
            />
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full sm:w-1/2 text-lg placeholder:text-base"
              type="number"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder="Vehicle Capacity"
            />
          </div>
          <select
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="" disabled>
              Select Vehicle Type
            </option>
            <option value="motorcycle">Motorcycle</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
          </select>
          <button className="bg-black w-full text-white   text-xl mt-6 font-semibold px-5 py-3  block">
            {loading ? "Registering your data.." : "Register as a Captain"}
          </button>
        </form>
      </div>
      <div className="flex flex-col ">
        <p className="mt-6">
          Already have an Account?{" "}
          <Link
            to="/captain-login"
            className="text-blue-600 underline font-semibold"
          >
            {" "}
            Login
          </Link>
        </p>
      </div>
      <div className="max-w-full px-4 py-6">
        <p className="text-sm text-gray-700 line-clamp-2">
          By accessing or using this website, you agree to comply with and be
          bound by the terms and conditions set forth in this Terms and Services
          agreement. Please read these terms carefully. If you do not agree with
          any of these terms, you should immediately discontinue the use of the
          website.
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;
