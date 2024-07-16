import React from 'react'
import './App.css';

import envelope from '../assets/envelope.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import myface from '../assets/myface.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div style={{ height: "85vh", justifyContent: "center", alignItems: "center", display: "flex" }}>
            <div style={{ width: "90vw", display: "flex", justifyContent: "center", gap: 50}}>
                <div style={{ justifyContent: "center", gap: 15, display: 'flex', flexDirection: "column", maxWidth: "50vw" }}>
                    <div className='title'>Samuel Lao</div>
                    <div className='subtitle'>I'm so cool. Would you like to meet me?
                        This is epic. I really need to fill space!</div>
                    <div id="social" style={{ display: "flex", gap: 45, paddingTop: 10 }}>
                        <Link to="mailto:samuel.lao100@gmail.com">
                            <img src={envelope} height={40} width={40} className="social-icon" alt="email" />
                        </Link>
                        <Link to="https://github.com/Samurl88">
                            <img src={github} height={40} width={40} className="social-icon" alt="github" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/samlao/">
                            <img src={linkedin} height={40} width={40} className="social-icon" alt="linkedin" />
                        </Link>
                        <Link to="https://www.instagram.com/samuel.b.lao/">
                            <img src={instagram} height={40} width={40} className="social-icon" alt="instagram" />
                        </Link>
                    </div>
                </div>
                <img src={myface} height={400} width={400} alt="my face" />
            </div>
        </div>
    )
}
