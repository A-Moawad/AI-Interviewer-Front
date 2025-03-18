import React from "react";
import { FeaturesList } from "../data";
import Feature from "./Feature";

function Features() {
  return (
    <section className="px-6 md:px-16 py-10 lg:py-20 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Powerful Features to Boost Your Interview Skills
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-500 max-w-2xl">
          Our AI-powered platform provides everything you need to prepare for
          your next interview.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FeaturesList.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default Features;
