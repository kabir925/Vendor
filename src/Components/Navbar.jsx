import React from "react";
import './Navbar.css'
import Sidebar from './Sidebar';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="appone">
            <div className='Head-class'>
                <Sidebar />

                <ul className="hero-section">
                    <li><NavLink className="active" to="/">Home</NavLink></li>
                    <li><NavLink className="active" to="/taxdetails">Contact</NavLink></li>
                    <li><NavLink className="active" to="/bankdetails">Bank Details</NavLink></li>
                    <li><NavLink className="active" to="#">Branch Address</NavLink></li>
                    <li><NavLink className="active" to="#">Attachments</NavLink></li>
                    <li><NavLink className="active" to="#">Other Details</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar