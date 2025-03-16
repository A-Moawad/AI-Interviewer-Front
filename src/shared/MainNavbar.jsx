import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-3 px-6 md:px-16 text-white border-b border-gray-700 relative">
      {/* Logo */}
      <div className="flex-1 flex justify-start md:justify-start">
        <h2 className="text-xl md:text-3xl font-bold">AI Interviewer</h2>
      </div>

      {/* Desktop Navigation */}
      <section className="hidden md:flex items-center gap-6">
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-gray-400">
            Feature
          </Link>
          <Link to="/testimonials" className="hover:text-gray-400">
            Testimonials
          </Link>
          <Link to="/pricing" className="hover:text-gray-400">
            Pricing
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="border border-gray-700 px-4 py-2 rounded-md">
            Log In
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </section>

      {/* Mobile Menu Button */}
      <div className="flex items-center md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu (Fixed) */}
      <nav
        className={`absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col gap-4 py-4 px-6 md:hidden z-50 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="hover:text-gray-400"
          onClick={() => setIsMenuOpen(false)}
        >
          Feature
        </Link>
        <Link
          to="/testimonials"
          className="hover:text-gray-400"
          onClick={() => setIsMenuOpen(false)}
        >
          Testimonials
        </Link>
        <Link
          to="/pricing"
          className="hover:text-gray-400"
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
        </Link>

        {/* Mobile Buttons */}
        <button
          className="border border-gray-700 px-4 py-2 rounded-md"
          onClick={() => setIsMenuOpen(false)}
        >
          Log In
        </button>
        <button
          className="bg-white text-black px-4 py-2 rounded-md"
          onClick={() => setIsMenuOpen(false)}
        >
          Sign Up
        </button>
      </nav>
    </header>
  );
}

export default MainNavbar;
