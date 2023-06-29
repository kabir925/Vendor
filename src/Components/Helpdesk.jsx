import { Help } from "@mui/icons-material";
import React from "react";
import './Helpdesk.css'
import Sidebar from "./Sidebar";
import FaceIcon from '@mui/icons-material/Face';

const Helpdesk = () => {
    const formsubmit=(e)=> {
        e.preventDefault();
        console.log("Function works!");
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

                    }}>
                        <div className="white-bar">
                            <span class="name">Ankush Thakur</span>
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
                                        className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
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

                            <div className='head-closed'>
                                <div className='closed-class'>
                                    <div class="form-container">
                                        <div className='hero-head'>
                                            <label for="subject" class="form-label">Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="form-container">
                                        <div className='hero-head'>
                                            <label for="Description" class="form-label">Description</label>
                                            <textarea type="textarea" rows="10" cols="60" id="Description" name="Description " className="form-control" required />
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

export default Helpdesk;