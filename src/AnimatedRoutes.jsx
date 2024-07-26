import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTransition, animated, easings } from "@react-spring/web";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Teddy from "./components/Teddy";

import { useEffect, useState } from "react";

import projects from "./projects.json"

function App({ darkMode, setDarkMode }) {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, y: 25 },
    enter: { opacity: 1, y: 0},
    leave: { opacity: 0, y: 25 },
    exitBeforeEnter: true,
    config: { duration: 350, easing: easings.easeInOutCubic }
  });  

  useEffect(() => {
    console.log(darkMode)
  }, [darkMode])

  const tabTitles = {
    "/": "Home",
    "/projects": "Projects",
    "/teddy": "Teddy"
  }

  const getProject = () => {
    let str = location.pathname.split("/");
    let project = str[str.length - 1];
    let title = projects[project]?.tab || null

    return title;
  }

  return transitions((styles, item) => (
    <>
          <Helmet>
        <title>Samuel Lao | {tabTitles[location.pathname] || getProject() || "404"}</title>
      </Helmet>
    <animated.div style={{paddingTop: "75px", ...styles}}>
        <Routes location={item}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/teddy" element={<Teddy />} />
        </Routes>
        <footer style={{width: "100%", paddingBottom: 20, textAlign: "center", fontFamily: "InterRegular", fontSize: "12px", color: "var(--light-text-color)"}}>© Samuel Lao. Every single right reserved. They're mine.</footer>
    </animated.div>
    </>
  ));
}

export default App;
