import React from "react";
import MainNavbar from "../../shared/MainNavbar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col">
      <MainNavbar />
      <div className="flex gap-10">
        <h1>HomePage</h1>
        <Link to="dashboard" className="bg-white text-black px-4 py-2">
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
