import React, { useState } from "react";
import TailwindSidebar from "../../TailwindSidebar";
import FaceIcon from "@mui/icons-material/Face";
const Invoiceapprove = () => {
  const [query, setquery] = useState([]);
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <TailwindSidebar />
        <div className="bg-gray-200 w-screen ">
          <div className="bg-white  lg:h-12">
            <div className="lg:float-right pt-2">
              <span className="name">
                Admin
                {/* {userData.data.vendor.PrimaryEmailID} */}
              </span>
              <div className="icon">
                <FaceIcon />
              </div>
            </div>
          </div>
          <div className="w-72 lg:w-[70rem]  mx-auto mt-5 bg-white">
            <div className="h-12 bg-gray-800 text-white text-lg p-2   pl-5 text-left">
              Invoices Pending for Verification
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // handleSubmit(e);
              }}
            >
              <div className=" overflow-x-auto p-5">
                <table className=" w-full text-sm text-left ">
                  <thead className="text-xs uppercase dark:bg-gray-200 text-gray-600 ">
                    <tr>
                      <th scope="col" className="px-6  py-5 ">
                        Sr No
                      </th>
                      <th scope="col" className="px-8 py-5">
                        Vendor Name
                      </th>
                      <th scope="col" className="px-8 py-5">
                        Invoice number
                      </th>
                      <th scope="col" className="px-8 py-5">
                        Date
                      </th>
                      <th scope="col" className="px-8 py-5">
                        Currency
                      </th>
                      <th scope="col" className="px-8 py-5">
                        Net Amount
                      </th>
                      <th scope="col" className="px-8 py-5">
                        Attachment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {query.length === 0 ? (
                      <tr className="bg-white border-b ">
                        <th className="p-5 font-medium float-left text-gray-900 whitespace-nowrap ">
                          1
                        </th>
                        <td></td>
                        <td></td>
                        <td className="py-5">No Invoices Found</td>
                        <td></td>
                      </tr>
                    ) : (
                      query.map((query, index) => {
                        return (
                          <tr className="bg-white border-b " key={index}>
                            <th
                              scope="row"
                              className="px-6 py-7 font-medium text-gray-900 whitespace-nowrap "
                            >
                              {index + 1}
                            </th>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Invoiceapprove;
