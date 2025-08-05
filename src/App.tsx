import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import StarBackground from "./components/StarBackground";
import ProjectsHolder from "./components/ProjectsHolder";
import Timeline from "./components/Timeline";
import AboutMe from "./components/AboutMe";
import WorkPlaces from "./components/WorkPlaces";

function App() {
  return (
    <div className="App bg-gradient-to-b from-[#0A1828] to-[black]" style={{ position: "relative", minHeight: "100vh" }}>
      <StarBackground />
      <Header />
      <Timeline>
        <ProjectsHolder timelineText="My favourite projects:"/>
        <AboutMe timelineText="About me:" />
        <WorkPlaces timelineText="My work experience: "/>
      </Timeline>
    </div>
  );
}

export default App;
