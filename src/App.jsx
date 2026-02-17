import React from "react";
import PageLoader from "./components/layout/PageLoader";
import VideoBackground from "./components/layout/VideoBackground";
import LeftSidebar from "./components/layout/LeftSidebar";
import CircularNavigation from "./components/layout/CircularNavigation";
import Introduce from "./components/sections/Introduce";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import WorkExperience from "./components/sections/WorkExperience";
import Certificate from "./components/sections/Certificate";
import Skills from "./components/sections/Skills";
import Project from "./components/sections/Project";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen">
      <PageLoader />
      <VideoBackground />
      <LeftSidebar />

      {/* CircularNavigation — desktop only */}
      <div className="hidden lg:block">
        <CircularNavigation />
      </div>

      <main className="relative">
        <Introduce />
        <About />
        <Education />
        <WorkExperience />
        <Certificate />
        <Skills />
        <Project />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;