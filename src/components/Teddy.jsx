import React, { useState } from 'react'
import { LuArrowRight, LuExternalLink } from "react-icons/lu";


import "./Teddy.css"
import { Link } from 'react-router-dom';

import teddy from "../assets/teddy.jpeg"

// What a secret!
const SECRET_PASSKEY = "Teddy is objectively the best dog."

export default function Teddy() {

    const [answer, setAnswer] = useState(null)
    const [permission, setPermission] = useState(false)
    const [wrong, setWrong] = useState(null)


    function handleSubmit(e) {
        e.preventDefault()
        if (answer === SECRET_PASSKEY) {
            setPermission(true)
        } else {
            setWrong(true)
        }
    }


    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "75vh", }}>
            <div style={{ width: "45rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", }}>
                {permission
                    ? <>
                        <img src={teddy} width={"50%"} />
                        <text style={{ paddingTop: "15px", fontFamily: "InterMedium", fontSize: "20px" }}>It's Teddy!</text>
                    </>
                    : <>
                        <text style={{ fontFamily: "InterRegular", fontSize: "24px", paddingBottom: "50px" }}>Prove yourself worthy to witness the splendor of Teddy Dog.</text>
                        <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, width: "100%", paddingBottom: "20px", flexDirection: "column" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, width: "100%" }}>
                                <input className={`teddy-input ${wrong && "wrong"}`} placeholder='Enter the secret passkey.' onChange={e => setAnswer(e.target.value)} />
                                <button type="submit" style={{ all: "unset" }}>
                                    <LuArrowRight className='teddy-submit-input' size={24} />
                                </button>
                            </div>
                            {wrong && <text className='incorrect-text'>That's wrong!</text>}
                        </form>
                        <Link to="https://github.com/Samurl88/personal-website" style={{ textDecoration: "none" }} className="info-content-link">
                            <text>Passkey?!? Where could it be...</text>
                            <LuExternalLink color='#2b9278' />
                        </Link>
                    </>
                }

            </div>
        </div>
    )
}
