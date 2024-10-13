import React, {FC, useRef} from 'react';
import gsap from "gsap";
import logo from '../../../images/logo.svg';
import './Header.scss';
import {Link} from "react-router-dom";

const Header: FC = () => {

    return (
        <header >
            <nav className="desktop-nav">
                <Link to="/" className="active h6">Home</Link>
                <Link to="/catalog" className="h6">Find a doctor</Link>
                <a href="/" className="h6">Apps</a>
                <a href="/" className="h6">Testimonials</a>
                <a href="/" className="h6">About us</a>
            </nav>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <a href="/">
                            <li>Home</li>
                        </a>
                        <a href="/">
                            <li>Find a doctor</li>
                        </a>
                        <a href="/">
                            <li>Apps</li>
                        </a>
                        <a href="/">
                            <li>Testimonials</li>
                        </a>
                        <a href="/">
                            <li>About us</li>
                        </a>
                    </ul>
                </div>
            </nav>
            <img className="logo" src={logo} alt="Trafalgar"/>
        </header>
    );
};

export default Header;