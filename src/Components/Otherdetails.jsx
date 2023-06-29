import React from "react";
import Sidebar from "./Sidebar";
import FaceIcon from '@mui/icons-material/Face';
import './Otherdetails.css'
const Otherdetails=()=> {
    const formsubmit=(e)=> {
        e.preventDefault();
        console.log("Function works!");
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData)
    };
    return(
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
                                        className="inline-block w-full p-4 bg-gray-300 text-black focus:ring-4 "
                                    >
                                        <h6>Other Details</h6>
                                    </a>
                                </li>
                            </ul>

                            <div className='head-closed'>
                                <div className='closed-class'>
                                    <div class="form-container">
                                        <div className='hero-head'>
                                            <label for="freq" class="form-label">Frequency of Bill Sub</label>
                                            <input type="text" id="freq" name="freq" className="form-control" required />
                                        </div>
                                        <div className='hero-head'>
                                            <label for="buyerdetails" class="form-label">Details of buyer</label>
                                            <input type="text" id="buyerdetails" name="buyerdetails " className="form-control" pattern="^[a-zA-Z0-9\s\.\-\,]+$" required />
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
                                    <div className="form-container">
                                        <div className='hero-head'>
                                            <label for="OtherDetails5" class="form-label">Other 5</label>
                                            <input type="text" id="OtherDetails5" name="OtherDetails5" className="form-control" />
                                        </div>
                                        <div className='hero-head'>
                                            <label for="OtherDetails6" class="form-label">Other 6</label>
                                            <input type="text" id="OtherDetails6" name="OtherDetails6 " className="form-control" />
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

export default Otherdetails;