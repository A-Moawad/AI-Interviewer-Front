import React, { useState } from "react";
import PopularJobs from "./PopularJobs";
import CustomJobs from "./CustomJobs"; 

function JobTitle() {
  const [jobType, setJobType] = useState("popular");

  return (
    <div className="flex flex-col gap-5">
      {/* Heading */}
      <div>
        <h2 className="text-lg font-bold">Select a Job Title</h2>
        <p className="text-gray-500">
          Choose a job title to get tailored interview questions
        </p>
      </div>

      {/* Buttons for Popular and Custom Jobs */}
      <div className="flex gap-2 my-4">
        <button
          onClick={() => setJobType("popular")}
          className={`w-full px-4 py-2 rounded-md cursor-pointer ${
            jobType === "popular"
              ? "bg-gray-700 text-white"
              : "text-gray-700"
          }`}
        >
          Popular Jobs
        </button>
        <button
          onClick={() => setJobType("custom")}
          className={`w-full px-4 py-2 rounded-md cursor-pointer ${
            jobType === "custom"
              ? "bg-gray-700 text-white"
              : "text-gray-700 "
          }`}
        >
          Custom Jobs
        </button>
      </div>


      {/* Conditionally Render PopularJobs or CustomJobs */}
      {jobType === "popular" ? <PopularJobs /> : <CustomJobs />}
    </div>
  );
}

export default JobTitle;
