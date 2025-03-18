import React from 'react';
import { AchievmentsList } from "../data";

function Achievments() {
  return (

    <section className="flex  justify-between gap-6 px-16 py-8 bg-gray-800  border-t-1 border-b-1 border-gray-700">
      {AchievmentsList.map((achievement) => (
        <div
          key={achievement.id}
          className="flex flex-col gap-3  text-white items-center"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl">
            {achievement.value}
          </h2>
          <p className="text-xs text-gray-500">{achievement.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Achievments;
