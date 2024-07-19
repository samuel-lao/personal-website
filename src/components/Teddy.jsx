import React from 'react'
import { LuArrowRight } from "react-icons/lu";


import "./Teddy.css"

// What a secret!
const SECRET_PASSKEY = "Teddy is objectively the best dog."

export default function Teddy() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh", flexDirection: "column", gap: "50px" }}>
            <text style={{ fontFamily: "InterRegular", fontSize: "24px", }}>Prove yourself worthy to witness the splendor of Teddy Dog.</text>
            <div style={{width: "100%"}}>
                <input className='teddy-input' placeholder='Enter the secret passkey.'/>
                <LuArrowRight />
            </div>

        </div>
    )
}
