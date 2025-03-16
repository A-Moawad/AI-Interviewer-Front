import React from "react";
import { LuLightbulb, LuMessageSquare } from "react-icons/lu";
import { RiBrainLine, RiCodeLine } from "react-icons/ri";

// Icon Mapping
const categoryIcons = {
  behavioral: <LuMessageSquare className="text-white text-2xl" />,
  technical: <RiCodeLine className="text-white text-2xl" />,
  situational: <RiBrainLine className="text-white text-2xl" />,
};

function InterviewCategory({ category }) {
  return (
    <div className="flex flex-col gap-6 border-1 border-gray-800 p-6 rounded-lg">
      <div className="flex items-center gap-4 ">
        <div className="text-white ">{categoryIcons[category.type]}</div>
        <div>
          <h3 className="font-bold">{category.title}</h3>
          <p className="text-sm text-gray-500">{category.description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <LuLightbulb />
          <p>{category.question1}</p>
        </div>
        <div className="flex gap-2">
          <LuLightbulb />
          <p>{category.question2}</p>
        </div>
      </div>
      <p className="text-xs">10+ questions</p>
    </div>
  );
}

export default InterviewCategory;
