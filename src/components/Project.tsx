import React, { useRef } from "react";
import ProjectDialog from "./ProjectDialog";
import type { ProjectDialogRef } from "./ProjectDialog";
export default function Project({ project, neonBox }: { project: any; neonBox: string }) {
  const dialogRef = useRef<ProjectDialogRef>(null);
  // Try to guess the README.md raw URL from the repo URL
  let markdownUrl = "";
  try {
    const match = project.url.match(/github.com\/(.+?)\/(.+?)(\/|$)/);
    if (match) {
      markdownUrl = `https://raw.githubusercontent.com/${match[1]}/${match[2]}/main/README.md`;
    }
  } catch {}

  return (
    <div className={neonBox}
      style={{
        boxShadow:
          "0 0 2px 1px #3fdad8, 0 0 4px 2px #3b82f6, 0 0 6px 2px #a78bfa, 0 0 8px 2px #38bdf8",
        borderColor: "transparent",
        color: "#e0e7ef",
        textDecoration: "none",
        borderRadius: "20px",
      }}
    >
      <h2 className="text-xl font-bold mb-2 text-[#BFA181]">
        {project.name}
      </h2>
      <p className="mb-4">{project.description}</p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 underline hover:text-cyan-100"
        >
          View on GitHub
        </a>
        <button
          className="ml-2 px-3 py-1 rounded bg-cyan-800 text-cyan-100 hover:bg-cyan-600 transition"
          onClick={() => dialogRef.current?.open()}
        >
          Show Details
        </button>
      </div>
      <ProjectDialog ref={dialogRef} markdownUrl={markdownUrl} />
    </div>
  );
}