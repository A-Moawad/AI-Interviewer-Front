import React from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

function DashboardNavbar() {
  return (
    <header className="flex justify-between items-center py-3  text-white border-b-1 border-gray-700 px-10">
      {/* Left Section */}
      <section className="flex gap-6 items-center">
        <figure >
          <h2 className="text-2xl font-bold">AI Interniewer</h2>
        </figure>
        <nav className="flex gap-4">
          <Link to="/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
          <Link to="/practice" className="hover:text-gray-400">
            Practice
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            History
          </Link>
        </nav>
      </section>

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
      </div>
    </header>
  );
}

export default DashboardNavbar;
