import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { useTransition, animated } from "@react-spring/web";
import AnimatedRoutes from "./AnimatedRoutes"
import { useState, useEffect } from "react";


function App() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false);

  useEffect(() => {
    // document.body.style.transition = "background-color 0.4s"
  }, [])

  useEffect(() => {
    if (darkMode) {
        document.documentElement.setAttribute("data-theme", "dark")
        document.querySelector("meta[name='theme-color']").setAttribute("content", "rgb(32, 32, 35)");
        localStorage.setItem("darkMode", true)
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.querySelector("meta[name='theme-color']").setAttribute("content", "#f6f6f6");
        localStorage.setItem("darkMode", false)
    }
}, [darkMode]);

  return (
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <AnimatedRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
      </BrowserRouter>
  );
}

export default App;
