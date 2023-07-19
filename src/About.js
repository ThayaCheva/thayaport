import React from 'react'
import "./styling/about.css"
import PDF from './files/thaya-resume.pdf'

export default function About() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="header">
                    <img className="cross" src={require('./images/cross-black.png')}/>
                    <h1>ABOUT ME</h1>
                    <img className="cross" src={require('./images/cross-black.png')}/>    
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href={PDF} target="_blank" className="btn-1">MY RESUME</a>
            </div>
        </section>
    )
}