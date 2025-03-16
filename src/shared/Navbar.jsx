import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar({ dashboard = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 text-white border-b border-gray-700">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <h2 className="text-2xl font-bold">AI Interviewer</h2>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {dashboard ? (
            <>
              <Link to="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
              <Link to="/practice" className="hover:text-gray-400">
                Practice
              </Link>
              <Link to="/history" className="hover:text-gray-400">
                History
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-gray-400">
                Features
              </Link>
              <Link to="/testimonials" className="hover:text-gray-400">
                Testimonials
              </Link>
              <Link to="/pricing" className="hover:text-gray-400">
                Pricing
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <IoMdNotificationsOutline
          size={24}
          className="cursor-pointer hover:text-gray-400"
        />
        <img
          src="/avatar.jpg"
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-700"
        />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-3/4 h-full bg-gray-900 p-6 flex flex-col gap-4 shadow-lg transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="self-end text-white focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <FiX size={28} />
        </button>

        {dashboard ? (
          <>
            <Link
              to="/dashboard"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/practice"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Practice
            </Link>
            <Link
              to="/history"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              History
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/testimonials"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
