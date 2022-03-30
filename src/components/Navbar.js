import './Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';

import GitHubWhite from '../assets/icons/github_white.png';
import GitHubBlue from '../assets/icons/github_blue.png';
import LinkedInWhite from '../assets/icons/linkedin_white.png';
import LinkedInBlue from '../assets/icons/linkedin_blue.png';

const Navbar = () => {
    return (
        <div className='navigation'>
            <div class='head'>
                <div class='social-media'>
                    <div class='icon'>
                        <a href='https://github.com/nmoody9899'>
                            <img src={GitHubWhite} /> 
                        </a>
                        <a class='color-swap' href='https://github.com/nmoody9899'>
                            <img src={GitHubBlue} /> 
                        </a>
                    </div>
                    <div class='icon'>
                        <a href='https://www.linkedin.com/in/nicholasmoody1/'>
                            <img src={LinkedInWhite} /> 
                        </a>
                        <a class='color-swap' href='https://www.linkedin.com/in/nicholasmoody1/'>
                            <img src={LinkedInBlue} /> 
                        </a>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to='/' className={`links`}>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className={`links`}>About</Link>
                        </li>
                        <li>
                            <Link to='/experience' className={`links`}>Experience</Link>
                        </li>
                        <li>
                            <Link to='/projects' className={`links`}>Projects</Link>
                        </li>
                        <li>
                            <Link to='/contact' className={`links`}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

//                 <a href='https://www.linkedin.com/in/nicholasmoody1/'>
// <img src={LinkedInWhite} />
// </a>