import React from "react";

function Feature({ title, description, feat1, feat2, feat3, icon: Icon }) {
  return (
    <div className=" p-6 rounded-lg  flex flex-col gap-4 border border-gray-800">
      {/* Icon */}
      <div className="text-4xl ">
        <Icon />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <ul className="mt-4 text-gray-300 list-disc list-inside">
        <li>{feat1}</li>
        <li>{feat2}</li>
        <li>{feat3}</li>
      </ul>
    </div>
  );
}

export default Feature;
