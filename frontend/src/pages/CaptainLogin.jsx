import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setcaptainData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault;
    setcaptainData({ email: email, password: password });
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
        <form
          className="m-auto w-full"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
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
            Login
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
