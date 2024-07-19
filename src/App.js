import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { useTransition, animated } from "@react-spring/web";
import AnimatedRoutes from "./AnimatedRoutes"

function App() {
  // const location = useLocation();
  // const transitions = useTransition(location, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });

  return (
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes/>
      </BrowserRouter>
  );
}

export default App;
