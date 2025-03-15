import React, { useState } from "react";
import { interviewCategoriesList } from "../data";
import InterviewCategory from "./InterviewCategory";

function InterviewCategories() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "behavioral", "technical", "situational"];

  // Filter interview categories based on selection
  const filteredCategories =
    selectedCategory === "all"
      ? interviewCategoriesList
      : interviewCategoriesList.filter(
          (category) => category.type === selectedCategory
        );

  return (
    <div className="flex flex-col gap-4">
      {/* Heading Section */}
      <div>
        <h2 className="text-lg font-bold">Interview Categories</h2>
        <p className="text-gray-500">
          Choose a category to practice specific types of interview questions
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full px-4 py-2 rounded-md transition ${
              selectedCategory === category
                ? "bg-gray-700 text-white"
                : "text-gray-700"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Render Interview Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((category) => (
          <InterviewCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default InterviewCategories;
