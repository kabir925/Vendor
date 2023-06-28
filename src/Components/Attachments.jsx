import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/Logo.svg'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io'
import { GiMoneyStack } from 'react-icons/gi'
import { MdTrackChanges } from 'react-icons/md'
import { BsNewspaper, BsListNested } from "react-icons/bs";
import { FaMailBulk } from 'react-icons/fa'
import { RiAdminFill } from 'react-icons/ri'
import FaceIcon from "@mui/icons-material/Face";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";


const Attachments = () => {
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
    const [PAN, setPAN] = useState();
    const [GST, setGST] = useState();
    const [VAT, setVAT] = useState();
    const [TIN, setTIN] = useState();
    const [SalesTax, setSalesTax] = useState();
    const [MSED, setMSED] = useState();
    const [CertificationOfIncorporation, setCertificationOfIncorporation] =
      useState();
    const [Memorandum, setMemorandum] = useState();
    const [ArticleOfAssociation, setArticleOfAssociation] = useState();
    const [CancelledCheque, setCancelledCheque] = useState();
    const [BankDetails, setBankDetails] = useState();
    


    async function handleSubmit(e) {
        console.log(PAN);
        let formData = new FormData();
        formData.append("img", PAN, "PAN_Attach");
        formData.append("img", GST, "GST_Attach");
        formData.append("img", VAT, "VAT_Attach");
        formData.append("img", TIN, "TIN_Attach");
        formData.append("img", SalesTax, "SalesTax_Attach");
        formData.append("img", MSED, "MSED_Attach");
        formData.append(
          "img",
          CertificationOfIncorporation,
          "CertificationOfIncorporation_Attach"
        );
        formData.append("img", Memorandum, "Memorandum_Attach");
        formData.append(
          "img",
          ArticleOfAssociation,
          "ArticleOfAssociation_Attach"
        );
        formData.append("img", CancelledCheque, "CancelledCheque_Attach");
        formData.append("img", BankDetails, "BankDetails_Attach");
        console.log(formData);

        const id = toast.loading("This may take some time so take a break.....");
        await axios
          .patch(
            "http://192.168.1.39:4000/api/v1/vendors/testingImg",
            formData,
            {
              headers: {
                authorization: `${token}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            toast.update(id, {
              render: "attachments added",
              type: "success",
              isLoading: false,
              closeOnClick: true,
              autoClose: 4000,
            });
          })
          .catch((res) => {
            console.log(res.message);
            toast.update(id, {
              render: res.message,
              type: "error",
              isLoading: false,
              closeOnClick: true,
              autoClose: 5000,
            });
          });;
    }

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

          <div className="w-[85%] mx-auto mt-5">
            <div className="relative overflow-x-auto">
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
              </ul>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                <table className="w-full text-sm text-left">
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
                </table>
                <button
                  type="submit"
                  className="inline-block my-5 float-right  bg-blue-500 rounded bg-primary px-8    pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attachments