import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuLightbulb, LuMessageSquare } from "react-icons/lu";
import { RiBrainLine, RiCodeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// Icon Mapping
const categoryIcons = {
  behavioral: <LuMessageSquare className="text-white text-2xl" />,
  technical: <RiCodeLine className="text-white text-2xl" />,
  situational: <RiBrainLine className="text-white text-2xl" />,
};

function InterviewCategory({ category }) {
  return (
    <div className="flex flex-col gap-6 border border-gray-800 p-6 rounded-lg">
      {/* Category Header */}
      <div className="flex items-center gap-4">
        <div className="text-white">{categoryIcons[category.type]}</div>
        <div>
          <h3 className="font-bold">{category.title}</h3>
          <p className="text-sm text-gray-500">{category.description}</p>
        </div>
      </div>

      {/* Interview Questions */}
      <div className="flex flex-col gap-2">
        {category.question1 && (
          <div className="flex gap-2 items-center">
            <LuLightbulb />
            <p>{category.question1}</p>
          </div>
        )}
        {category.question2 && (
          <div className="flex gap-2 items-center">
            <LuLightbulb />
            <p>{category.question2}</p>
          </div>
        )}
      </div>

      {/* Additional Questions Count */}
      <div className="flex justify-between">
        <p className="text-xs text-gray-500">10+ more questions available</p>
        <Link to="/practice" className="flex items-center gap-1">
          <p className="text-sm">Practice</p>
          <FaArrowRight  className="text-xs"/>
        </Link>
      </div>
    </div>
  );
}

export default InterviewCategory;
