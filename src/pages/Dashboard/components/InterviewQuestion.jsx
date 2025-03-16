import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { Link } from "react-router-dom";
import { questionsList } from "../data";
import DropDownQuestion from "./DropDownQuestion";

function InterviewQuestion() {
  return (
    <div className="p-6 rounded-lg shadow-md text-white ">
      <div>
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
          <div>
            <h3 className="text-lg lg:text-2xl font-bold">
              Personalized Interview Questions
            </h3>
            <span className="text-sm lg:text-md text-gray-400">
              Tailored for Mid-Level Software Engineers
            </span>
            <span className="text-sm lg:text-md text-gray-400 block">
              Questions matched to your profile
            </span>
          </div>
          {/* Refresh Button */}
          <button className="flex gap-2 border border-gray-700 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 transition-all">
            <FiRefreshCcw />
            <span className="text-xs lg:text-base">Refresh Questions</span>
          </button>
        </div>

        {/* Dropdowns with Questions */}
        <div className="flex flex-col gap-4 mt-4">
          {questionsList.map((question) => (
            <DropDownQuestion
              key={question.id}
              id={question.id}
              question={question.question}
              answer={question.answer}
              level={question.level}
              type={question.type}
            />
          ))}
        </div>
      </div>

      {/* Practice All Questions Button */}
      <Link
        to="/practice-all"
        className="mt-6 mx-auto w-fit flex items-center justify-center gap-2 bg-white text-black py-3 px-4 rounded-md font-semibold hover:bg-gray-200 transition-all "
      >
        <p>Practice All Questions</p>
        <img src="/black-right-arrow.png" alt="black right arrow" />
      </Link>
    </div>
  );
}

export default InterviewQuestion;
