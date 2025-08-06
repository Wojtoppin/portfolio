import React from "react";
import Achievement from "./Achievement";

const achievements = [
  {
    name: "Vocational Diploma",
    description:
      "Completed a vocational diploma in Programming with a score of 96%.",
    issuer: "Polish Regional Examination Board",
    place: undefined, // Add this line
  },
  {
    name: "AI4Youth finalist",
    description: "Finalist in the AI4Youth competition.",
    issuer: "Intel & Polish Ministry of Economic Development and Technology",
    place: "Finalist", // Example with value
  },
  // Add more achievements here
];
type AchievementsProps = {
  timelineText?: string;
};
// @ts-ignore: timelineText is intentionally unused
const Achievements: React.FC<AchievementsProps> = ({ timelineText }) => (

  <div
    className="px-4 pt-6 pb-2 m-10 flex-1 min-w-[220px] text-center shadow-lg bg-gray-900 bg-opacity-80 transition-transform hover:scale-101"
    style={{
      boxShadow:
        "0 0 2px 1px #3fdad8, 0 0 4px 2px #3b82f6, 0 0 6px 2px #a78bfa, 0 0 8px 2px #38bdf8",
      borderImage:
        "linear-gradient(135deg, #3fdad8, #3b82f6, #a78bfa, #38bdf8) 1",
      borderColor: "transparent",
      color: "#e0e7ef",
      textDecoration: "none",
      borderRadius: "20px",
    }}
  >
    <h2 className="text-2xl font-semibold mt-4 mb-6 text-gold">Achievements</h2>
    <div className="prose prose-invert text-left max-w-none">
      {achievements.map((ach, idx) => (
        <Achievement
          key={idx}
          name={ach.name}
          description={ach.description}
          place={ach.place}
          issuer={ach.issuer}
        />
      ))}
    </div>
  </div>
);

export default Achievements;
