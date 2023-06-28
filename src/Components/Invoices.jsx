import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FaceIcon from "@mui/icons-material/Face";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import TailwindSidebar from "./TailwindSidebar";

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


    return (
      <>
        <div className="flex flex-col lg:flex-row">
          <TailwindSidebar /> 
         
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
