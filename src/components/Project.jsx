import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
            <animated.div style={{ display: "flex", alignItems: "center", paddingTop: "5vh", flexDirection: "column", gap: 10}}>
                <div style={{ width: "50rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <text className='i-project-title'>{title}</text>
                    <text className='blurb'>{blurb}</text>
                </div>
                <div style={{gap: 5, display: "flex", flexDirection: "column"}}>
                    {info.map((element) => {
                        if (element?.link) {
                            // return link
                            return
                        }
                        return (
                            <div style={{display: "flex", gap: 5, alignItems: "center"}}>
                                <div className="info-title">{element.title}</div>
                                <div className="info-content">{element.content}</div>
                            </div>
                        )
                    })}
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
