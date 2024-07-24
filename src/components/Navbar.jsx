import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

import { LuSun, LuMoon, LuMenu } from "react-icons/lu";
import { FaRegSmile } from "react-icons/fa";


const Navbar = ({ darkMode, setDarkMode }) => {
    const [open, setOpen] = useState(false)
    return (
        <header>
<nav id="navbar">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90vw" }}>
        <Link to="/" className="navbar-title" id="ee" style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <div className="samButton" id="ff">
                <FaRegSmile color="var(--text-color)" size={20} />
            </div>
            <div>S.L.</div>
        </Link>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <div style={{ display: "flex", gap: "50px" }}>
                <NavLink to="/" className={"navbar-text"}>Home</NavLink>
                <NavLink to="/projects" className={"navbar-text"}>Projects</NavLink>
                <NavLink to="/teddy" className={"navbar-text"}>Teddy</NavLink>
            </div>
        </div>
        <div className={darkMode ? "lightButton" : "darkButton"} onClick={() => { setDarkMode(!darkMode) }}>
            {darkMode ? <LuSun size={20} /> : <LuMoon color="white" size={20} />}
        </div>
    </div>
</nav>

            <nav id="navbar-small">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90vw", }}>
                    <Link to="/" className="navbar-title" id="ee" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <div className="samButton" id="ff">
                            <FaRegSmile color="var(--text-color)" size={20} />
                        </div>
                        <div>Samuel Lao</div>
                    </Link>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div className={darkMode ? "lightButton" : "darkButton"} onClick={() => { setDarkMode(!darkMode) }}>
                            {darkMode ? <LuSun size={20} /> : <LuMoon color="white" size={20} />}
                        </div>
                        <div className={open ? "nav-menu-btn-open" : "nav-menu-btn"} onClick={() => setOpen(!open)}>
                            <LuMenu size={20} color="var(--text-color)" />
                            {open &&
                                <div className="menu">
                                    <NavLink to="/" className="menu-item">
                                        <div className="menu-btn">Home</div>
                                    </NavLink>
                                    <NavLink to="/projects" className="menu-item">
                                        <div className="menu-btn">Projects</div>
                                    </NavLink>
                                    <NavLink to="/teddy" className="menu-item">
                                        <div className="menu-btn">Teddy</div>
                                    </NavLink>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Navbar;