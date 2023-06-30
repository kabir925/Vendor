import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FaceIcon from "@mui/icons-material/Face";
import axios from "axios";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import TailwindSidebar from "./TailwindSidebar";

const Invoices = () => {
  const token = localStorage.getItem("jwttoken");
  const navigate = useNavigate();
  const [invoices, setinvoices] = useState([]);
  const [userData, setuserData] = useState({
    data: {
      vendor: {
        PrimaryEmailID:""
      },
    },
  });
  

  useEffect(() => {
    const userDetailsCookie = Cookies.get("signincookie");
    if (!userDetailsCookie) {
      navigate("/login");
    }
    setuserData(JSON.parse(userDetailsCookie));
    axios
      .get("http://192.168.1.40:4000/api/v1/vendors/getAllInvoices", {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setinvoices(res.data.data.Invoices);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate, token]);

  // useEffect(() => {

  //   console.log(invoices);

  // }, [invoices])

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <TailwindSidebar />

        <div className="bg-gray-200 w-screen ">
          <div className="bg-white  lg:h-12">
            <div className="lg:float-right pt-2">
              <span className="name">
                {userData.data.vendor.PrimaryEmailID}
              </span>
              <div className="icon">
                <FaceIcon />
              </div>
            </div>
          </div>

          <div className="w-72 lg:w-[70rem]  mx-auto mt-5 bg-white">
            <div className="h-12 bg-gray-800 text-white text-lg p-2   pl-5 text-left">
              Invoice Submissions
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // handleSubmit(e);
              }}
            >
              <div className=" overflow-x-auto p-5">
                <table className=" text-sm text-center ">
                  <thead className="text-xs uppercase dark:bg-gray-200 text-gray-600 ">
                    <tr>
                      <th scope="col" className="px-6 py-5 ">
                        Item
                      </th>
                      <th scope="col" className="px-6 py-5">
                        Net Amount
                      </th>
                      <th scope="col" className="px-6 py-5">
                        status
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
                        Company Code
                      </th>
                      <th scope="col" className="px-6 py-5">
                        Company Name
                      </th>
                      <th scope="col" className="px-6 py-5">
                        Gross Amount
                      </th>
                      <th scope="col" className="px-6 py-5">
                        Tax 1
                      </th>
                      <th scope="col" className="px-6 py-5">
                        Tax 2
                      </th>
                      <th scope="col" className="px-6 py-5">
                        Tax 3
                      </th>
                      <th scope="col" className="px-6 py-5">
                        discount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.length === 0 ? (
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
                      invoices.map((invoice, index) => {
                        return (
                          <tr className="bg-white border-b " key={index}>
                            <th
                              scope="row"
                              className="px-6 py-7 font-medium text-gray-900 whitespace-nowrap "
                            >
                              {index + 1}
                            </th>
                            <td className="px-6 py-4">{invoice.netAmount}</td>
                            <td className="px-6 py-4">
                              {invoice.invoicestatus}
                            </td>
                            <td className="px-6 py-4">{invoice.description}</td>
                            <td className="px-6 py-4">
                              {invoice.invoicenumber}
                            </td>
                            <td className="px-6 py-4">{invoice.date}</td>
                            <td className="px-6 py-4">{invoice.currency}</td>
                            <td className="px-6 py-4">{invoice.quantity}</td>
                            <td className="px-6 py-4">
                              {invoice.attachment.length}
                            </td>
                            <td className="px-6 py-4">{invoice.CompanyCode}</td>
                            <td className="px-6 py-4">{invoice.CompanyName}</td>
                            <td className="px-6 py-4">{invoice.Gross}</td>
                            <td className="px-6 py-4">{invoice.Tax1}</td>
                            <td className="px-6 py-4">{invoice.Tax2}</td>
                            <td className="px-6 py-4">{invoice.Tax3}</td>
                            <td className="px-6 py-4">{invoice.discount}</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              <button
                type="submit"
                className="inline-block my-5 float-right  bg-blue-500 rounded bg-primary px-8    pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                onClick={() => {
                  navigate("/addinvoices");
                }}
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
