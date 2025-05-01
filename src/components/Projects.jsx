import React from 'react';
import './App.css';

import { animated } from '@react-spring/web';

import infer from '../assets/projects/infer.png';
import nutrivision from '../assets/projects/nutrivision.png';
import llmcreativity from '../assets/projects/llmcreativity.jpeg';
import memory from '../assets/projects/memory.jpeg';
import bingo from '../assets/projects/bingo.png';
import serviceoutreach from '../assets/projects/serviceoutreach.jpg';
import pdp from '../assets/projects/pdp.png';

import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <animated.div className="entire-projects-container">
            <div className="category">
                <text className="category-title">Long Term Projects</text>
                <div className="row-container">
                    <div className="category-container">

                        <div className="project-container">
                            <Link to="pdp">
                                <img src={pdp} height={"auto"} loading="lazy" className='project-image' />
                            </Link>
                            <text className="project-title">Penn Degree Plan</text>
                            <text className="project-subtitle">App to immerse immigrants for expedited language acquisition</text>
                            <div className="tag-container">
                                <text className="project-tag">FULLSTACK</text>
                                <text className="project-tag">REACT</text>
                                <text className="project-tag">DJANGO</text>
                                <text className="project-tag">POSTGRESQL</text>
                            </div>
                        </div>

                        <div className="project-container">
                            <Link to="infer">
                                <img src={infer} height={"auto"} loading="lazy" className='project-image' />
                            </Link>
                            <text className="project-title">Infer!</text>
                            <text className="project-subtitle">App to train inference skills of autistic audience using movies</text>
                            <div className="tag-container">
                                <text className="project-tag">ML</text>
                                <text className="project-tag">FULLSTACK</text>
                                <text className="project-tag">REACT NATIVE</text>
                            </div>
                        </div>

                        <div className="project-container">
                            <Link to="nutrivision">
                                <img src={nutrivision} height={"auto"} loading="lazy" className='project-image' />
                            </Link>
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
                <div className="row-container">
                    <div className="category-container">
                        <div className="project-container">
                            <Link to="memory">
                                <img src={memory} height={"auto"} loading="lazy" className='project-image' />
                            </Link>
                            <text className="project-title">Memory Research</text>
                            <text className="project-subtitle">Collaborating to improve memory by revamping the existing n-back task</text>
                            <div className="tag-container">
                                <text className="project-tag">WORKING MEMORY</text>
                                <text className="project-tag">DATA</text>
                                <text className="project-tag">REACT</text>
                            </div>
                        </div>

                        <div className="project-container">
                            <Link to="llmcreativity">
                                <img src={llmcreativity} height={"auto"} loading="lazy" className='project-image' />
                            </Link>                           
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
                <div className="row-container">
                    <div className="category-container">
                        <div className="project-container">
                            <Link to="serviceoutreach">
                                <img src={serviceoutreach} height={"auto"} loading="lazy" className='project-image' />
                            </Link>
                            <text className="project-title">Service Outreach</text>
                            <text className="project-subtitle">Led club that gave back to local community. 50% of school joined!</text>
                            <div className="tag-container">
                                <text className="project-tag">SOCIAL GOOD</text>
                                <text className="project-tag">CLUB</text>
                            </div>
                        </div>

                        <div className="project-container">
                            <Link to="bingo">
                                <img src={bingo} height={"auto"} loading="lazy" className='project-image' />
                            </Link>
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
        </animated.div>
    )
}
