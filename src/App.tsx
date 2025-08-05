import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import StarBackground from "./components/StarBackground";
import ProjectsHolder from "./components/ProjectsHolder";
import Timeline from "./components/Timeline";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
      <StarBackground />
      <Header />
      <Timeline>
        <ProjectsHolder timelineText="My favourite projects:"/>
        <AboutMe timelineText="About me:" />
        <ProjectsHolder timelineText="My favourite projects:" />
        <ProjectsHolder timelineText="My favourite projects:" />
      </Timeline>
    </div>
  );
}

export default App;
