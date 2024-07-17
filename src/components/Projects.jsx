import React from 'react';
import './App.css';

import infer from '../assets/projects/infer.png';
import lexify from '../assets/projects/lexify.png';
import nutrivision from '../assets/projects/nutrivision.png';
import llmcreativity from '../assets/projects/llmcreativity.jpeg';
import memory from '../assets/projects/memory.jpeg';
import bingo from '../assets/projects/bingo.png';
import serviceoutreach from '../assets/projects/serviceoutreach.jpg';

export default function Projects() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "5vh", flexDirection: "column" }}>
            <div className="category">
                <text className="category-title">Long Term Projects</text>
                {/* <text className="category-subtitle">Apps I've made with my team, Sanakama</text> */}
                <div style={{ width: "clamp(10vw, 60vw, 65rem)" }}>
                    <div className="category-container">
                        <div className="project-container">
                            <img src={infer} height={"auto"} className='project-image' />
                            <text className="project-title">Infer!</text>
                            <text className="project-subtitle">App to train inference skills of autistic audience using movies</text>
                            <div className="tag-container">
                                <text className="project-tag">ML (GEN TEXT)</text>
                                <text className="project-tag">FULLSTACK</text>
                                <text className="project-tag">REACT NATIVE</text>
                            </div>
                        </div>

                        <div className="project-container">
                            <img src={lexify} height={"auto"} className='project-image' />
                            <text className="project-title">Lexify</text>
                            <text className="project-subtitle">App to immerse immigrants for expedited language acquisition</text>
                            <div className="tag-container">
                                <text className="project-tag">OCR</text>
                                <text className="project-tag">FIREBASE</text>
                                <text className="project-tag">REACT NATIVE</text>
                            </div>
                        </div>

                        <div className="project-container">
                            <img src={nutrivision} height={"auto"} className='project-image' />
                            <text className="project-title">Nutrivision</text>
                            <text className="project-subtitle">App to promote mindful eating while alleviating dieting pressure</text>
                            <div className="tag-container">
                                <text className="project-tag">IMG RECOG</text>
                                <text className="project-tag">HEALTH</text>
                                <text className="project-tag">REACT NATIVE</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="category">
                <text className="category-title">Research Projects</text>
                {/* <text className="category-subtitle">Apps I've made with my team, Sanakama</text> */}
                <div style={{ width: "clamp(10vw, 60vw, 65rem)" }}>
                    <div className="category-container">
                        <div className="project-container">
                            <img src={memory} height={"auto"} className='project-image' />
                            <text className="project-title">Memory Research</text>
                            <text className="project-subtitle">Collaborating to improve memory by revamping the existing n-back task</text>
                            <div className="tag-container">
                                <text className="project-tag">WORKING MEMORY</text>
                                <text className="project-tag">DATA</text>
                                <text className="project-tag">REACT</text>
                            </div>
                        </div>

                        <div className="project-container">
                            <img src={llmcreativity} height={"auto"} className='project-image' />
                            <text className="project-title">LLM Creativity Research</text>
                            <text className="project-subtitle">Collaborating to test the creativity of LLMs using established assessments</text>
                            <div className="tag-container">
                                <text className="project-tag">LLMs</text>
                                <text className="project-tag">HIPAA</text>
                                <text className="project-tag">RESEARCH</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="category">
                <text className="category-title">Past Projects</text>
                {/* <text className="category-subtitle">Apps I've made with my team, Sanakama</text> */}
                <div style={{ width: "clamp(10vw, 60vw, 65rem)" }}>
                    <div className="category-container">
                        <div className="project-container">
                            <img src={serviceoutreach} height={"auto"} className='project-image' />
                            <text className="project-title">Service Outreach</text>
                            <text className="project-subtitle">Led club that gave back to local community. 50% of school joined!</text>
                            <div className="tag-container">
                                <text className="project-tag">SOCIAL GOOD</text>
                                <text className="project-tag">CLUB</text>
                            </div>
                        </div>

                        <div className="project-container">
                            <img src={bingo} height={"auto"} className='project-image' />
                            <text className="project-title">SkyBlock Bingo</text>
                            <text className="project-subtitle">An automated guide for a game in a game in a game in a game</text>
                            <div className="tag-container">
                                <text className="project-tag">WEB SCRAPING</text>
                                <text className="project-tag">GAME</text>
                                <text className="project-tag">FULLSTACK</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
