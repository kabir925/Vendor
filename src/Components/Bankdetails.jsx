import React from 'react'
import './Bankdetails.css'
import Sidebar from './Sidebar';
import FaceIcon from '@mui/icons-material/Face';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Bankdetails = () => {
    // const navigate=useNavigate();
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
                        // navigate('/Taxdetails');
                    }}>
                        <div className="white-bar">
                            <span class="name">Ankush Thakur</span>
                            <div class="icon">
                                <FaceIcon />
                            </div>
                        </div>

                        {/* Navbar code */}
                        <ul className="hero-section">
                            <li><NavLink className="active" to="/basicdetails">Home</NavLink></li>
                            <li><NavLink className="active" to="/taxdetails">Tax Details</NavLink></li>
                            <li><NavLink className="active" to="/bankdetails">Bank Details</NavLink></li>
                            <li><NavLink className="active" to="#">Branch Address</NavLink></li>
                            <li><NavLink className="active" to="#">Attachments</NavLink></li>
                            <li><NavLink className="active" to="#">Other Details</NavLink></li>
                        </ul>
                        <div className='head-closed'>
                            <div className='closed-class'>
                                <div class="form-container">
                                    <div className='hero-head'>
                                        <label for="bankname" class="form-label">Bank Name</label>
                                        <input type="text" id="bankname" name="bankname" className="form-control" />
                                    </div>
                                    <div className='hero-head'>
                                        <label for="bankname" class="form-label">Bank Address</label>
                                        <input type="text" id="bankaddress" name="bankname" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-container">
                                    <div className='hero-head'>
                                        <label for="accnumber" class="form-label">Bank Account Number</label>
                                        <input type="number" id="accnumber" name="accnumber" className="form-control" />
                                    </div>
                                    <div className='hero-head '>
                                        <label for="bankifsc" class="form-label">Bank IFSC Code </label>
                                        <input type="text" id="bankifsc" name="bankifsc" className="form-control" />
                                    </div>
                                </div>


                                <div className="form-container-split" >
                                    <div className='hero-head' >
                                        <label htmlFor="swiftcode" className="form-label">Swift Code</label>
                                        <input type="text" id="swiftcode" name="swiftcode" className="form-control-multi" />
                                    </div>
                                    <div className='hero-head' >
                                        <label htmlFor="wirecode" className="form-label">Wire Code</label>
                                        <input type="text" id="wirecode" name="wirecode" className="form-control-multi" />
                                    </div>
                                    <div className='hero-head'>
                                        <label htmlFor="county" className="form-label">County:</label>
                                        <input type="text" id="county" name="county" className="form-control-multi" />
                                    </div>
                                    <div className='hero-head'>
                                        <label htmlFor="country3" className="form-label">Country:</label>
                                        <input type="text" id="country3" name="country3" className="form-control-multi" />
                                    </div>
                                </div>

                                <div className="form-container">
                                    <div className='hero-head'>
                                        <label for="banksupportcustomeremail" class="form-label">Bank Support Customer Email</label>
                                        <input type="email" id="banksupportcustomeremail" name="banksupportcustomeremail" className="form-control" />
                                    </div>
                                    <div className='hero-head'>
                                        <label for="banksupportnumber" class="form-label">Extra Field</label>
                                        <input type="number" id="banksupportnumber" name="banksupportnumber " className="form-control" />
                                    </div>
                                </div>

                                <div className="form-container">
                                    <div className='hero-head'>
                                        <label for="other1" class="form-label">Other1</label>
                                        <input type="text" id="other1" name="other1" className="form-control" />
                                    </div>
                                    <div className='hero-head'>
                                        <label for="other2" class="form-label">Other 2</label>
                                        <input type="text" id="other2" name="other2 " className="form-control" />
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

export default Bankdetails;