import React from "react";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <header className="flex justify-between py-3 px-16 text-white border-b-1 border-gray-700">
      <figure>
        {/* <img src="" alt="logo"/> */}
        <h2 className="text-xl md:text-3xl">AI Interviewer</h2>
      </figure>
      <section className="flex gap-6 items-center">
        <nav className="flex gap-4">
          <Link to="/">Feature</Link>
          <Link to="/practice">Testimonials</Link>
          <Link to="/about">Pricing</Link>
        </nav>
        <div className="flex gap-3">
          <button className="border-1 rounded-md border-gray-700 px-4 py-2">
            Log In
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </section>
    </header>
  );
}

export default MainNavbar;
