export default function WorkPlaces({
  timelineText,
}: {
  timelineText?: string;
}) {
  const workTimeline = [
    {
      company: "(PGB) TotalEnergies",
      role: "Fullstack developer",
      period: "2025.06 - Present",
      color: "#BFA181",
    },
    {
      company: "Altkom",
      role: "Fullstack developer intern",
      period: "2024.03 - 2024.04",
      color: "#7dd3fc",
    },
    {
      company: "Altkom",
      role: "Fullstack developer intern",
      period: "2023.02 - 2023.03",
      color: "#a78bfa",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top: Wide Workplaces Box */}
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
        className="px-6 py-8 m-10 w-full max-w-5xl text-center shadow-lg bg-gray-900 bg-opacity-80 transition-transform hover:scale-101"
      >
        <h2 className="text-2xl font-bold mb-2 text-[#BFA181]">Workplaces</h2>
        <p className="mb-4 text-white">
          Here you can find information about my previous workplaces.
        </p>
        
      </div>

      {/* Bottom: Timeline (left) and References (right) */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Timeline Box */}
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
          className="flex-1 bg-gray-900 bg-opacity-80 rounded-xl p-6 min-h-[220px] text-center shadow-lg transition-transform hover:scale-101"
        >
          <h3 className="text-lg font-semibold text-[#BFA181] mb-4">Timeline</h3>
          <div className="relative flex flex-col items-start pl-6 w-full max-w-xs mx-auto">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#BFA181] to-[#a78bfa] opacity-40" />
            {workTimeline.map((item) => (
              <div
                key={item.company + item.period}
                className="relative mb-8 last:mb-0 z-10 flex items-center"
              >
                <div
                  className="absolute -left-6 top-4 w-4 h-4 rounded-full border-2 shadow-md"
                  style={{
                    background: item.color,
                    borderColor: item.color,
                    boxShadow: `0 0 8px 2px ${item.color}`,
                  }}
                />
                <div className="ml-4 text-left">
                  <div
                    className="font-bold text-base"
                    style={{ color: item.color }}
                  >
                    {item.company}
                  </div>
                  <div className="text-xs text-gray-300">{item.role}</div>
                  <div className="text-xs text-gray-400">{item.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Work References Box */}
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
          className="flex-1 bg-gray-900 bg-opacity-80 rounded-xl p-6 min-h-[220px] text-center shadow-lg transition-transform hover:scale-101"
        >
          <h3 className="text-lg font-semibold text-[#BFA181] mb-2">Work References</h3>
          <p className="text-gray-300 mb-4 text-sm">Download my work references and recommendation letters here.</p>
          {/* Example download button, replace href with your file */}
          <a
            href="/src/assets/Referencje%20Praktyki%20Wojciech%20Polit.pdf"
            download="Referencje Praktyki Wojciech Polit.pdf"
            className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-[#3fdad8] to-[#a78bfa] text-white font-bold shadow-md hover:scale-105 transition-transform"
          >
            Download Reference (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
