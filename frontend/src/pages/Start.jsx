import React from "react";
import { Link } from "react-router-dom";
// const logo = import.meta.env.LOGO_URL;
// const platformname=import.meta.env.PLATFORM_NAME;
function Start() {
  return (
    <div>
      <div
        id="homepagebg"
        className=" w-screen h-screen pt-5  flex flex-col justify-between"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
          className="w-14 ml-5"
        />
        <div className="bg-white flex flex-col gap-3 p-6 pb-8 justify-center items-center">
          <h3 className="text-2xl font-bold">Get Started with Uber</h3>
          <Link
            to="/login"
            className="text-white text-xl text-center p-3 w-[100%]  rounded-md bg-black"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
