import React,{ useState } from 'react'
import { Link } from "react-router-dom";
import { MdMedication } from "react-icons/md"
import { FaBars, FaTimes } from "react-icons/fa"
import { Button } from './Button';
import'./Navbar.css'
import { IconContext } from 'react-icons/lib';

import {useHistory} from "react-router-dom";

function Navbar() {
    let history = useHistory(); 


    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        setButton(true);
    }

        window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to = '/home' className="navbar-logo" onClick={closeMobileMenu}>
                            <MdMedication className="navbar-icon" />
                            D.O.C.
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            { click ? <FaTimes/> : <FaBars />}
                        </div>
                        <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                            <li className="navbar-item">
                                <Link to ='/home' className="navbar-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to ='/calendar' className="navbar-links" onClick={closeMobileMenu}>
                                    Calendar
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to ='/feedback' className="navbar-links" onClick={closeMobileMenu}>
                                    Office Feedback
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to ='/footer-container' className="navbar-links" onClick={closeMobileMenu}>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                        <div className="navbar-button">
                            {button ? (
                                <Link to ='/login' className="button--link">
                                    <Button buttonStyle = 'button--outline'>
                                        SIGN IN
                                    </Button>
                                </Link>) : (
                                    <Link to = '/login'  className="button-link">
                                        <Button buttonstyle = 'button--outline' buttonSize='button--mobile' onClick={closeMobileMenu}>
                                            SIGN IN
                                        </Button>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
