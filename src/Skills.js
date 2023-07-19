import React from 'react'
import './styling/skills.css'
export default function Skills() {
    return (
        <section id="skills">
            <div className="skills-container">
            <div className="header">
                    <img className="cross" src={require('./images/cross-black.png')}/>
                    <h1>MY SKILLS</h1>
                    <img className="cross" src={require('./images/cross-black.png')}/>    
                </div>
                <h2>Langauges:</h2>
                <div className="skills-list">
                    <div className="skills-item">PYTHON</div>
                    <div className="skills-item">JAVA</div>
                    <div className="skills-item">JAVASCRIPT</div>
                    <div className="skills-item">C</div>
                    <div className="skills-item">C#</div>
                    <div className="skills-item">MYSQL</div>
                </div>
                <h2>Web Dev:</h2>
                <div className="skills-list skills-2">
                    <div className="skills-item">HTML</div>
                    <div className="skills-item">CSS</div>
                    <div className="skills-item">REACT</div>
                    <div className="skills-item">SASS</div>
                </div>
            </div>
        </section>
    )
}