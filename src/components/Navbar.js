import './Navbar.css';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import GitHubWhite from '../assets/icons/github_white.png';
import GitHubBlue from '../assets/icons/github_blue.png';
import LinkedInWhite from '../assets/icons/linkedin_white.png';
import LinkedInBlue from '../assets/icons/linkedin_blue.png';

const Navbar = () => {
    return (
        <div className='navigation'>
            <div class='head'>
                <div>
                    <div class='icon'>
                        <a href='https://github.com/nmoody9899'>
                            <img src={GitHubWhite} class='social-media' /> 
                        </a>
                        <a class='color-swap' href='https://github.com/nmoody9899'>
                            <img src={GitHubBlue} class='social-media' /> 
                        </a>
                    </div>
                    <div class='icon'>
                        <a href='https://www.linkedin.com/in/nicholasmoody1/'>
                            <img src={LinkedInWhite} class='social-media' /> 
                        </a>
                        <a class='color-swap' href='https://www.linkedin.com/in/nicholasmoody1/'>
                            <img src={LinkedInBlue} class='social-media' /> 
                        </a>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink exact to='/' className={`links`} activeClassName='active'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/about' className={`links`} activeClassName='active'>About</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/projects' className={`links`} activeClassName='active'>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/contact' className={`links`} activeClassName='active'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;