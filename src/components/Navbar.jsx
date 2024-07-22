import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

import { LuSun, LuMoon } from "react-icons/lu";

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <header>
            <nav style={{ display: "flex", gap: 50, justifyContent: "center", alignItems: "center", paddingTop: 20, width: "100vw", position: "fixed", top: 0, zIndex: 100, paddingBottom: 20 }} id="navbar">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90vw" }}>
                {/* <Link to="/" className={"navbar-title"}>Samuel Lao</Link> */}
                    <div style={{ display: "flex", gap: 50 }}>
                        <NavLink to="/" className={"navbar-text"}>Home</NavLink>
                        <NavLink to="/projects" className={"navbar-text"}>Projects</NavLink>
                        <NavLink to="/teddy" className={"navbar-text"}>Teddy</NavLink>
                    </div>
                    <div className={darkMode ? "lightButton" : "darkButton"} onClick={() => { setDarkMode(!darkMode) }}>
                        {darkMode ? <LuSun size={20} /> : <LuMoon color="white" size={20} />}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;