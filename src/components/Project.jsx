import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { animated } from '@react-spring/web';

import projects from "../projects.json"

import "./Project.css"

export default function Project() {
    const [id, setId] = useState(useParams().id);

    const [title, setTitle] = useState(null)
    const [blurb, setBlurb] = useState(null)
    const [designation, setDesignation] = useState(null)
    const [info, setInfo] = useState(null)
    const [awards, setAwards] = useState(null)

    useEffect(() => {
        if (projects[id]) {
            setDesignation(projects[id].designation)
            setTitle(projects[id].title)
            setBlurb(projects[id].blurb)
            setInfo(projects[id].info)
            setAwards(projects[id].awards)
        }
    }, [])


    if (title)
        return (
            <animated.div style={{ display: "flex", alignItems: "center", paddingTop: "5vh", flexDirection: "column" }}>
                <div style={{ width: "50rem", alignItems: "center", display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <text className='i-project-title'>{title}</text>
                        <text className='blurb'>{blurb}</text>
                    </div>
                    <div style={{ gap: 7, display: "flex", flexDirection: "column", width: "95%" }}>
                        {info.map((element) => {
                            if (element?.link) {
                                return (
                                    <div style={{ display: "flex", gap: 10, alignItems: "center", flexDirection: "row" }}>
                                        <div className="info-title">{element.title}</div>
                                        {element.content.map((item) => {
                                            return (
                                                <Link to={item.link} style={{ textDecoration: "none" }}>
                                                    <text className="info-content-link">{item.title}{element.content.length > 1 && element.content.slice(-1)[0] != item ? "," : ""}</text>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )
                            } else
                                return (
                                    <div style={{ display: "flex", gap: 10, alignItems: "center", flexDirection: "row" }}>
                                        <div className="info-title">{element.title}</div>
                                        <div className="info-content">{element.content}</div>
                                    </div>
                                )
                        })}
                    </div>

                    <text className="awards-header">Awards</text>
                    <div style={{ gap: 7, display: "flex", flexDirection: "column", width: "95%" }}>
                        {awards.map((element) => {

                            return (
                                <div style={{ display: "flex", gap: 10, alignItems: "center", flexDirection: "row" }}>
                                    <div className="info-title">{element.title}</div>
                                    <div className="info-content">{element.description}</div>
                                </div>
                            )
                        })}
                    </div>
                    <iframe width="100%" height="" src="https://www.youtube.com/embed/1W7hd6iPHfk?si=oECL-NEzEEeM89bU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    {/* <div class="video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/1W7hd6iPHfk?si=oECL-NEzEEeM89bU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div> */}
                </div>
            </animated.div>
        )


    // If project doesn't exist
    return (
        <div>
            This project doesn't exist!
        </div>
    )
}
