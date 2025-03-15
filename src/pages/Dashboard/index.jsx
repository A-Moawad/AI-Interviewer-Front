import React from "react";
import DashboardNavbar from "../../shared/DashboardNavbar";
import Hero from "./components/Hero";
import InterviewCategory from "./components/InterviewCategory";
import InterviewQuestion from "./components/InterviewQuestion";
import JobTitle from "./components/JobTitle";
import RecentSessions from "./components/RecentSessions";

function Dashboard() {
  return (
    <div>
      <DashboardNavbar />
      <div className="flex flex-col gap-10">
        <Hero />
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 w-full  lg:w-[75%] border-1 border-gray-700 p-3 ">
            <InterviewQuestion />
            <JobTitle />
            <InterviewCategory />
          </div>
          <div className="hidden lg:block">
            <RecentSessions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
