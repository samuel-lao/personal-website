import React from 'react'
import './App.css';

import envelope from '../assets/envelope.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import myface from '../assets/myface.png';

export default function Home() {
  return (
    <div>
        <div>Samuel Lao</div>
        <div>I'm so cool. Would you like to meet me?
        This is epic. I really need to fill space!</div>
        <div style={{display: "flex", gap: 15 }}>
            <img src={envelope} height={40} width={40} alt="email" />
            <img src={github} height={40} width={40} alt="github" />
            <img src={linkedin} height={40} width={40} alt="linkedin" />
            <img src={instagram} height={40} width={40} alt="instagram" />
        </div>
        <img src={myface} height={500} width={500} alt="instagram" />

    </div>
  )
}
