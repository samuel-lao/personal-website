import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { animated } from '@react-spring/web';

import projects from "../projects.json"

export default function Project() {
    const [id, setId] = useState(useParams().id);

    const [title, setTitle] = useState(null)

    useEffect(() => {
        if (projects[id]) {
            setTitle(projects[id].title)
        }
    }, [])


    if (title) 
        return (
            <animated.div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "5vh", flexDirection: "column", }}>
                <div>{title}</div>
            </animated.div>
        )
    

    // If project doesn't exist
    return (
        <div>
            This project doesn't exist!
        </div>
    )
}
