import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userDataContext } from "../context/userContext";
function UserSignup() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [userData, setUserData] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(userDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newUser = {
      fullname: { firstname, lastname },
      email,
      password,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
      if (response.status === 200 || 201) {
        const data = response.data;
        console.log(data, "API Response");
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      setIsLoading(false);
    }
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
          <button className="bg-black w-full text-white   text-xl mt-6 font-semibold px-5 py-3  block">
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
      <div className="flex flex-col ">
        <p className="mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline font-semibold">
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

export default UserSignup;
