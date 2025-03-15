import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropDownQuestion({question, answer, level, type }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 border-b border-gray-800 p-3 rounded-lg shadow-sm">
      <div className="flex gap-4">
        <p className="border rounded-full py-1 px-2">{type}</p>
        <p className="border rounded-full py-1 px-2">{level}</p>
      </div>
      {/* Dropdown Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-semibold">{question}</h4>
        <span className="text-sm text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-2 p-3 border-t border-gray-700">
          <p className="font-semibold">Sample Strong Answer:</p>
          <p className="text-gray-700">{answer}</p>

          

          {/* Helpful & Save Section */}
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-200">
                <img
                  src="/helpful.png"
                  alt="helpful logo"
                  className="w-5 h-5"
                />
                <p>Helpful</p>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-200">
                <img src="/save.png" alt="save logo" className="w-5 h-5" />
                <p>Save</p>
              </button>
            </div>

            {/* Practice Similar Link */}
            <Link
              to="/practice-similar"
              className="flex gap-2 border-1 border-gray-700 px-4 py-2"
            >
              <p>Practice Similar</p>
              <img src="/right-arrow.png" alt="right arrow" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDownQuestion;
