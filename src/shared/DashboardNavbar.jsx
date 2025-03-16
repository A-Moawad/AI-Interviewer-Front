import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

function DashboardNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-3 px-6 md:px-11 text-white border-b border-gray-700 relative">
      {/* Left Section - Logo */}
      <div className="flex-1 flex justify-start">
        <h2 className="text-xl md:text-2xl font-bold">AI Interviewer</h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/dashboard" className="hover:text-gray-400">
          Dashboard
        </Link>
        <Link to="/practice" className="hover:text-gray-400">
          Practice
        </Link>
        <Link to="/history" className="hover:text-gray-400">
          History
        </Link>
      </nav>

      {/* Right Section - Notifications & Avatar */}
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
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col gap-4 py-4 px-6 md:hidden z-50">
          <Link
            to="/dashboard"
            className="hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/practice"
            className="hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Practice
          </Link>
          <Link
            to="/history"
            className="hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            History
          </Link>
        </nav>
      )}
    </header>
  );
}

export default DashboardNavbar;
