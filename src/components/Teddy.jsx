import React, { useState, } from 'react'
import { LuArrowRight, LuExternalLink } from "react-icons/lu";

import { animated, easings, useTransition } from '@react-spring/web';

import "./Teddy.css"
import { Link } from 'react-router-dom';

import teddy from "../assets/teddy.jpeg"

// What a secret!
const SECRET_PASSKEY = "Teddy is objectively the best dog."


export default function Teddy() {
    const [permission, setPermission] = useState(false)
    const [wrong, setWrong] = useState(null)
    const [index, setIndex] = useState(0)


    function handleSubmit(e) {
        e.preventDefault()

        const data = new FormData(e.target)
        const formJson = Object.fromEntries(data.entries());
        console.log(formJson)
        if (formJson.answer === SECRET_PASSKEY) {
            setPermission(true)
            setIndex(1)

        } else {
            setWrong(true)
        }
    }

    const Display = ({ item }) => {
        if (item == 0) {
            return (
                <>
                    <text style={{ fontFamily: "InterRegular", fontSize: "24px", paddingBottom: "50px" }}>Prove yourself worthy to witness the splendor of Teddy Dog.</text>
                    <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, width: "100%", paddingBottom: "20px", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, width: "100%" }}>
                            <input name="answer" className={`teddy-input ${wrong && "wrong"}`} placeholder='Enter the secret passkey.' />
                            <button type="submit" style={{ all: "unset" }}>
                                <LuArrowRight className='teddy-submit-input' size={24} />
                            </button>
                        </div>
                        {wrong && <text className='incorrect-text'>That's wrong!</text>}
                    </form>
                    <Link to="https://github.com/Samurl88/personal-website" style={{ textDecoration: "none",  }} className="info-content-link">
                        <text>Passkey?!? Where could it be...</text>
                        <LuExternalLink color='#2b9278' />
                    </Link>
                </>
            )
        } else if (item == 1) {
            return (
                <>
                    <div>loading</div>
                </>
            )
        } else if (item == 2) {
            return (
                <>
                    <img src={teddy} width={"50%"} />
                    <text style={{ paddingTop: "15px", fontFamily: "InterMedium", fontSize: "20px" }}>It's Teddy!</text>
                </>
            )
        }
    }



    const transitions = useTransition(index, {
        from: { opacity: 0, y: 25 },
        enter: { opacity: 1, y: 0},
        leave: { opacity: 0, y: 25 },
        exitBeforeEnter: true,
        config: { duration: 350, easing: easings.easeInOutCubic }
    });


    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "75vh", }}>
            <div style={{ width: "45rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", }}>
                    {transitions((style, i) =>
                        i !== null ? (
                            <animated.div style={{display: "flex", flexDirection: "column", ...style}}>
                                <Display item={index} />
                            </animated.div>
                        ) : (
                            <div />
                        )
                    )}
            </div>
        </div>
    )
}