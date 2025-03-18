import React from "react";
import MainNavbar from "../../shared/MainNavbar";
import { Link } from "react-router-dom";
import Main from "./components/Main";
import Achievments from "./components/Achievments";
import Features from "./components/Features";
import Practice from "./components/Practice";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <div className="flex flex-col">
      <MainNavbar />
      <div className="flex    flex-col">
        <Main />
        <Achievments />
        <Features />
        <Practice/>
        <Testimonials/>
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
