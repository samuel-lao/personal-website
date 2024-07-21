import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { useTransition, animated } from "@react-spring/web";
import AnimatedRoutes from "./AnimatedRoutes"


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes/>
      </BrowserRouter>
  );
}

export default App;
