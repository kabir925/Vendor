import React from 'react'
import './BasicDetails.css'
import { useEffect } from 'react';
import Sidebar from './Sidebar';
import FaceIcon from '@mui/icons-material/Face';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addVendorBasicDetails } from "../Redux/vendorSlice";


const BasicDetails = () => {
  const token = localStorage.getItem("jwttoken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const VendorBasic = useSelector(
    (state) => state.VendorInfo.VendorBasicDetails
  );

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
    // console.log(formData)
    dispatch(addVendorBasicDetails(formData));
    console.log(VendorBasic);
   

    const id = toast.loading("Please wait...")
    axios.patch("https://new-vendor-backend.vercel.app/api/v1/vendors/addUserInfo/", {
      data: formData,
    },{
      headers: {
        authorization :`${token}`
      }
    })
      .then((res) => {
        console.log(res);
        // const jwtToken = res.data.token;
        // axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
        toast.update(id, {
          render: "Logged in..",
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 4000,
        });

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
              navigate('/Taxdetails');
            }}
          >
            <div className="white-bar">
              <span className="name">Ankush Thakur</span>
              <div className="icon">
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
                      name="SecondaryEmailID "
                      className="form-control"
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
                      type="text"
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
                    />
                  </div>
                </div>

                <div className="form-container">
                  <div className="hero-head">
                    <label htmlFor="SecondaryMobileNumber" className="form-label">
                      Secondary Contact:
                    </label>
                    <input
                      type="text"
                      id="SecondaryMobileNumber"
                      name="SecondaryMobileNumber"
                      className="form-control"
                    />
                  </div>
                  {/* <div className="hero-head">
                    <label htmlFor="primarynumber2" className="form-label">
                      Primary Contact 2 (Phone):
                    </label>
                    <input
                      type="text"
                      id="primarynumber2"
                      name="primarynumber2"
                      className="form-control"
                    />
                  </div> */}
                  {/* <div className="hero-head">
                    <label htmlFor="primaryemail" className="form-label">
                      Primary Email 1:
                    </label>
                    <input
                      type="email"
                      id="primaryemail"
                      name="primaryemail "
                      className="form-control"
                    />
                  </div> */}
                </div>

                {/* <div className="form-container"> */}
                  {/* <div className="hero-head">
                    <label htmlFor="primarynumber2" className="form-label">
                      Primary Contact 2 (Phone):
                    </label>
                    <input
                      type="text"
                      id="primarynumber2"
                      name="primarynumber2"
                      className="form-control"
                    />
                  </div> */}
                  {/* <div className="hero-head">
                    <label htmlFor="primaryemail2" className="form-label">
                      Primary Email 2:
                    </label>
                    <input
                      type="email"
                      id="primaryemail2"
                      name="primaryemail2 "
                      className="form-control"
                    />
                  </div> */}
                {/* </div> */}
              </div>
            </div>
            <div className="nextbutton">
              <button type="submit" className="next-btn">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;