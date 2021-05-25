import React from "react"
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar(props) {
   if(props.menuOpen === true){
       var al = "topbar active";
   }
   else
   {
       al = "topbar"
   }
    return (
        <div className = {al}>
            <div className="wrapper">
                <div className="left">
                    <a href = "#intro" className = "logo">Portfolio.</a>
                    <div className="itemContainer">
                       <Person className = "icon"/>
                        <span>+91 30303030330</span>  
                    </div>
                    <div className="itemContainer">
                        <Mail className = "icon"/>
                        <span>suhaan2909@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => props.setMenu(!props.menuOpen)}>
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>

                    </div>
                </div>
            </div>

        </div>
    )
}