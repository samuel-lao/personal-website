import React from 'react'
import './App.css';

import envelope from '../assets/envelope.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import myface from '../assets/myface.png';
import { Link } from 'react-router-dom';

import { FaLink, FaRegEnvelope } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
    return (
        <div style={{ height: "85vh", justifyContent: "center", alignItems: "center", display: "flex" }}>
            <div className="home-container">
                <div className="home-info-container">
                    <div className='title'>Samuel Lao</div>
                    <div className='subtitle'>Incoming freshman at the <span style={{ color: "var(--penn-red)" }}>University of Pennsylvania</span>. Enjoying life.</div>
                    <div id="social" style={{ display: "flex", gap: 45, paddingTop: 10 }}>
                        <Link to="mailto:samuel.lao100@gmail.com">
                            {/* <img src={envelope} height={40} width={40} className="social-icon" alt="email" /> */}
                            <FaRegEnvelope size={40} className='social-icon' color="var(--text-color)" />
                        </Link>
                        <Link to="https://github.com/Samurl88">
                            <FiGithub size={40} className='social-icon' color="var(--text-color)" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/samlao/">
                            <FaLinkedinIn size={40} className='social-icon' color="var(--text-color)" />
                        </Link>
                        <Link to="https://www.instagram.com/samuel.b.lao/">
                            <FaInstagram size={40} className='social-icon' color="var(--text-color)" />
                        </Link>
                    </div>
                </div>
                <img src={myface} className='myface' alt="my face" />
            </div>
        </div>
    )
}
