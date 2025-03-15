import React from "react";
import { LuMessageSquare } from "react-icons/lu";
import { RiCodeLine, RiBrainLine } from "react-icons/ri";

// Icon Mapping
const categoryIcons = {
  behavioral: <LuMessageSquare className="text-blue-500 text-2xl" />,
  technical: <RiCodeLine className="text-green-500 text-2xl" />,
  situational: <RiBrainLine className="text-purple-500 text-2xl" />,
};

function InterviewCategory({ category }) {
  return (
    <div className="flex items-center gap-4 p-4 border border-gray-700 rounded-lg">
      {/* Category Icon */}
      {categoryIcons[category.type]}

      {/* Category Content */}
      <div>
        <h3 className="font-bold">{category.title}</h3>
        <p className="text-sm text-gray-500">{category.description}</p>
      </div>
    </div>
  );
}

export default InterviewCategory;
