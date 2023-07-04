import React, { useEffect } from "react";
import TailwindSidebar from "./TailwindSidebar";
import { json, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";
import FaceIcon from "@mui/icons-material/Face";
const Helpdeskorg = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const token = localStorage.getItem("jwttoken");
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    data: {
      vendor: {
        PrimaryEmailID: "",
        _id: "",
        NameOfTheCompany: "",
      },
    },  
  });
  useEffect(() => {
   
    const userDetailsCookie = Cookies.get("signincookie");
    console.log(JSON.parse(userDetailsCookie));
    if (!userDetailsCookie) {
      navigate("/login");
    } else {
      setuserData(JSON.parse(userDetailsCookie));
    }
  }, [navigate]);

  const formsubmit = async (e) => {
    e.preventDefault();
    console.log("Data Entered!");
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log(formData);
    // const id = toast.loading("Please wait...");
    // await axios
    //   .post(
    //     "/vendors/addQuery",
    //     {
    //       data: formData,
    //     },
    //     {
    //       headers: {
    //         authorization: `${token}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     // const jwtToken = res.data.token;
    //     // axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    //     toast.update(id, {
    //       render: "Details Saved",
    //       type: "success",
    //       isLoading: false,
    //       closeOnClick: true,
    //       autoClose: 4000,
    //     });
    //   })
    //   .catch((res) => {
    //     console.log(res.message);
    //     toast.update(id, {
    //       render: "Incorrect Details",
    //       type: "error",
    //       isLoading: false,
    //       closeOnClick: true,
    //       autoClose: 5000,
    //     });
    //   });
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <TailwindSidebar />
      <div className="bg-gray-200 w-screen ">
        <div className="bg-white  lg:h-12">
          <div className="lg:float-right pt-2">
            <span className="name">{userData.data.vendor.PrimaryEmailID}</span>
            <div className="icon">
              <FaceIcon />
            </div>
          </div>
        </div>
        <div className="w-72 lg:w-[70rem]  mx-auto mt-5 bg-white">
          <div className="h-12 bg-gray-800 text-white text-lg p-2   pl-5 text-left">
            Help Desk
          </div>

          <form
            onSubmit={(event) => {
              formsubmit(event);
            }}
          >
            <div class="grid gap-6 mb-6 md:grid-cols-2 mt-3 ml-3 mr-3 ">
              <div>
                <label
                  for="date"
                  class="block mb-2 text-sm font-medium text-gray-900 lg:float-left"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  defaultValue={selectedDate} readOnly
                  value={selectedDate}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 lg:float-left "
                >
                  Vendor ID
                </label>
                <input
                  name="vendor"
                  value={userData.data.vendor._id}
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  //   placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 lg:float-left"
                >
                  Company Name
                </label>
                <input
                  value={userData.data.vendor.NameOfTheCompany}
                  id="company"
                  name="companyname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  //   placeholder="Flowbite"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 lg:float-left"
                >
                  Query Type
                </label>
                <select
                  name="querytype"
                  id="cars"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                >
                  <option value="Payment">Payment Not recieved</option>
                  <option value="Registration">Registration Not Done</option>
                  <option value="TDS">TDS Certificate not recieved</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-gray-900 lg:float-left"
                >
                  Issue Description
                </label>
                <textarea
                  type="text"
                  name="desc"
                  id="website"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  //   placeholder="flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="visitors"
                  class="block mb-2 text-sm font-medium text-gray-900 lg:float-left"
                >
                  Attachment 1
                </label>
                <input
                  type="file"
                  id="visitors"
                  name="attachone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder=""
                />
              </div>
              <div>
                <label
                  for="visitors"
                  class="block mb-2 text-sm font-medium text-gray-900 lg:float-left"
                >
                  Attachment 2
                </label>
                <input
                  type="file"
                  id="visitors"
                  name="attachtwo"
                  class="bg-gray-50 border mb-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder=""
                />
              </div>
            </div>
            <button
              type="submit"
              class="text-white lg:float-right   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Helpdeskorg;
