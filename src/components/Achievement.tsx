import React from "react";

type AchievementProps = {
  name: string;
  description: string;
  place?: string;
};

const Achievement: React.FC<AchievementProps> = ({ name, description, place }) => (
  <div className="mb-6 p-4 rounded-lg bg-gray-800 bg-opacity-80 shadow-md border border-transparent hover:scale-101 transition-transform">
    <h3 className="text-xl font-bold text-gold mb-2">{name}</h3>
    <p className="text-gray-300 mb-2">{description}</p>
    {place && (
      <span className="inline-block px-3 py-1 bg-emerald text-white rounded-full text-sm font-semibold">
        {place}
      </span>
    )}
  </div>
);

export default Achievement;