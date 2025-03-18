import React from "react";
import { FaArrowRight } from "react-icons/fa";

import { MdOutlineKeyboardVoice } from "react-icons/md";
import { Link } from "react-router-dom"; // ✅ Added missing import

function Practice() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 md:px-16 py-10 lg:py-20">
      <figure className="lg:hidden">
        <img
          src="/feature.png"
          alt="feture image"
          className="h-full rounded-lg"
        />
      </figure>
      {/* Voice Response Analysis Feature */}
      <section className="   shadow-md flex flex-col gap-6  ">
        <div className="text-4x flex gap-2 border border-gray-700 rounded-full py-1 px-3 w-fit">
          <MdOutlineKeyboardVoice />
          <p className="text-sm ">Practice Like It's The Real Thing</p>
        </div>
        <p className="text-gray-500">
          Record your verbal responses and get feedback on your communication
          style, clarity, and delivery. Our AI analyzes your speech patterns and
          provides tips to improve your verbal communication skills.
        </p>
        <ul className="mt-4 list-disc list-inside text-left">
          <li>Speech clarity and pace analysis</li>
          <li>Filler word detection</li>
          <li>Confidence and tone assessment</li>
        </ul>
        <Link
          to="/practice"
          className="flex gap-2 items-center  bg-white text-black w-fit py-3 px-6 rounded-lg"
        >
          <p>Practice Now</p>
          <FaArrowRight />
        </Link>
      </section>
      <figure className="hidden lg:block">
        <img
          src="/feature.png"
          alt="feture image"
          className="h-full rounded-lg"
        />
      </figure>
    </div>
  );
}

export default Practice;
