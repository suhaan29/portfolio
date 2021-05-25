import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import {init} from "ityped"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            
            strings: ["Unemployed", "Broke", "Desperate"]
        })
    }, [])

    return (
        <div className = "intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/PersonalCropped.gif" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Suhaan Pinapala</h1>
                    <h3>and I am <span ref = {textRef}></span></h3>
                </div>
                <a href = "#portfolio">
                    <img src="assets/arrowdown.png" alt="" />
                </a>
            </div>
        </div>
    )
}

