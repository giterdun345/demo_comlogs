import React from 'react'
import "./reportStyling.css"
import {HamburgerButton} from "react-hamburger-button";
// import LogoutBtn from '../LogoutBtn'

const Header = (props) => { 
        return (
            <div id="header-wrapper">
                <div className="nav-item mx-5 btn">
                    <HamburgerButton
                                                open={props.cross}
                                                onClick={props.click}
                                                width={18}
                                                height={15}
                                                strokeWidth={4}
                                                color='white'
                                                animationDuration={0.5}
                                            />
                </div>
                <div className="nav-item mx-5 title">
                    Lead Counsellor<span>&nbsp;Reporting</span>
                </div>
                <div className="nav-item ml-auto p-5">
                    {/* <LogoutBtn setAuth = {props.auth} /> */}
                    <a href='/'> Go Back</a>
                </div>            
            </div>
        )
    }
export default Header