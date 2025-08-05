
import Project from "./Project";

const projects = [
  {
    name: "Wielik AI",
    description: "A pdf file descriptor that uses AI to extract key information from PDF documents.",
    url: "https://github.com/Wojtoppin/PDF_AI_Descriptor",
  },
  {
    name: "Option Chooser",
    description: "An application that helps users make decisions by analyzing options and providing recommendations.",
    url: "https://github.com/Wojtoppin/optionChooser",
  },
  {
    name: "Soccer leadeboard",
    description: "An app made to track progress of the Vodka Volleys soccer team.",
    url: "https://github.com/Wojtoppin/VodkaVolleys",
  }
];

const neonBox =
  " p-6 m-4 flex-1 min-w-[220px] max-w-xs text-center shadow-lg" +
  " bg-gray-900 bg-opacity-80" +
  " transition-transform hover:scale-105";

const Projects = ({timelineText}: {timelineText:string}) => {

  return (
    <section className="flex flex-col items-center py-8">
      <h1
        className="mb-8 text-3xl md:text-4xl font-extrabold tracking-wide text-center"
        style={{
          color: "#e0e7ef",
          textShadow: "0 1px 2px #2228, 0 0 2px #00bfff55",
          letterSpacing: "0.1em",
        }}
      >
      </h1>
      <div className="flex flex-wrap justify-center items-stretch gap-4 w-full">
        {projects.map((project) => (
          <Project
            key={project.name}
            project={project}
            neonBox={neonBox}
          />
        ))}
      </div>
    </section>
  );}

export default Projects;