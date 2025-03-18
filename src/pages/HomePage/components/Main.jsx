import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"


function Main() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 px-16 py-10  lg:py-20">
      <figure className=" md:hidden md:w-[50%] rounded-lg">
        <img src="/home.png" alt="home pge image" className="rounded-xl" />
      </figure>
      <section className="flex flex-col gap-5 w-full md:w-[50%]">
        <p className="text-sm border-1 border-gray-700 rounded-full py-1 px-3 w-fit">
          AI-Powered Interview Preparation
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-6xl">
          Ace Your Next Interview with AI Coaching
        </h1>
        <div className="flex gap-3">
          <Link
            to="/dashboard"
            className="flex gap-2 bg-white rounded-md text-black justify-center items-center  py-3 px-4 text-sm font-semibold"
          >
            <span>Get Started Free</span>
            <FaArrowRight />
          </Link>
          <Link
            to="/dashboard"
            className="px-4 py-3 bg-black text-white text-sm border-1 border-gray-700 rounded-md font-semibold"
          >
            Learn More{" "}
          </Link>
        </div>
      </section>
      <figure className="hidden md:block md:w-[50%] rounded-lg">
        <img src="/home.png" alt="home pge image" className="rounded-xl" />
      </figure>
    </div>
  );
}

export default Main;
