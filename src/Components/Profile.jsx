import React from 'react'
import TailwindSidebar from './TailwindSidebar';
import FaceIcon from "@mui/icons-material/Face";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";



const Profile = () => {
    const token = localStorage.getItem("jwttoken");
    const [Data, setData] = useState({
        Invoices: []
    })
    const navigate = useNavigate();
     useEffect(() => {
       const userDetailsCookie = Cookies.get("signincookie");
       if (!userDetailsCookie) {
         navigate("/login");
       }
       axios
         .get("/vendors/getInfo", {
           headers: {
             authorization: `${token}`,
           },
         })
         .then((res) => {
             console.log(res);
             setData(res.data.data);
         })
         .catch((err) => {
           console.log(err);
         });
     }, [navigate, token]);
    
    useEffect(() => {
      
    console.log(Data)
      
    }, [Data])
    
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <TailwindSidebar />
        <div className="bg-gray-200 w-full">
          <div className="bg-white w-full lg:h-12">
            <div className="lg:float-right pt-2">
              <span className="name">{Data.PrimaryEmailID}</span>
              <div className="icon">
                <FaceIcon />
              </div>
            </div>
          </div>

          <div className=" bg-white p-5 shadow my-20 mx-10 ">
            <div className="grid grid-cols-1 md:grid-cols-3 ">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div>
                  <p className="font-bold text-gray-700 text-xl">
                    {Data.Invoices.length}
                  </p>
                  <p className="text-gray-400">Invoices</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-40 h-40 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                {/* <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Help
                </button> */}
                <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" onClick={ () =>{
                  navigate('/helpdesk')
                }}>
                  Help Desk
                </button>
              </div>
            </div>
            <div className="mt-10 text-center  pb-9">
              <h1 className="lg:text-3xl text-lg font-medium text-gray-700">
                {Data.PrimaryEmailID}
              </h1>
              <p className="font-light text-gray-600 mt-3">
                Company - {Data.NameOfTheCompany}
              </p>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[60%] mx-auto">
              <table class="w-full text-sm text-left text-gray-500 mx-auto">
                <thead class="text-xs text-gray-700 uppercase ">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-gray-50 bg-gray-800 text-white"
                    >
                      Feilds
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-gray-700 text-white text-right  border-slate-100"
                    >
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-200 ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      Secondary Email
                    </th>
                    <td class="px-6 py-4 text-right">
                      {Data.SecondaryEmailID}
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      Address
                    </th>
                    <td class="px-6 py-4 text-right">{Data.Address}</td>
                  </tr>
                  <tr class="border-b border-gray-200 ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      Floor
                    </th>
                    <td class="px-6 py-4 text-right">{Data.Floor}</td>
                  </tr>
                  <tr class="border-b border-gray-200 ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      Street
                    </th>
                    <td class="px-6 py-4 text-right">{Data.Street}</td>
                  </tr>
                  <tr class="border-b border-gray-200 ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      City
                    </th>
                    <td class="px-6 py-4 text-right">{Data.City}</td>
                  </tr>
                  <tr class="border-b border-gray-200 ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      Nearest Train Station
                    </th>
                    <td class="px-6 py-4 text-right">
                      {Data.NearestTrainStation}
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      County
                    </th>
                    <td class="px-6 py-4 text-right">{Data.County}</td>
                  </tr>
                  <tr class="border-b border-gray-200 ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      Postal Code
                    </th>
                    <td class="px-6 py-4 text-right">{Data.PinCode}</td>
                  </tr>
                  <tr class="border-b border-gray-200 ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      Secondary Contact
                    </th>
                    <td class="px-6 py-4 text-right">
                      {Data.SecondaryMobileNumber}
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      Country
                    </th>
                    <td class="px-6 py-4 text-right">{Data.Country}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <div className="mt-12 flex flex-col justify-center">
              <p className="text-gray-600 text-center font-light lg:px-16">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                Show more
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile