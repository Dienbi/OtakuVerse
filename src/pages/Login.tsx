import React from "react";
import itachi from "../assets/images/itachi.png"; // Import the image
import front from "../assets/images/front text.png";
import google from "../assets/images/google.png";
import login from "../assets/images/login.png";
const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <img
  src={front}
  alt="front"
  className="w-[565px] h-auto object-cover mb-0 block mt-[50px] ml-[50px]"
/>

      {/* Main Content */}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-10 mb-0">
        {/* Left Section: Itachi Image */}
        
        <div className="hidden md:flex w-1/2 justify-center h-full mb-0">
        <img
  src={itachi}
  alt="Itachi Uchiha"
  className="w-[1000px] h-auto object-cover mb-0 block  ml-[50px] mr-[200px]" 
/>

        </div>

        {/* Right Section: Sign-up Form */}
        <div className="bg-[#9b5066] p-8 rounded-lg w-full md:w-1/2 max-w-md">
          <h2 className="text-black text-2xl font-bold text-center mb-4">
          <img
  src={login}
  alt="front"
  className="w-[565px] h-auto object-cover mb-[50px] block mt-[50px] "
/>          </h2>
          <button className="w-full bg-white text-black py-2 rounded mb-4 flex items-center justify-center gap-2">
  <img src={google} alt="Google logo" className="w-5 h-5" />
  Continue with Google
</button>

          <div className="text-black text-center mb-4">
            or sign up with email
          </div>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded bg-white text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded bg-white text-black"
            />
            <button className="w-full bg-[#ff4d6d] text-white py-2 rounded">
              Sign Up
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default SignUp;
