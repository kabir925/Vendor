import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/Logo.svg'
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
import TailwindSidebar from "./TailwindSidebar";

const AddInvoices = () => {
  const token = localStorage.getItem("jwttoken");
  const navigate = useNavigate();
  useEffect(() => {
    const userDetailsCookie = Cookies.get("signincookie");
    if (!userDetailsCookie) {
      navigate("/login");
    }
  }, [navigate]);

  const [RFQ, setRFQ] = useState(false);
  const [Vendor, setVendor] = useState(false);
  const [side, setSide] = useState(true);
  

  // formData
  const [invoiceData, setInvoiceData] = useState({
    description: "",
    date: "",
    currency: "",
    quantity: 0,
    attachment: "", 
    netAmount: 0,
  });

  const invoiceChangeHandler = (e) => {
    const { name, value } = e.target;
    setInvoiceData({
      ...invoiceData,
      [name]: value,
    });
  };

  const submitInvoice = (event) => {
    event.preventDefault();
    console.log(invoiceData);
  };

   return (
     <>
       <div className="flex flex-col lg:flex-row">
         <TailwindSidebar />
         <div className="bg-gray-200 w-full h-screen">
           <div className="bg-white w-full lg:h-12">
             <div className="lg:float-right pt-2">
               <span className="name">Ankush Thakur</span>
               <div className="icon">
                 <FaceIcon />
               </div>
             </div>
           </div>

           <div className="w-[85%] mx-auto mt-5">
             <div className="relative overflow-x-auto">
               {/* <div className="sm:hidden">
                 <label htmlFor="tabs" className="sr-only">
                   Select your country
                 </label>
                 
               </div> */}
               {/* <ul className="hidden text-sm font-medium text-center text-white divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 ">
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
                    className="inline-block w-full p-4 bg-gray-300 text-black focus:ring-4 "
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
              </ul> */}
               {/* <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              > */}
               {/* <table className="w-full text-sm text-left">
                  <tbody>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-xl whitespace-nowrap "
                      >
                        Attachments List
                      </th>
                      <td className="px-6 py-4  text-right"></td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        PAN Number<span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3 "
                          id="file_input"
                          required
                          name="img"
                          type="file"
                          onChange={(e) => {
                            setPAN(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        GST Number<span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3"
                          id="file_input"
                          required
                          type="file"
                          name="img"
                          onChange={(e) => {
                            setGST(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        VAT Registration Number
                        <span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3"
                          id="file_input"
                          required
                          type="file"
                          name="img"
                          onChange={(e) => {
                            setVAT(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        TIN NO.<span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3"
                          id="file_input"
                          required
                          type="file"
                          name="img"
                          onChange={(e) => {
                            setTIN(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        Sale Tax<span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3"
                          id="file_input"
                          required
                          type="file"
                          name="img"
                          onChange={(e) => {
                            setSalesTax(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        MSED Registration<span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3"
                          id="file_input"
                          required
                          type="file"
                          name="img"
                          onChange={(e) => {
                            setMSED(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        Certificate of Incorporation
                        <span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3"
                          id="file_input"
                          required
                          type="file"
                          name="img"
                          onChange={(e) => {
                            setCertificationOfIncorporation(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        Memorandum of Association
                        <span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3"
                          id="file_input"
                          required
                          type="file"
                          name="img"
                          onChange={(e) => {
                            setMemorandum(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        Article Of Association
                        <span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3"
                          id="file_input"
                          required
                          type="file"
                          name="img"
                          onChange={(e) => {
                            setArticleOfAssociation(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        CancelledCheque<span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3"
                          id="file_input"
                          required
                          type="file"
                          name="img"
                          onChange={(e) => {
                            setCancelledCheque(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        Bank Details(Bank Name, Bank Address,Bank Account No.
                        and Bank IFSC No.)
                        <span className="text-red-500">*</span>
                      </th>
                      <td className="px-6 py-4  text-right">
                        <input
                          className="block  text-sm float-right p-1 rounded-lg border  cursor-pointer w-1/3"
                          id="file_input"
                          required
                          type="file"
                          name="img"
                          onChange={(e) => {
                            setBankDetails(e.target.files[0]);
                          }}
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table> */}

               {/* form added  */}
               <div className="w-full h-[57px] flex items-center bg-[#1C2434] text-white px-5 py-2">
                 <h2 className="font-[500] text-lg">Add Invoice</h2>
               </div>
               <div className="bg-white px-12 py-8 border text-[#1C2434]">
                 <h2 className="font-bold text-lg">Vender Registration</h2>
                 <form
                   action=""
                   className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
                   onSubmit={submitInvoice}
                   id="invoiceForm"
                 >
                   <div className="my-2">
                     <label htmlFor="description" className="font-[500] block">
                       Description
                     </label>
                     <input
                       type="text"
                       name="description"
                       id="description"
                       className="border-2 border-[#E2E8F0] w-full p-1 rounded-[4px] mt-2 px-4 py-2"
                       value={invoiceData.description}
                       onChange={invoiceChangeHandler}
                     />
                   </div>

                   <div className="my-2">
                     <label htmlFor="date" className="font-[500] block">
                       Date
                     </label>
                     <input
                       type="date"
                       name="date"
                       id="date"
                       className="border-2 border-[#E2E8F0] w-full h-11 p-1 rounded-[4px] mt-2 px-4 py-2"
                       value={invoiceData.date}
                       onChange={invoiceChangeHandler}
                     />
                   </div>

                   <div className="my-2">
                     <label htmlFor="currency" className="font-[500] block">
                       Currency
                     </label>
                     <input
                       type="string"
                       name="currency"
                       id="currency"
                       className="border-2 border-[#E2E8F0] w-full p-1 rounded-[4px] mt-2 px-4 py-2"
                       value={invoiceData.currency}
                       onChange={invoiceChangeHandler}
                     />
                   </div>

                   <div className="my-2">
                     <label htmlFor="quantity" className="font-[500] block">
                       Quantity
                     </label>
                     <input
                       type="number"
                       name="quantity"
                       id="quantity"
                       className="border-2 border-[#E2E8F0] w-full p-1 rounded-[4px] mt-2 px-4 py-2"
                       value={invoiceData.quantity}
                       onChange={invoiceChangeHandler}
                     />
                   </div>

                   <div className="my-2">
                     <label htmlFor="attachment" className="font-[500] block">
                       Attachment
                     </label>
                     <input
                       type="file"
                       name="attachment"
                       id="attachment"
                       className="border-2 border-[#E2E8F0] w-full p-1 rounded-[4px] mt-2 px-4 py-2"
                       value={invoiceData.attachment}
                       onChange={invoiceChangeHandler}
                     />
                   </div>

                   <div className="my-2">
                     <label htmlFor="netAmount" className="font-[500] block">
                       Net Amount
                     </label>
                     <input
                       type="number"
                       name="netAmount"
                       id="netAmount"
                       className="border-2 border-[#E2E8F0] w-full p-1 rounded-[4px] mt-2 px-4 py-2"
                       value={invoiceData.netAmount}
                       onChange={invoiceChangeHandler}
                     />
                   </div>
                 </form>
               </div>

               <button
                 type="button"
                 className="inline-block my-5 float-left bg-blue-500 rounded bg-primary px-8 pb-2 pt-2.5 text-xs 
                  font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition 
                  duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                  dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                  dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                 form="invoiceForm"
               >
                 View Invoice
               </button>

               <button
                 type="submit"
                 className="inline-block my-5 float-right  bg-blue-500 rounded bg-primary px-8 pb-2 pt-2.5 text-xs 
                  font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition 
                  duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                  dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                  dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                 form="invoiceForm"
               >
                 Submit
               </button>
               {/* </form> */}
             </div>
           </div>
         </div>
       </div>
     </>
   );
};

export default AddInvoices;
