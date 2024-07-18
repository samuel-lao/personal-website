import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTransition, animated, easings } from "@react-spring/web";


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Project from "./components/Project";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, y: 25 },
    enter: { opacity: 1, y: 0},
    leave: { opacity: 0, y: 25 },
    exitBeforeEnter: true,
    config: { duration: 350, easing: easings.easeInOutCubic }
  });

  return transitions((styles, item) => (
    <animated.div style={styles}>
        <Routes location={item}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
    </animated.div>
  ));
}

export default App;
