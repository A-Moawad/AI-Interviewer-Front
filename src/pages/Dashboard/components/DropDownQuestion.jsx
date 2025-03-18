import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


function DropDownQuestion({ question, answer, level, type }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 border-b border-gray-800 p-3 rounded-lg shadow-sm transition-all duration-300">

      <div className="flex gap-4 text-xs md:text-sm">
        <p
          className={`border rounded-full py-1 px-2 transition-all duration-300 ${
            isOpen ? "bg-white text-black" : "bg-gray-800 text-white"
          }`}
        >
          {type}
        </p>
        <p className="border rounded-full py-1 px-2">{level}</p>
      </div>
      {/* Dropdown Header */}
      <div
        className="flex gap-5 justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className=" text-sm md:text-lg font-semibold">{question}</h4>
        <span className="text-sm text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-2 p-3 border-t border-gray-700 ">
          <p className="font-semibold">Sample Strong Answer:</p>
          <p className="text-gray-700">{answer}</p>

          {/* Helpful & Save Section */}
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-white">
                <img
                  src="/helpful.png"
                  alt="helpful logo"
                  className="w-5 h-5"
                />
                <p>Helpful</p>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-white">
                <img src="/save.png" alt="save logo" className="w-5 h-5" />
                <p>Save</p>
              </button>
            </div>

            {/* Practice Similar Link */}
            <Link
              to="/practice-similar"
              className="flex  items-center gap-2 border border-gray-700 px-4 py-2"
            >
              <p>Practice Similar</p>
              <FaArrowRight  className="text-xs"/>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDownQuestion;
