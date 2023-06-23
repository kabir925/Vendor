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
                            <li><NavLink className="active" to="#">Home</NavLink></li>
                            <li><NavLink className="active" to="#">Tax Details</NavLink></li>
                            <li><NavLink className="active" to="#">Bank Details</NavLink></li>
                            <li><NavLink className="active" to="#">Branch Address</NavLink></li>
                            <li><NavLink className="active" to="#">Attachments</NavLink></li>
                            <li><NavLink className="active" to="#">Other Details</NavLink></li>
                        </ul>
                        <div className='head-closed '>
                            <div className='closed-class'>
                                <div class="form-container">
                                    <div className='hero-head'>
                                        <label for="Pan" class="form-label">PAN</label>
                                        <input type="number" id="Pan" name="Pan" className="form-control" />
                                    </div>
                                    <div className='hero-head'>
                                        <label for="GST" class="form-label">GST</label>
                                        <input type="text" id="GST" name="GST" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-container">
                                    <div className='hero-head'>
                                        <label for="VAT" class="form-label">VAT</label>
                                        <input type="number" id="VAT" name="VAT" className="form-control" />
                                    </div>
                                    <div className='hero-head '>
                                        <label for="TINNumber" class="form-label">TIN </label>
                                        <input type="number" id="TINNumber" name="TINNumber" className="form-control" />
                                    </div>
                                </div>


                                <div className="form-container-split" >
                                    <div className='hero-head' >
                                        <label htmlFor="SalesTax" className="form-label">Sales Tax</label>
                                        <input type="text" id="SalesTax" name="SalesTax" className="form-control-multi" />
                                    </div>
                                    <div className='hero-head' >
                                        <label htmlFor="GSTEligibility" className="form-label">GST I/P CREDIT ELIGIBILITY</label>
                                        <input type="text" id="GSTEligibility" name="GSTEligibility" className="form-control-multi" />
                                    </div>
                                    <div className='hero-head'>
                                        <label htmlFor="MSEDRegisteration" className="form-label">MST Registration</label>
                                        <input type="text" id="MSEDRegisteration" name="MSEDRegisteration" className="form-control-multi" />
                                    </div>
                                    <div className='hero-head'>
                                        <label htmlFor="LowerTaxDeductionCertificate" className="form-label">Lower Tax Deduction Certificate</label>
                                        <input type="text" id="LowerTaxDeductionCertificate" name="LowerTaxDeductionCertificate" className="form-control-multi" />
                                    </div>
                                </div>

                                <div className="form-container">
                                    <div className='hero-head'>
                                        <label for="TDSApplicabilityOnVendor" class="form-label">TDS Applicability on vendor</label>
                                        <input type="text" id="TDSApplicabilityOnVendor" name="TDSApplicabilityOnVendor" className="form-control" />
                                    </div>
                                    {/* <div className='hero-head'>
                                        <label for="extraf" class="form-label">Extra Field</label>
                                        <input type="text" id="extraf" name="extraf " className="form-control" />
                                    </div> */}
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