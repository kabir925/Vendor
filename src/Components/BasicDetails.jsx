import React, { useState } from 'react'
import './BasicDetails.css'
import { useEffect } from 'react';
import Sidebar from './Sidebar';
import FaceIcon from '@mui/icons-material/Face';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';
// import { useSelector, useDispatch } from "react-redux";
// import { NavLink } from 'react-router-dom';
// import { addVendorBasicDetails } from "../Redux/vendorSlice";


const BasicDetails = () => {
  const [userData,setuserData]=useState({
    data: {
      vendor: {
        PrimaryEmailID:""
      }
    }
  })
  const token = localStorage.getItem("jwttoken");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const VendorBasic = useSelector(
  //   (state) => state.VendorInfo.VendorBasicDetails
  // );

  useEffect(() => {

    const userDetailsCookie = Cookies.get("signincookie");
    if (!userDetailsCookie) {
      navigate("/login");
    }
    // console.log(JSON.parse(userDetailsCookie));
    else{
      setuserData(JSON.parse(userDetailsCookie))
     }
  }, [navigate]);


  const formsubmit = async (e) => {

    e.preventDefault();
    console.log("function is working")
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log(formData)
    // dispatch(addVendorBasicDetails(formData));
    // console.log(VendorBasic);


    const id = toast.loading("Please wait...")
    await axios.patch("/vendors/addUserInfo/", {
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
          render: "Details Saved",
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 4000,
        });
        navigate('/taxdetails');

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
    <div className="Appone">
      <div className="Head-class">
        <Sidebar />

        <div className="container">
          <form
            onSubmit={(event) => {
              formsubmit(event);
              // navigate('/taxdetails');
            }}
          >
            <div className="white-bar">
              <span className="name"></span>
              <div className="icon">
                <FaceIcon />
              </div>
            </div>

            {/* {/ Navbar code /} */}
            
            <div class="w-[80%] mx-auto mt-5">
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
            <ul className="hidden text-sm font-medium text-center text-white divide-x divide-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 ">
                <li className="w-full">
                  <a
                    href="/basicdetails"
                    className="inline-block w-full p-4 bg-gray-300 text-black focus:ring-4 "
                  >
                    <h6 className="">Basic Details</h6>
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/taxdetails"
                    className="inline-block w-full p-4 bg-gray-800 hover:text-gray-100 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <h6>Tax Details</h6>
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/bankdetails"
                    className="inline-block w-full p-4 bg-gray-800 hover:text-gray-100 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <h6>Bank Details</h6>
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/bankaddress"
                    className="inline-block w-full p-4 bg-gray-800 hover:text-gray-100 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <h6>Bank Address</h6>
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/attachments"
                    className="inline-block w-full p-4 bg-gray-800 hover:text-gray-100 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"

                  >
                    <h6>Attachments</h6>
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/otherdetails"
                    className="inline-block w-full p-4 bg-gray-800 rounded-r-lg hover:text-gray-100 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
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

            <div className="head-closed ">
              <div className="closed-class">
                <div className="form-container">
                  {/* <div className="hero-head">
                    <label htmlFor="nameofthecompany" className="form-label">
                      Name of the company/Firm:
                    </label>
                    <input
                      type="text"
                      id="nameofthecompany"
                      name="nameofthecompany"
                      className="form-control"
                      required
                    />
                  </div> */}
                  <div className="hero-head">
                    <label htmlFor="SecondaryEmailID" className="form-label">
                      Secondary Email:
                    </label>
                    <input
                      type="email"
                      id="SecondaryEmailID"
                      name="SecondaryEmailID"
                      className="form-control"

                      required
                    />
                  </div>
                  <div className="hero-head">
                    <label htmlFor="Address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      id="Address"
                      name="Address"
                      className="form-control"
                      pattern="^[a-zA-Z0-9\s\.\-\,]+$"
                      required
                    />
                  </div>
                </div>

                <div className="form-container">
                  <div className="hero-head">
                    <label htmlFor="Floor" className="form-label">
                      Floor:
                    </label>
                    <input
                      type="text"
                      id="Floor"
                      name="Floor"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="hero-head">
                    <label htmlFor="Street" className="form-label">
                      Street:
                    </label>
                    <input
                      type="text"
                      id="Street"
                      name="Street"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-container-split">
                  <div className="hero-head">
                    <label htmlFor="City" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      id="City"
                      name="City"
                      className="form-control-multi"

                      required
                    />
                  </div>
                  <div className="hero-head">
                    <label htmlFor="NearestTrainStation" className="form-label">
                      Nearest Train Station
                    </label>
                    <input
                      type="text"
                      id="NearestTrainStation"
                      name="NearestTrainStation"
                      className="form-control-multi"
                      required
                    />
                  </div>
                  <div className="hero-head">
                    <label htmlFor="County" className="form-label">
                      County:
                    </label>
                    <input
                      type="number"
                      id="County"
                      name="County"
                      className="form-control-multi"
                      required
                    />
                  </div>
                  <div className="hero-head">
                    <label htmlFor="Country" className="form-label">
                      Country:
                    </label>
                    <input
                      type="text"
                      id="Country"
                      name="Country"
                      className="form-control-multi"
                      pattern="^[a-zA-Z\s]+$"
                      required

                    />
                  </div>
                </div>

                <div className="form-container">
                  <div className="hero-head">
                    <label htmlFor="PinCode" className="form-label">
                      Postal Code:
                    </label>
                    <input
                      type="text"
                      id="PinCode"
                      name="PinCode"
                      className="form-control"
                      pattern="^\d{6}$"
                      required
                    />
                  </div>
                  <div className="hero-head">
                    <label htmlFor="CompanyEmail" className="form-label">
                      Company Email ID:
                    </label>
                    <input
                      type="email"
                      id="CompanyEmail"
                      name="CompanyEmail "
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-container">
                  <div className="hero-head">
                    <label htmlFor="SecondaryMobileNumber" className="form-label">
                      Secondary Contact:
                    </label>
                    <input
                      type="tel"
                      id="SecondaryMobileNumber"
                      name="SecondaryMobileNumber"
                      className="form-control"
                      pattern="[0-9]{10}"
                      title="Enter a 10-digit phone number"
                      required
                    />
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
        </div>
      </div>
    </div>
  );
}

export default BasicDetails