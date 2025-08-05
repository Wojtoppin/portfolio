export default function WorkPlaces({
  timelineText,
}: {
  timelineText?: string;
}) {
  const workTimeline = [
    {
      company: "Acme Corp",
      role: "Frontend Developer",
      period: "2022 - Present",
      color: "#BFA181",
    },
    {
      company: "BetaSoft",
      role: "React Intern",
      period: "2021 - 2022",
      color: "#7dd3fc",
    },
    {
      company: "Gamma Solutions",
      role: "Junior Web Dev",
      period: "2020 - 2021",
      color: "#a78bfa",
    },
  ];

  return (
    <div
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
      className="px-4 py-6 m-10 flex-1 min-w-[220px] text-center shadow-lg bg-gray-900 bg-opacity-80 transition-transform hover:scale-101"
    >
      {" "}
      <h2 className="text-xl font-bold mb-2 text-[#BFA181]">Workplaces</h2>{" "}
      <p className="mb-4 text-white">
        Here you can find information about my previous workplaces.{" "}
      </p>{" "}
      <div className="flex justify-center">
        {" "}
        <div className="relative flex flex-col items-start pl-6">
          {/* Vertical line */}{" "}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#BFA181] to-[#a78bfa] opacity-40" />{" "}
          {workTimeline.map((item, idx) => (
            <div
              key={item.company}
              className="relative mb-8 last:mb-0 z-10 flex items-center"
            >
              {" "}
              <div
                className="absolute -left-6 top-4 w-4 h-4 rounded-full border-2 shadow-md"
                style={{
                  background: item.color,
                  borderColor: item.color,
                  boxShadow: `0 0 8px 2px ${item.color}`,
                }}
              />{" "}
              <div className="ml-4 text-left">
                {" "}
                <div
                  className="font-bold text-base"
                  style={{ color: item.color }}
                >
                  {item.company}
                </div>{" "}
                <div className="text-xs text-gray-300">{item.role}</div>{" "}
                <div className="text-xs text-gray-400">{item.period}</div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
