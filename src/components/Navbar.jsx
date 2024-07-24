import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

import { LuSun, LuMoon, LuMenu } from "react-icons/lu";

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <header>
            <nav id="navbar">
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

            <nav id="navbar-small">
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "90vw", gap: "10px" }}>
                    <NavLink to="/" className={"navbar-text"}>(Temp)</NavLink>
                    <NavLink to="/projects" className={"navbar-text"}>Projects</NavLink>
                    <NavLink to="/teddy" className={"navbar-text"}>Teddy</NavLink>
                    <div className={darkMode ? "lightButton" : "darkButton"} onClick={() => { setDarkMode(!darkMode) }}>
                        {darkMode ? <LuSun size={20} /> : <LuMoon color="white" size={20} />}
                    </div>
                    <div className="nav-menu-btn">
                        <LuMenu size={20} color="var(--text-color)" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;