import React, { useEffect } from 'react'
import './App.css';

import myface from '../assets/myface.jpeg';
import { Link } from 'react-router-dom';
import { FaRegEnvelope } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { RxDoubleArrowRight } from "react-icons/rx";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="home-super-container">
            <div className="home-container">
                <div className="home-info-container">
                    <div className='title'>Samuel Lao</div>
                    <div className='subtitle'>Sophomore at the <span style={{ color: "var(--penn-red)" }}>University of Pennsylvania</span>. Enjoying life.</div>
                    <Link to="/projects" className="view-projects-btn" style={{alignSelf: "flex-start", marginTop: "clamp(0px, 0.7vw, 20px)", marginBottom: "clamp(0px, 0.7vw, 10px)"}}>
                        <div>View Projects</div>
                        <RxDoubleArrowRight size={25} />
                    </Link>
                    <div id="social" className='social-container'>
                        <Link to="https://github.com/samuel-lao">
                            <FiGithub size={"clamp(20px, 4vw, 40px)"} className='social-icon' color="var(--text-color)" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/samlao/">
                            <FaLinkedinIn size={"clamp(20px, 4vw, 40px)"} className='social-icon' color="var(--text-color)" />
                        </Link>
                        <Link to="mailto:samuel.lao100@gmail.com">
                            <FaRegEnvelope size={"clamp(20px, 4vw, 40px)"} className='social-icon' color="var(--text-color)" />
                        </Link>
                    </div>
                </div>
                <img src={myface} className='myface' alt="my face" />
            </div>

            <div className="home-container-small">
                <div className='title'>Samuel Lao</div>
                <img src={myface} className='myface' alt="my face" />
                <div className='subtitle'>Sophomore at the <span style={{ color: "var(--penn-red)" }}>University of Pennsylvania</span>. Enjoying life.</div>
                <Link to="/projects" className="view-projects-btn">
                    <div>View Projects</div>
                    <RxDoubleArrowRight size={25} />
                    </Link>
                <div id="social" className='social-container'>
                    <Link to="https://github.com/samuel-lao">
                        <FiGithub size={30} className='social-icon' color="var(--text-color)" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/samlao/">
                        <FaLinkedinIn size={30} className='social-icon' color="var(--text-color)" />
                    </Link>
                    <Link to="mailto:samuel.lao100@gmail.com">
                        <FaRegEnvelope size={30} className='social-icon' color="var(--text-color)" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
