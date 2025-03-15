import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { questionsList } from "../data";
import DropDownQuestion from "./DropDownQuestion";

function InterviewQuestion() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between">
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
        <div className="flex gap-2 border border-gray-700 py-1 px-2 justify-center items-center rounded-md cursor-pointer hover:bg-gray-900">
          <FiRefreshCcw />
          <span className="text-xs lg:text-base flex-1">Refresh Questions</span>
        </div>
      </div>

      {/* Dropdowns with Questions */}
      <div className="flex flex-col gap-4">
        {questionsList.map((question, index) => (
          <DropDownQuestion
            key={index}
            question={question.question}
            answer={question.answer}
            level={question.level}
            type={question.type}
          />
        ))}
      </div>
    </div>
  );
}

export default InterviewQuestion;
