import React from 'react'
import './Taxdetails.css'
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';
import FaceIcon from '@mui/icons-material/Face';
import { useNavigate } from 'react-router-dom';

const Taxdetails = () => {
    const navigate = useNavigate();
    const formsubmit = (e) => {
        
        e.preventDefault();
        console.log("function is working")
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData)
        
    };
    return (
        <div className='appone'>
            <div className='Head-class'>
                <Sidebar />
                <div className="container">
                    <form onSubmit={(event) => {
                        formsubmit(event);
                        navigate('/Bankdetails')
                    }}>
                        <div className="white-bar">
                            <span class="name">Ankush Thakur</span>
                            <div class="icon">
                                <FaceIcon />
                            </div>
                        </div>

                        {/* Navbar code */}
                        <ul className="hero-section">
                            <li><NavLink className="active" to="/">Home</NavLink></li>
                            <li><NavLink className="active" to="/taxdetails">Tax Details</NavLink></li>
                            <li><NavLink className="active" to="/bankdetails">Bank Details</NavLink></li>
                            <li><NavLink className="active" to="#">Branch Address</NavLink></li>
                            <li><NavLink className="active" to="#">Attachments</NavLink></li>
                            <li><NavLink className="active" to="#">Other Details</NavLink></li>
                        </ul>
                        <div className='head-closed '>
                            <div className='closed-class'>
                                <div class="form-container">
                                    <div className='hero-head'>
                                        <label for="pancard" class="form-label">PAN</label>
                                        <input type="number" id="pancard" name="pancard" className="form-control" />
                                    </div>
                                    <div className='hero-head'>
                                        <label for="gstnumber" class="form-label">GST</label>
                                        <input type="text" id="address" name="address" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-container">
                                    <div className='hero-head'>
                                        <label for="vatnumber" class="form-label">VAT</label>
                                        <input type="text" id="floor" name="vatnumber" className="form-control" />
                                    </div>
                                    <div className='hero-head '>
                                        <label for="tinnumber" class="form-label">TIN </label>
                                        <input type="text" id="tinnumber" name="tinnumber" className="form-control" />
                                    </div>
                                </div>


                                <div className="form-container-split" >
                                    <div className='hero-head' >
                                        <label htmlFor="salestax" className="form-label">Sales Tax</label>
                                        <input type="text" id="salestax" name="salestax" className="form-control-multi" />
                                    </div>
                                    <div className='hero-head' >
                                        <label htmlFor="gstinput" className="form-label">GST I/P CREDIT ELIGIBILITY</label>
                                        <input type="text" id="gstinput" name="gstinput" className="form-control-multi" />
                                    </div>
                                    <div className='hero-head'>
                                        <label htmlFor="msedregister" className="form-label">MST Registration</label>
                                        <input type="text" id="msedregister" name="msedregister" className="form-control-multi" />
                                    </div>
                                    <div className='hero-head'>
                                        <label htmlFor="lowertax" className="form-label">Lower Tax Deduction Certificate</label>
                                        <input type="text" id="lowertax" name="lowertax" className="form-control-multi" />
                                    </div>
                                </div>

                                <div className="form-container">
                                    <div className='hero-head'>
                                        <label for="tdsvendor" class="form-label">TDS Applicability on vendor</label>
                                        <input type="text" id="tdsvendor" name="tdsvendor" className="form-control" />
                                    </div>
                                    <div className='hero-head'>
                                        <label for="extraf" class="form-label">Extra Field</label>
                                        <input type="text" id="extraf" name="extraf " className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nextbutton">
                            <button type="submit" className="next-btn">
                                Next
                            </button>
                        </div>

                    </form>
                </div >
            </div>
        </div>
    )
}

export default Taxdetails;