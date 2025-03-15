import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative max-h-[464px] bg-cover bg-center flex items-center justify-start text-center p-3 md:p-6 rounded-xl  mt-10"
      style={{ backgroundImage: "url('/dashboardImage.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col  items-center  gap-5 max-w-2xl">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Ace Your Next Interview with AI-Powered Practice
        </h1>
        <p className="text-white md:text-lg">
          Prepare for job interviews with personalized AI-generated questions
          and real-time feedback tailored to your desired role.
        </p>
        <Link
          to="/practice"
          className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-6 rounded-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Hero;
