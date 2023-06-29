import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { MdTrackChanges } from "react-icons/md";
import { BsNewspaper, BsListNested } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import FaceIcon from "@mui/icons-material/Face";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
// import Attachment from './Attachment';

const Invoices = () => {
    const token = localStorage.getItem("jwttoken");
    const navigate = useNavigate();
    const [invoices, setinvoices] = useState("")


    useEffect(() => {
        const userDetailsCookie = Cookies.get("signincookie");
        if (!userDetailsCookie) {
            navigate("/login");
        }
         axios
           .get("http://192.168.1.39:4000/api/v1/vendors/getInfo", {
             headers: {
               authorization: `${token}`,
             },
           })
           .then((res) => {
             console.log(res);
             setinvoices(res.data.data.PrimaryEmailID);
           })
           .catch((err) => {
             console.log(err);
           });
       
    }, [navigate, token]);


    
        const [RFQ, setRFQ] = useState(false);
        const [Vendor, setVendor] = useState(false);
        const [side, setSide] = useState(true);



    return (
      <>
        <div className="flex flex-col lg:flex-row">
          <button
            className={`lg:hidden w-12 text-right p-4 ${
              !side ? "hidden lg:block" : ""
            }`}
            onClick={() => {
              setSide((e) => !e);
            }}
          >
            <BsListNested className="w-full h-full" />
          </button>
          <div
            className={`w-full lg:w-[19.4%] bg-[#1C2434] text-[#DEE4EE] min-h-[100vh] ${
              side ? "hidden lg:block" : ""
            }`}
          >
            <div>
              <button
                className="lg:hidden absolute right-8 top-7 w-8"
                onClick={() => {
                  setSide((e) => !e);
                }}
              >
                <IoMdClose className="w-full h-full" />
              </button>
            </div>
            <div className="mx-auto  ">
              <div className="flex flex-col gap-10 ">
                {/* {/ logo /} */}
                <div className="flex flex-row  text-white gap-2 mx-auto mt-16">
                  <div className="">
                    <img src={logo} alt="" className="h-[32px]" />
                  </div>
                  <div className="font-weight-500 text-3xl/[20px] pt-1">
                    SA ADMIN
                  </div>
                </div>
                <div className="flex flex-col gap-8 mx-auto mt-4">
                  {/* {/ Dasboard /} */}
                  <div className="flex flex-row  text-white gap-2   ">
                    <HiOutlineDesktopComputer className="mt-1" />
                    <h6>Dashboard</h6>
                  </div>
                  {/* {/ RFQ Master /} */}
                  <div className="">
                    <div
                      className="flex flex-row text-white "
                      onClick={() => {
                        setRFQ((e) => !e);
                      }}
                    >
                      <div className="flex flex-row justify-between w-48">
                        <div className="flex flex-row gap-2">
                          <BsNewspaper className="mt-1" />
                          <h6>RFQ Master</h6>
                        </div>
                        {RFQ ? (
                          <IoIosArrowUp className="mt-1 ml-8" />
                        ) : (
                          <IoIosArrowDown className="mt-1 ml-8" />
                        )}
                      </div>
                    </div>
                    <div
                      className={`ml-6 flex flex-col gap-2 mt-4 ${
                        RFQ ? "" : "hidden"
                      }`}
                    >
                      <h6>Create RFQ</h6>
                      <h6>Search RFQ</h6>
                    </div>
                  </div>
                  {/* {/ Vendor Master /} */}
                  <div className="">
                    <div
                      className="flex flex-row text-white "
                      onClick={() => {
                        setVendor((e) => !e);
                      }}
                    >
                      <div className="flex flex-row justify-between w-48">
                        <div className="flex flex-row gap-2">
                          <BsNewspaper className="mt-1" />
                          <h6>Vendor Master</h6>
                        </div>
                        {Vendor ? (
                          <IoIosArrowUp className="mt-1 ml-8" />
                        ) : (
                          <IoIosArrowDown className="mt-1 ml-8" />
                        )}
                      </div>
                    </div>
                    <div
                      className={`ml-6 flex flex-col gap-2 mt-4 ${
                        Vendor ? "" : "hidden"
                      }`}
                    >
                      <h6>Create Vendor</h6>
                      <h6>Search Vendor</h6>
                    </div>
                  </div>
                  {/* {/ Tracking /} */}
                  <div className="flex flex-row  text-white gap-2   ">
                    <MdTrackChanges className="mt-1" />
                    <h6>Tracking</h6>
                  </div>
                  {/* {/ Bids /} */}
                  <div className="flex flex-row  text-white gap-2   ">
                    <GiMoneyStack className="mt-1" />
                    <h6>Bids</h6>
                  </div>
                  {/* {/ Communication /} */}
                  <div className="flex flex-row  text-white gap-2   ">
                    <FaMailBulk className="mt-1" />
                    <h6>Communication</h6>
                  </div>
                  {/* {/ Attachment /} */}
                  <div className="flex flex-row  text-white gap-2   ">
                    <HiOutlineDesktopComputer className="mt-1" />
                    <h6>Attachment</h6>
                  </div>
                  {/* {/ Admin /} */}
                  <div className="flex flex-row  text-white gap-2   ">
                    <RiAdminFill className="mt-1" />
                    <h6>Admin</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-full ">
            <div className="bg-white w-full lg:h-12">
              <div className="lg:float-right pt-2">
                <span className="name">Ankush Thakur</span>
                <div className="icon">
                  <FaceIcon />
                </div>
              </div>
            </div>

            <div className="w-[85%] mx-auto mt-5 bg-white">
              <div className="h-12 bg-gray-800 text-white text-lg p-2   pl-5 text-left">
                Invoice Submissions
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // handleSubmit(e);
                }}
              >
                <div className="relative overflow-x-auto p-5">
                  <table className="w-full text-sm text-center ">
                    <thead className="text-xs uppercase dark:bg-gray-200 text-gray-600 ">
                      <tr>
                        <th scope="col" className="px-6 py-5 ">
                          Item
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Description
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Invoice No.
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Currency
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Attachment
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Net Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices !== "gautam@gmail.com" ? (
                        <tr className="bg-white border-b ">
                          <th className="p-5 font-medium float-center text-gray-900 whitespace-nowrap ">
                            1
                          </th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="py-5">No Invoices Found</td>
                        </tr>
                      ) : (
                        // invoices.map((invoice) => {
                        //   return (
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            1
                          </th>
                          <td className="px-6 py-4">yoyo</td>
                          <td className="px-6 py-4">yoyo</td>
                          <td className="px-6 py-4">$yoyo</td>
                          <td className="px-6 py-4">$yoyo</td>
                          <td className="px-6 py-4">$yoyo</td>
                        </tr>
                        //   );
                        // })
                      )}
                    </tbody>
                  </table>
                </div>

                <button
                  type="submit"
                  className="inline-block my-5 float-right  bg-blue-500 rounded bg-primary px-8    pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Add Invoice
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Invoices;
