import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

export default function Navbar() {
    const [toggle, setToggle] = React.useState('show-menu');
    function expandMenu() {
        console.log(toggle);
        if (toggle == 'show-menu') {
            setToggle('close-menu');
        }
        else {
            setToggle('show-menu');
        }
    }
    return (
        <nav id="navbar">
            <ul className="desktop-nav">
                <a href="#home" className="nav-item">HOME</a>
                <a href="#about" className="nav-item">ABOUT</a>
                <a href="" className="logo">{`<THAYA/CHEVA>`}</a>
                <a href="#projects" className="nav-item">PROJECTS</a>
                <a href="#footer" className="nav-item">CONTACT</a>
            </ul>
            <div className="mobile-nav">
                <a href="" className="logo">{`<THAYA/CHEVA>`}</a>
                <div className="ham-menu " onClick={() => expandMenu()}>
                    {toggle == 'show-menu' && <FontAwesomeIcon className="icon" icon={faBars}/>}
                    {toggle == 'close-menu' && <FontAwesomeIcon className="icon" icon={faXmark}/>}
                </div>
            </div>
            <div className={`drop-menu ${toggle}`}>
                <ul>
                    <li><a href="#home"><FontAwesomeIcon icon={faXmark}/>  HOME  <FontAwesomeIcon icon={faXmark}/></a></li>
                    <li><a href="#about"><FontAwesomeIcon icon={faXmark}/>  ABOUT  <FontAwesomeIcon icon={faXmark}/></a></li>
                    <li><a href="#projects"><FontAwesomeIcon icon={faXmark}/>  PROJECTS  <FontAwesomeIcon icon={faXmark}/></a></li>
                    <li><a href="#footer"><FontAwesomeIcon icon={faXmark}/>  CONTACT  <FontAwesomeIcon icon={faXmark}/></a></li>
                </ul>
            </div>
        </nav>
    )
}