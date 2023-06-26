import React from "react";
import Sidebar from "./Sidebar";
import FaceIcon from '@mui/icons-material/Face';
import { NavLink } from "react-router-dom";
const Attachment =()=> {
    return(
        <div className="Appone">
        <div className="Head-class">
          <Sidebar />
          <div className="container">
          <div className="white-bar">
              <span className="name">Ankush Thakur</span>
              <div className="icon">
                <FaceIcon />
              </div>
            </div>
            </div>
            <ul className="hero-section">
              <li><NavLink className="active" to="#">Home</NavLink></li>
              <li><NavLink className="active" to="#">Tax Details</NavLink></li>
              <li><NavLink className="active" to="#">Bank Details</NavLink></li>
              <li><NavLink className="active" to="#">Branch Address</NavLink></li>
              <li><NavLink className="active" to="#">Attachments</NavLink></li>
              <li><NavLink className="active" to="#">Other Details</NavLink></li>
            </ul>
          </div>
          </div>
    )
}

export default Attachment;