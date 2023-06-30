import React from 'react'
import './Bankdetails.css'
import Sidebar from './Sidebar';
import FaceIcon from '@mui/icons-material/Face';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';

const Bankdetails = () => {
    const[userData,setuserData]=useState({
        data: {
            vendor: {
                PrimaryEmailID:""
            }
        }
    })
    const token = localStorage.getItem("jwttoken");
    const navigate = useNavigate();
    useEffect(() => {

        const userDetailsCookie = Cookies.get("signincookie");
        if (!userDetailsCookie) {
            navigate("/login");
        }
        setuserData(JSON.parse(userDetailsCookie))
    }, [navigate]);



    const formsubmit = (e) => {
        e.preventDefault();
        console.log("function is working")
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData)

        const id = toast.loading("Please wait...")
        axios.patch("/vendors/addUserInfo/", {
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
                navigate('/attachments');

            })
            .catch((res) => {
                console.log(res.message);
                toast.update(id, {
                    render: "Incorrect Details",
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
                        // navigate('/Taxdetails');
                    }}>
                        <div className="white-bar">
                            <span class="name">{userData.data.vendor.PrimaryEmailID}</span>
                            <div class="icon">
                                <FaceIcon />
                            </div>
                        </div>

                        {/* Navbar code */}

                        <div class="w-[80%] mx-auto mt-5">
                            {/* <div class="relative overflow-x-auto"></div>  */}
                            <div className="sm:hidden">
                                <label htmlFor="tabs" className="sr-only">
                                    Select your country
                                </label>
                                <select
                                    id="tabs"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option>Attachments</option>
                                    <option>Basic Details</option>
                                    <option>Tax Details</option>
                                    <option>Bank Details</option>
                                    <option>Bank Address</option>
                                    <option>Other Details</option>
                                </select>
                            </div>
                            <ul className="hidden text-sm font-medium text-center text-white divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 ">
                                <li className="w-full">
                                    <a
                                        href="/basicdetails"
                                        className="inline-block rounded-l-lg w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        <h6 className="">Basic Details</h6>
                                    </a>
                                </li>
                                <li className="w-full">
                                    <a
                                        href="/taxdetails"
                                        className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"


                                    >
                                        <h6>Tax Details</h6>
                                    </a>
                                </li>
                                <li className="w-full">
                                    <a
                                        href="/bankdetails"
                                        className="inline-block w-full p-4 bg-gray-300 text-black focus:ring-4 "
                                    >
                                        <h6>Bank Details</h6>
                                    </a>
                                </li>
                                <li className="w-full">
                                    <a
                                        href="/bankaddress"
                                        className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        <h6>Bank Address</h6>
                                    </a>
                                </li>
                                <li className="w-full">
                                    <a
                                        href="/attachments"
                                        className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        <h6>Attachments</h6>
                                    </a>
                                </li>
                                <li className="w-full">
                                    <a
                                        href="/otherdetails"
                                        className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        <h6>Other Details</h6>
                                    </a>
                                </li>
                            </ul>


                            {/* <ul className="hero-section">
                            <li><NavLink className="active" to="/basicdetails">Home</NavLink></li>
                            <li><NavLink className="active" to="/taxdetails">Tax Details</NavLink></li>
                            <li><NavLink className="active" to="/bankdetails">Bank Details</NavLink></li>
                            <li><NavLink className="active" to="#">Branch Address</NavLink></li>
                            <li><NavLink className="active" to="#">Attachments</NavLink></li>
                            <li><NavLink className="active" to="#">Other Details</NavLink></li>
                        </ul> */}
                            <div className='head-closed'>
                                <div className='closed-class'>
                                    <div class="form-container">
                                        <div className='hero-head'>
                                            <label for="BankName" class="form-label">Bank Name</label>
                                            <input type="text" id="BankName" name="BankName" className="form-control" required />
                                        </div>
                                        <div className='hero-head'>
                                            <label for="BankAddress" class="form-label">Bank Address</label>
                                            <input type="text" id="BankAddress" name="BankAddress" className="form-control" pattern="^[a-zA-Z0-9\s\.\-\,]+$" required />
                                        </div>
                                    </div>

                                    <div className="form-container">
                                        <div className='hero-head'>
                                            <label for="BankAccountNumber" class="form-label">Bank Account Number</label>
                                            <input type="number" id="BankAccountNumber" name="BankAccountNumber" className="form-control" required />
                                        </div>
                                        <div className='hero-head '>
                                            <label for="BankIFSCCode" class="form-label">Bank IFSC Code </label>
                                            <input type="text" id="BankIFSCCode" name="BankIFSCCode" className="form-control"  required />
                                        </div>
                                    </div>

                                    <div className="form-container" >
                                        <div className='hero-head' >
                                            <label htmlFor="SwiftCode" className="form-label">Swift Code</label>
                                            <input type="text" id="SwiftCode" name="SwiftCode" className="form-control" required />
                                        </div>
                                        <div className='hero-head' >
                                            <label htmlFor="WireCode" className="form-label">Wire Code</label>
                                            <input type="text" id="WireCode" name="WireCode" className="form-control" required />
                                        </div>
                                        {/* <div className='hero-head'>
                                        <label htmlFor="county" className="form-label">County:</label>
                                        <input type="text" id="county" name="county" className="form-control-multi" />
                                    </div>
                                    <div className='hero-head'>
                                        <label htmlFor="country3" className="form-label">Country:</label>
                                        <input type="text" id="country3" name="country3" className="form-control-multi" />
                                    </div> */}
                                    </div>

                                    <div className="form-container">
                                        <div className='hero-head'>
                                            <label for="BankCustomerSupportEmail" class="form-label">Bank Support Customer Email</label>
                                            <input type="email" id="BankCustomerSupportEmail" name="BankCustomerSupportEmail" className="form-control" required />
                                        </div>
                                        <div className='hero-head'>
                                            <label for="BankCustomerSupportMobile" class="form-label">Bank Customer Care Number</label>
                                            <input type="number" id="BankCustomerSupportMobile" name="BankCustomerSupportMobile " className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="form-container">
                                        <div className='hero-head'>
                                            <label for="OtherDetails1" class="form-label">Other 1</label>
                                            <input type="text" id="OtherDetails1" name="OtherDetails1" className="form-control" />
                                        </div>
                                        <div className='hero-head'>
                                            <label for="OtherDetails2" class="form-label">Other 2</label>
                                            <input type="text" id="OtherDetails2" name="OtherDetails2 " className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-container">
                                        <div className='hero-head'>
                                            <label for="OtherDetails3" class="form-label">Other 3</label>
                                            <input type="text" id="OtherDetails3" name="OtherDetails3" className="form-control" />
                                        </div>
                                        <div className='hero-head'>
                                            <label for="OtherDetails4" class="form-label">Other 4</label>
                                            <input type="text" id="OtherDetails4" name="OtherDetails4 " className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nextbutton">
                                <button type="submit" className="next-btn">
                                    Next
                                </button>
                            </div>
                        </div>
                    </form>
                </div >
            </div>

        </div>
    )
}

export default Bankdetails;