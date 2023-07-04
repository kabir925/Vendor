import React, { useState } from "react";
import "./Taxdetails.css";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import FaceIcon from "@mui/icons-material/Face";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";

const Taxdetails = () => {
  const [userData, setuserData] = useState({
    data: {
      vendor: {
        PrimaryEmailID: "",
      },
    },
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("jwttoken");

  useEffect(() => {
    const userDetailsCookie = Cookies.get("signincookie");
    if (!userDetailsCookie) {
      navigate("/login");
    }
    setuserData(JSON.parse(userDetailsCookie));
  }, [navigate]);
  const formsubmit = (e) => {
    e.preventDefault();
    console.log("function is working");
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log(formData);

    const id = toast.loading("Please wait...");
    axios
      .patch(
        "/vendors/addUserInfo/",
        {
          data: formData,
        },
        {
          headers: {
            authorization: `${token}`,
          },
        }
      )
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
        navigate("/bankdetails");
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
    <div className="appone">
      <div className="Head-class">
        <Sidebar />
        <div className="container">
          <form
            onSubmit={(event) => {
              formsubmit(event);
              // navigate('/bankdetails')
            }}
          >
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
              <ul className="hidden text-sm font-medium text-center text-white divide-x divide-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 ">
                <li className="w-full">
                  <a
                    href="/basicdetails"
                    className="inline-block w-full p-4 rounded-l-lg bg-gray-800 hover:text-gray-100 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"

                  >
                    <h6 className="">Basic Details</h6>
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/taxdetails"
                    className="inline-block w-full p-4 bg-gray-300 text-black focus:ring-4 "
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
                <div closed-class>
                  <div class="form-container">
                    <div className="hero-head">
                      <label for="Pan" class="form-label">
                        PAN
                      </label>
                      <input
                        type="text"
                        id="Pan"
                        name="Pan"
                        className="form-control"
                        pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                        required
                      />
                    </div>
                    <div className="hero-head">
                      <label for="GST" class="form-label">
                        GST
                      </label>
                      <input
                        type="text"
                        id="GST"
                        name="GST"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-container">
                    <div className="hero-head">
                      <label for="VAT" class="form-label">
                        VAT
                      </label>
                      <input
                        type="text"
                        id="VAT"
                        name="VAT"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="hero-head ">
                      <label for="TINNumber" class="form-label">
                        TIN{" "}
                      </label>
                      <input
                        type="text"
                        id="TINNumber"
                        name="TINNumber"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-container-split">
                    <div className="hero-head">
                      <label htmlFor="SalesTax" className="form-label">
                        Sales Tax
                      </label>
                      <input
                        type="text"
                        id="SalesTax"
                        name="SalesTax"
                        className="form-control-multi"
                        required
                      />
                    </div>
                    <div className="hero-head">
                      <label htmlFor="GSTEligibility" className="form-label">
                        GST I/P CREDIT ELIGIBILITY
                      </label>
                      <input
                        type="text"
                        id="GSTEligibility"
                        name="GSTEligibility"
                        className="form-control-multi"
                        required
                      />
                    </div>
                    <div className="hero-head">
                      <label htmlFor="MSEDRegisteration" className="form-label">
                        MST Registration
                      </label>
                      <input
                        type="text"
                        id="MSEDRegisteration"
                        name="MSEDRegisteration"
                        className="form-control-multi"
                        required
                      />
                    </div>
                    <div className="hero-head">
                      <label
                        htmlFor="LowerTaxDeductionCertificate"
                        className="form-label"
                      >
                        Lower Tax Deduction Certificate
                      </label>
                      <input
                        type="text"
                        id="LowerTaxDeductionCertificate"
                        name="LowerTaxDeductionCertificate"
                        className="form-control-multi"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-container">
                    <div className="hero-head">
                      <label for="TDSApplicabilityOnVendor" class="form-label">
                        TDS Applicability on vendor
                      </label>
                      <input
                        type="text"
                        id="TDSApplicabilityOnVendor"
                        name="TDSApplicabilityOnVendor"
                        className="form-control"
                        required
                      />
                    </div>
                    {/* <div className='hero-head'>
                                        <label for="extraf" class="form-label">Extra Field</label>
                                        <input type="text" id="extraf" name="extraf " className="form-control" />
                                    </div> */}
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
        </div>
      </div>
    </div>
  );
};

export default Taxdetails;
