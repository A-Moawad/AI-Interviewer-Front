import React from "react";

const sessions = [
  {
    title: "Software Engineer",
    time: "Today, 10:30 AM",
    progress: "8/12 questions",
    score: "85%",
  },
  {
    title: "Product Manager",
    time: "Yesterday, 2:15 PM",
    progress: "10/10 questions",
    score: "78%",
  },
  {
    title: "UX Designer",
    time: "Mar 10, 2025, 11:45 AM",
    progress: "6/8 questions",
    score: "92%",
  },
];

export default function RecentSessions() {
  return (
    <div className="flex flex-col gap-3 p-6 text-white rounded-lg border border-gray-700 w-96">
      <div>
        <h2 className="text-xl font-semibold mb-3">Recent Practice Sessions</h2>
        <p className="text-sm text-gray-400 mb-4">
          Review your previous interview practice sessions
        </p>
      </div>

      {sessions.map((session, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 border border-gray-700 p-3 rounded-lg "
        >
          {/* header  */}
          <div className="flex justify-between">
            <h3 className="font-semibold">{session.title}</h3>
            <p className="text-xs text-gray-400">{session.time}</p>
          </div>
          {/* progress  */}
          <div className="relative mt-2 h-4 bg-gray-700 rounded-full">
            <div
              className="absolute h-full bg-white rounded-full"
              style={{
                width:
                  (parseInt(session.progress.split("/")[0]) /
                    parseInt(session.progress.split("/")[1])) *
                    100 +
                  "%",
              }}
            ></div>
          </div>
          {/* footer  */}
          <div className="flex justify-between">
            <p className="text-xs text-gray-300 mt-1">{session.progress}</p>
            <p className="text-sm font-semibold mt-1">{session.score} Score</p>
          </div>
        </div>
      ))}
      <button className="w-full border border-gray-700 py-2 px-6 rounded-lg text-white cursor-pointer">
        View All Sessions
      </button>

      <div className="mt-6 p-4  rounded-lg">
        <h3 className=" font-bold">Premium Features</h3>
        <p className="text-sm text-gray-400 mb-3">Upgrade for advanced tools</p>
        <ul className=" text-sm text-gray-300 space-y-1">
          <li>⚡ Unlimited practice sessions</li>
          <li>📊 Detailed performance analytics</li>
          <li>🎤 Voice response analysis</li>
          <li>🌍 Industry-specific questions</li>
        </ul>
        <button className="mt-4 w-full border border-gray-700 text-white py-2 rounded-md text-sm">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}
