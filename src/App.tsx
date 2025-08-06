import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import StarBackground from "./components/StarBackground";
import ProjectsHolder from "./components/ProjectsHolder";
import Timeline from "./components/Timeline";
import AboutMe from "./components/AboutMe";
import WorkPlaces from "./components/WorkPlaces";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
      <StarBackground />
      <Header />
      <Timeline>
        <ProjectsHolder timelineText="My favourite projects:"/>
        <AboutMe timelineText="About me:" />
        <WorkPlaces timelineText="My work experience: "/>
        <Achievements timelineText="My achievements:" />
      </Timeline>
      <Footer />
    </div>
  );
}

export default App;
