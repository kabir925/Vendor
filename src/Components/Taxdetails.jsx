import React from 'react'
import './Taxdetails.css'
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';
import FaceIcon from '@mui/icons-material/Face';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Cookies from 'js-cookie';

const Taxdetails = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("jwttoken");

    useEffect(() => {

        const userDetailsCookie = Cookies.get("signincookie");
        if (!userDetailsCookie) {
            navigate("/login");
        }
    }, [navigate]);
    const formsubmit = (e) => {

        e.preventDefault();
        console.log("function is working")
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData)


        const id = toast.loading("Please wait...")
        axios.patch("https://new-vendor-backend.vercel.app/api/v1/vendors/addUserInfo/", {
            data: formData,
        }, {
            headers: {
                authorization: `${token}`
            }
        })
            .then((res) => {
                console.log(res);
                // const jwtToken = res.data.token;
                // axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
                toast.update(id, {
                    render: "Data Saved",
                    type: "success",
                    isLoading: false,
                    closeOnClick: true,
                    autoClose: 4000,
                });

            })
            .catch((res) => {
                console.log(res.message);
                toast.update(id, {
                    render: "Enter Details Carefully",
                    type: "error",
                    isLoading: false,
                    closeOnClick: true,
                    autoClose: 5000,
                });
            });


    };
    return (
        <div className='appone'>
            <div className='Head-class'>
                <Sidebar />
                <div className="container">
                    <form onSubmit={(event) => {
                        formsubmit(event);
                        navigate('/bankdetails')
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
                        <div className='head-closed '>
                            <div className='closed-class'>
                                <div class="form-container">
                                    <div className='hero-head'>
                                        <label for="Pan" class="form-label">PAN</label>
                                        <input type="text" id="Pan" name="Pan" className="form-control" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" required />
                                    </div>
                                    <div className='hero-head'>
                                        <label for="GST" class="form-label">GST</label>
                                        <input type="text" id="GST" name="GST" className="form-control" pattern="^[A-Z]{2}[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}$" required />
                                    </div>
                                </div>

                                <div className="form-container">
                                    <div className='hero-head'>
                                        <label for="VAT" class="form-label">VAT</label>
                                        <input type="text" id="VAT" name="VAT" className="form-control" pattern="^[A-Z]{2}[0-9A-Z]{2,12}$" required />
                                    </div>
                                    <div className='hero-head '>
                                        <label for="TINNumber" class="form-label">TIN </label>
                                        <input type="text" id="TINNumber" name="TINNumber" className="form-control" required />
                                    </div>
                                </div>


                                <div className="form-container-split" >
                                    <div className='hero-head' >
                                        <label htmlFor="SalesTax" className="form-label">Sales Tax</label>
                                        <input type="text" id="SalesTax" name="SalesTax" className="form-control-multi" required />
                                    </div>
                                    <div className='hero-head' >
                                        <label htmlFor="GSTEligibility" className="form-label">GST I/P CREDIT ELIGIBILITY</label>
                                        <input type="text" id="GSTEligibility" name="GSTEligibility" className="form-control-multi" required />
                                    </div>
                                    <div className='hero-head'>
                                        <label htmlFor="MSEDRegisteration" className="form-label">MST Registration</label>
                                        <input type="text" id="MSEDRegisteration" name="MSEDRegisteration" className="form-control-multi" required />
                                    </div>
                                    <div className='hero-head'>
                                        <label htmlFor="LowerTaxDeductionCertificate" className="form-label">Lower Tax Deduction Certificate</label>
                                        <input type="text" id="LowerTaxDeductionCertificate" name="LowerTaxDeductionCertificate" className="form-control-multi" required />
                                    </div>
                                </div>

                                <div className="form-container">
                                    <div className='hero-head'>
                                        <label for="TDSApplicabilityOnVendor" class="form-label">TDS Applicability on vendor</label>
                                        <input type="text" id="TDSApplicabilityOnVendor" name="TDSApplicabilityOnVendor" className="form-control" required />
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