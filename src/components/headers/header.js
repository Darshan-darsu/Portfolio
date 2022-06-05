import React from "react"
import "./header.css"


export default function Header (){
    return(
        <>
        <div className="header-wrapper">
            <div className="header-left">
                <div className="headername">
                    <p>Darshan K M</p>
                </div>
                <div className="togglebutton">
                    toggle
                </div>
            </div>

            <div className="header-right">
                <div className='header-list'>
                    <ul style={{ listStyleType: "none" }}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Experience</li>
                        <li>Testimonoal</li>
                      
                    </ul>
                    <button>contact us</button>
                  
                </div>

            </div>

        </div>
        <div style={{borderBottom:"1px solid #fff",marginBottom:5}}></div>
        </>
    )
}