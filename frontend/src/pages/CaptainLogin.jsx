import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { captainDataContext } from "../context/CaptainContext";
function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = React.useContext(captainDataContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const captainData = { email: email, password: password };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );
    if (response.status === 200) {
      const data = response?.data;
      setCaptain(data);
      localStorage.setItem("token", data?.token);
      setLoading(false);
      navigate("/captain-home");
    }
    setEmail("");
    setPassword("");
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
          <h1 className="text-xl mb-2">What's Your Email?</h1>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full  text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="email@example.com"
          />
          <h1 className="text-xl mb-2">Enter Password</h1>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full  text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="password"
          />
          <button className="bg-black w-full text-white   text-xl mt-6 font-semibold px-5 py-3  block">
            {loading ? "Please wait" : "Login"}
          </button>
        </form>
      </div>
      <div className="flex flex-col ">
        <p className="mt-6">
          Register as a Captain?{" "}
          <Link
            to="/captain-signup"
            className="text-blue-600 underline font-semibold"
          >
            {" "}
            Register as a Captain
          </Link>
        </p>
        <Link
          to="/login"
          className="text-center bg-green-600 text-white w-full  text-xl mt-3 font-semibold px-5 py-3  block"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
