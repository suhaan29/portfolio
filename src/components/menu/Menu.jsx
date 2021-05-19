import React from "react"

import "./menu.scss"

export default function Menu({menuOpen, setMenu}) {
    return (
      <div className = {"menu " + (menuOpen && "active")}>
           
        <ul className = "listContainer">
            <li onClick = {() => setMenu(!menuOpen)}>
                <a href = "#intro">Home</a>
            </li>
            <li onClick = {() => setMenu(!menuOpen)}> 
                <a href = "#portfolio">Portfolio</a>
            </li>
            <li onClick = {() => setMenu(!menuOpen)}>
                <a href = "#works">Works</a>
            </li>
            <li onClick = {() => setMenu(!menuOpen)}>
                <a href = "#testimonial">Testimonials</a>
            </li>
            <li onClick = {() => setMenu(!menuOpen)}>
                <a href = "#contact">Contact</a>
            </li>
        </ul>
      </div>
    )
}