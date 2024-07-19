import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
 return (
    <header>
        <nav style={{display: "flex", gap: 50, justifyContent: "center", paddingTop: 30, width: "100vw", position: "fixed", top: 0, zIndex: 100}} id="navbar">
            <NavLink to="/" className={"navbar-text"} >Home</NavLink>
            {/* <NavLink to="/about" className={"navbar-text"}>About Me</NavLink> */}
            <NavLink to="/projects" className={"navbar-text"}>Projects</NavLink>
            <NavLink to="/teddy" className={"navbar-text"}>Teddy</NavLink>
        </nav>
    </header>
 );
};

export default Navbar;