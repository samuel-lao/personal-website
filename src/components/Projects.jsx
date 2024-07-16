import React from 'react'
import './App.css'

import infer from '../assets/projects/infer.png'

export default function Projects() {
  return (
    <div style={{display: "flex", justifyContent: "center", paddingTop: "5vh"}}>
        <div style={{ width: "clamp(10vw, 70vw, 65rem)" }}>
            <div className="category-container">
                <div className="project-container">
                    <img src={infer} height={"auto"} className='project-image'/>
                    <text className="project-title">Infer!</text>
                    <text className="project-subtitle">App to train inference skills of autistic audience using movies</text>
                    <div className="tag-container">
                        <text className="project-tag">ML (GEN TEXT)</text>
                        <text className="project-tag">FULLSTACK</text>
                        <text className="project-tag">REACT NATIVE</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
