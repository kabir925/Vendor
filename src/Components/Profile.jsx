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
         .get("http://192.168.1.40:4000/api/v1/vendors/getInfo", {
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
        <div className="bg-gray-200 w-full h-screen">
          <div className="bg-white w-full lg:h-12">
            <div className="lg:float-right pt-2">
              <span className="name">{Data.PrimaryEmailID}</span>
              <div className="icon">
                <FaceIcon />
              </div>
            </div>
          </div>

          <div className=" bg-white p-5 shadow mt-20 mx-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div>
                  <p className="font-bold text-gray-700 text-xl">
                    {Data.Invoices.length}
                  </p>
                  <p className="text-gray-400">Invoices</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
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

              {/* <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Connect
                </button>
                <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Message
                </button>
              </div> */}
            </div>
            <div className="mt-20 text-center border-b pb-9">
              <h1 className="lg:text-4xl text-lg font-medium text-gray-700">
                {Data.PrimaryEmailID}
              </h1>
              <p className="font-light text-gray-600 mt-3">
                {Data.NameOfTheCompany}
              </p>
            </div>
            <p className="mt-8 text-gray-500">Address - {Data.Address}</p>
            <p className=" text-gray-500">PinCode - {Data.PinCode}</p>
            <p className=" text-gray-500">Country - {Data.Country}</p>
            <p className=" text-gray-500">
              Article Of Association -{" "}
              <button>
                <a href={Data.ArticleOfAssociation_Attach} target="_blank" rel="noreferrer">
                  download
                </a>
              </button>{" "}
            </p>
            <p className="mt-2 text-gray-500">University of Computer Science</p>
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