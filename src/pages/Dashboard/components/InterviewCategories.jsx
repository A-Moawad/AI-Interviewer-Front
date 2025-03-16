import React, { useState } from "react";
import { interviewCategoriesList } from "../data";
import InterviewCategory from "./InterviewCategory";

function InterviewCategories() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "behavioral", "technical", "situational"];

  // Get one category per type when "all" is selected
  const uniqueCategories = Object.values(
    interviewCategoriesList.reduce((acc, category) => {
      acc[category.type] = category; // Store only one item per type
      return acc;
    }, {})
  );

  // Filter interview categories based on selection
  const filteredCategories =
    selectedCategory === "all"
      ? uniqueCategories // Show only one per type
      : interviewCategoriesList
          .filter((category) => category.type === selectedCategory)
          .slice(0, 1);

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
            className={`w-full px-4 py-2 rounded-md transition cursor-pointer ${
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
      <div className="flex flex-col gap-4">
        {filteredCategories.map((category) => (
          <InterviewCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default InterviewCategories;
