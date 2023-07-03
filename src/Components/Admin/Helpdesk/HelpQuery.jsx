import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FaceIcon from "@mui/icons-material/Face";
import axios from "axios";
import Cookies from "js-cookie";
import TailwindSidebar from "../../TailwindSidebar";
const HelpQuery = () => {
  const token = localStorage.getItem("jwttoken");
  console.log(token)
  const navigate = useNavigate();
  const [query, setquery] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const userDetailsCookie = Cookies.get("signincookie");
      if (!userDetailsCookie) {
        navigate("/login");
      }
      const data = await axios.get("vendors/getAllQueries", {
        headers: { authorization: `${token}` },
      });
      setquery(data.data.message);
    };
    getData();
  }, [navigate]);
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
              Vendor's Queries
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
                        Q No
                      </th>
                      <th scope="col" className="px-8 py-5">
                        Subject
                      </th>
                      <th scope="col" className="px-8 py-5">
                        status
                      </th>
                      <th scope="col" className="px-8 py-5">
                        Description
                      </th>
                      {/* <th scope="col" className="px-6 py-5">
                        Link
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {query.length === 0 ? (
                      <tr className="bg-white border-b ">
                        <th className="p-5 font-medium float-left text-gray-900 whitespace-nowrap ">
                          1
                        </th>
                        <td></td>
                        <td className="py-5">No Queries Found</td>
                        <td></td>
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
                            <td className="px-6 py-4">{query.subject}</td>
                            <td className="px-6 py-4">{query.status}</td>
                            <td className="px-6 py-4">{query.description}</td>
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

export default HelpQuery;
