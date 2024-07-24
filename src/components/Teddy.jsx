import React, { useState, useCallback, memo, useEffect } from 'react';
import { LuArrowRight, LuExternalLink } from "react-icons/lu";
import { animated, easings, useTransition } from '@react-spring/web';
import "./Teddy.css";
import { Link } from 'react-router-dom';
import teddy from "../assets/teddy.jpeg";

import { GridLoader, PropagateLoader } from 'react-spinners';

// What a secret!
const SECRET_PASSKEY = "Teddy is objectively the best dog.";

// Hey!! Spoilers!!
const loadingPhrases = ["Accessing the mainframe...", "Validating the centromeres...", "Munging the spamblock...", "In."]

const Display = memo(({ item, answer, setAnswer, wrong, setWrong, handleSubmit, setIndex }) => {

    const [loadingIndex, setLoadingIndex] = useState(0)

    const transitions = useTransition(loadingIndex, {
        from: { opacity: 0, },
        enter: { opacity: 1, },
        leave: { opacity: 0, },
        exitBeforeEnter: true,
        config: { duration: 500, easing: easings.easeInOutCubic }
    });

    useEffect(() => {
        if (item == 1) {
            var i = 0;
            var intr = setInterval(function () {
                i += 1
                setLoadingIndex(i)
                if (i >= loadingPhrases.length) {
                    clearInterval(intr)
                    setIndex(2)
                }
            }, 2000)
        }
    }, [item])


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    if (item === 0) {
        return (
            <>
                <text style={{ fontFamily: "InterRegular", fontSize: "24px", marginBottom: "50px", textAlign: "center", color: "var(--text-color)" }}>Prove yourself worthy to witness the splendor of Teddy Dog.</text>
                <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, width: "100%" }}>
                        <input
                            name="answer"
                            className={`teddy-input ${wrong && "wrong"}`}
                            placeholder='Enter the secret passkey.'
                            value={answer}
                            onChange={e => { setAnswer(e.target.value); setWrong(false); }}
                        />
                        <button type="submit" style={{ all: "unset" }}>
                            <LuArrowRight className='teddy-submit-input' size={24} color={"var(--text-color)"}/>
                        </button>
                    </div>
                    <text className={wrong ? 'incorrect-text' : 'incorrect-text-hidden'}>That's wrong!</text>
                </form>
                <Link to="https://github.com/Samurl88/personal-website" style={{ textDecoration: "none", }} className="info-content-link">
                    <text>Passkey?!? Where could it be...</text>
                    <LuExternalLink color='#2b9278' />
                </Link>
            </>
        );
    } else if (item === 1) {
        return (
            <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center", }}>
                <GridLoader style={{ paddingBottom: "20px" }} color={"orange"} loading={true} size={15} />
                {transitions((style, i) =>
                    i !== null ? (
                        <animated.div style={{fontFamily: "InterRegular", fontSize: "18px", color: "var(--text-color)", ...style}}>{loadingPhrases[i]}</animated.div>
                    ) : (
                        <div />
                    )
                )}
            </div>);
    } else if (item === 2) {
        return (
            <>
                <img src={teddy} width={"50%"} alt="Teddy" />
                <p style={{ paddingTop: "15px", fontFamily: "InterMedium", fontSize: "20px", color: "var(--text-color)" }}>It's Teddy!</p>
            </>
        );
    }
});

export default function Teddy() {
    const [permission, setPermission] = useState(false);
    const [wrong, setWrong] = useState(null);
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState("");

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formJson = Object.fromEntries(data.entries());
        if (formJson.answer === SECRET_PASSKEY) {
            setPermission(true);
            setIndex(1);
        } else {
            setWrong(true);
        }
    }, []);

    const transitions = useTransition(index, {
        from: { opacity: 0, y: 25 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: 25 },
        exitBeforeEnter: true,
        config: { duration: 350, easing: easings.easeInOutCubic }
    });

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "75vh" }}>
            <div style={{ width: "clamp(1rem, 90vw, 45rem)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                {transitions((style, i) =>
                    i !== null ? (
                        <animated.div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", ...style }}>
                            <Display item={i} answer={answer} setAnswer={setAnswer} wrong={wrong} setWrong={setWrong} handleSubmit={handleSubmit} setIndex={setIndex} />
                        </animated.div>
                    ) : (
                        <div />
                    )
                )}
            </div>
        </div>
    );
}