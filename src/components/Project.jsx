import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { animated } from '@react-spring/web';

import githubwhite from "../assets/githubwhite.svg"
import githuboutline from "../assets/github-circle-outline.svg"
import sanakama from "../assets/sanakama.png"
import asdrp from "../assets/asdrp.png"
import cs50 from "../assets/cs50.png"

import projects from "../projects.json"

import "./Project.css"

export default function Project() {
    const [id, setId] = useState(useParams().id);

    const [title, setTitle] = useState(null)
    const [subtitle, setSubtitle] = useState(null)
    const [blurb, setBlurb] = useState(null)
    const [designation, setDesignation] = useState(null)
    const [github, setGithub] = useState(null)
    const [info, setInfo] = useState(null)
    const [awards, setAwards] = useState(null)
    const [videos, setVideos] = useState(null)
    const [photos, setPhotos] = useState(null)
    const [conferences, setConferences] = useState(null)
    const [activities, setActivities] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
        if (projects[id]) {
            setDesignation(projects[id].designation)
            setGithub(projects[id].github)
            setTitle(projects[id].title)
            setSubtitle(projects[id].subtitle)
            setBlurb(projects[id].blurb)
            setInfo(projects[id].info)
            setAwards(projects[id].awards)
            setConferences(projects[id].conferences)
            setActivities(projects[id].activities)
            setVideos(projects[id].videos)
            setPhotos(projects[id].photos)

        }
    }, [])


    if (title)
        return (
            <animated.div style={{ display: "flex", alignItems: "center", paddingTop: "5vh", flexDirection: "column", paddingBottom: "5vh" }}>
                <div style={{ width: "45rem", alignItems: "center", display: "flex", flexDirection: "column", gap: 10, position: "relative" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", left: 0, right: 0, top: 0, }}>
                        {
                            designation == "sanakama" &&
                            <>
                                <img src={sanakama} className='designation' />
                                <div className='tooltip'>Built by Team Sanakama (Sam, Nathan, Kabir, Matthew)!</div>
                            </>
                        }
                        {
                            designation == "asdrp" &&
                            <>
                                <img src={asdrp} className='designation' />
                                <div className='tooltip'>Researched in the Aspiring Scholars Directed Research Program.</div>
                            </>
                        }
                        {
                            designation == "cs50" &&
                            <>
                                <img src={cs50} className='designation' />
                                <div className='tooltip'>Completed as a final project for Harvard's online CS50x course.</div>
                            </>
                        }
                        {
                            github &&
                            <Link to={github} style={{ textDecoration: "none" }}>
                                <img src={githuboutline} style={{ width: "2.5em" }} className="github-btn"></img>
                            </Link>
                        }
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <text className='i-project-title'>{title}</text>
                        <text className='i-project-subtitle'>- {subtitle} -</text>
                        <text className='blurb'>{blurb}</text>
                    </div>
                    <div style={{ gap: 7, display: "flex", flexDirection: "column", width: "95%" }}>
                        {info.map((element) => {
                            if (element?.link) {
                                return (
                                    <div style={{ display: "flex", gap: 10, alignItems: "center", flexDirection: "row" }}>
                                        <div className="info-title">{element.title}</div>
                                        {element.content.map((item) => {
                                            if (item.link)
                                                return (
                                                    <Link to={item.link} style={{ textDecoration: "none" }}>
                                                        <text className="info-content-link">{item.title}{element.content.length > 1 && element.content.slice(-1)[0] != item ? "," : ""}</text>
                                                    </Link>
                                                )
                                            else
                                                return (
                                                    <text className="info-content-link-disabled">{item.title}{element.content.length > 1 && element.content.slice(-1)[0] != item ? "," : ""}</text>
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

                    {(awards || conferences || activities) &&
                        <text className="awards-header">{awards && "Awards"}{conferences && "Conferences"}{activities && "Partners & Activities"}</text>
                    }
                    <div style={{ gap: 7, display: "flex", flexDirection: "column", width: "95%" }}>
                        {awards && awards.map((element) => {
                            return (
                                <div style={{ display: "flex", gap: 10, alignItems: "center", flexDirection: "row" }}>
                                    <div className="info-title">{element.title}</div>
                                    <div className="info-content">{element.description}</div>
                                </div>
                            )
                        })}
                        {conferences && conferences.map((element) => {
                            return (
                                <div style={{ display: "flex", gap: 10, alignItems: "center", flexDirection: "row" }}>
                                    <div className="info-title">{element.title}</div>
                                    <div className="info-content">{element.description}</div>
                                </div>
                            )
                        })}
                        {activities && activities.map((element) => {
                            return (
                                <div style={{ display: "flex", gap: 10, alignItems: "center", flexDirection: "row" }}>
                                    <div className="info-title">{element.title}</div>
                                    <div className="info-content">{element.description}</div>
                                </div>
                            )
                        })}
                    </div>

                    {photos && photos.map((photo) => {
                        return (
                            <img src={photo} width="100%" height="auto" style={{ aspectRatio: "16 / 9", objectFit: "cover", objectPosition: "center", borderRadius: "10px", marginTop: 10 }} />
                        )
                    })}

                    {videos && videos.map((video) => {
                        return (
                            <iframe style={{ marginTop: 10 }} width="100%" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        )
                    })}



                </div>
            </animated.div>
        )


    // If project doesn't exist
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh" }}>
            <text style={{ fontFamily: "InterRegular", fontSize: "24px", color: "darkgray" }}>This project doesn't exist! (Or I haven't made the page for it yet...)</text>
        </div>
    )
}
