import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

import { LuSun, LuMoon } from "react-icons/lu";

const Navbar = () => {
const darkMode = false

 return (
    <header>
        <nav style={{display: "flex", gap: 50, justifyContent: "center", paddingTop: 20, width: "100vw", position: "fixed", top: 0, zIndex: 100, paddingBottom: 20 }} id="navbar">
            <NavLink to="/" className={"navbar-text"} >Home</NavLink>
            {/* <NavLink to="/about" className={"navbar-text"}>About Me</NavLink> */}
            <NavLink to="/projects" className={"navbar-text"}>Projects</NavLink>
            <NavLink to="/teddy" className={"navbar-text"}>Teddy</NavLink>
            <div>
                {darkMode ? <LuSun /> : <LuMoon />}
            </div>
        </nav>
    </header>
 );
};

export default Navbar;