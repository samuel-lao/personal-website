import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

import { LuSun, LuMoon } from "react-icons/lu";

const Navbar = () => {
const [darkMode, setDarkMode] = useState(false);
  
useEffect(() => {
  if (darkMode) {
    document.documentElement.setAttribute("data-theme", "dark")
    document.querySelector("meta[name='theme-color']").setAttribute("content", "#1d1d1d");
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.querySelector("meta[name='theme-color']").setAttribute("content", "#f6f6f6");
  }
}, [darkMode]); 

 return (
    <header>
        <nav style={{display: "flex", gap: 50, justifyContent: "center", alignItems: "center", paddingTop: 20, width: "100vw", position: "fixed", top: 0, zIndex: 100, paddingBottom: 20 }} id="navbar">
            <NavLink to="/" className={"navbar-text"} >Home</NavLink>
            {/* <NavLink to="/about" className={"navbar-text"}>About Me</NavLink> */}
            <NavLink to="/projects" className={"navbar-text"}>Projects</NavLink>
            <NavLink to="/teddy" className={"navbar-text"}>Teddy</NavLink>
            <div className={darkMode ? "lightButton" : "darkButton"} onClick={() => {setDarkMode(!darkMode)}}>
                {darkMode ? <LuSun size={20}/> : <LuMoon color="white" size={20} />}
            </div>
        </nav>
    </header>
 );
};

export default Navbar;