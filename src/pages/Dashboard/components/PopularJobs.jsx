import React from "react";
import {
  FaBug,
  FaChartLine,
  FaCloud,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaMobileAlt,
  FaNetworkWired,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { jobTitle } from "../data";
import { Link } from "react-router-dom";

// Icons for each job title
const jobIcons = {
  "Software Engineer": <FaCode className="text-blue-500 text-xl" />,
  "Backend Developer": <FaDatabase className="text-green-500 text-xl" />,
  "Cloud Engineer": <FaCloud className="text-purple-500 text-xl" />,
  "Mobile Developer": <FaMobileAlt className="text-pink-500 text-xl" />,
  "AI Engineer": <FaRobot className="text-yellow-500 text-xl" />,
  "Cybersecurity Analyst": <FaShieldAlt className="text-red-500 text-xl" />,
  "Data Scientist": <FaChartLine className="text-indigo-500 text-xl" />,
  "QA Engineer": <FaBug className="text-orange-500 text-xl" />,
  "Network Engineer": <FaNetworkWired className="text-teal-500 text-xl" />,
  "Frontend Developer": <FaLaptopCode className="text-gray-500 text-xl" />,
};

function PopularJobs() {
  return (
    <div>
      {/* Search Input with Icon */}
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="search"
          placeholder="Search job titles..."
          className="w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {jobTitle.map((job) => (
          <Link 
            to="/practice"
            key={job.id}
            className="flex items-center gap-2 p-3 border border-gray-700 rounded-lg text-center"
          >
            {jobIcons[job.title] || (
              <FaCode className="text-gray-500 text-xl" />
            )}
            <span>{job.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularJobs;
