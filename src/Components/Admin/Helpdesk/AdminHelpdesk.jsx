import React from "react";
import { Help } from "@mui/icons-material";
import TailwindSidebar from "../../TailwindSidebar";
import FaceIcon from "@mui/icons-material/Face";
const AdminHelpdesk = () => {
  const formsubmit = (e) => {
    e.preventDefault();
    console.log("Function works!");
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log(formData);
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <TailwindSidebar />
      <div className="bg-gray-200 w-screen ">
        <div className="bg-white  lg:h-12">
          <div className="lg:float-right pt-2">
            <span className="name">Admin</span>
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
                  // defaultValue={selectedDate} readOnly
                  // value={selectedDate}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  // onChange={(e) => setSelectedDate(e.target.value)}
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
                  // value={userData.data.vendor._id}
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
                  // value={userData.data.vendor.NameOfTheCompany}
                  id="company"
                  name="companyname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  //   placeholder="Flowbite"
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 lg:float-left"
                >
                  Company Contact
                </label>
                <input
                type="number"
                  // value={userData.data.vendor.NameOfTheCompany}
                  id="companycontact"
                  name="companycontact"
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
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 lg:float-left"
                >
                  Company Email
                </label>
                <input
                type="email"
                  // value={userData.data.vendor.NameOfTheCompany}
                  id="companyemail"
                  name="companyemail"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  //   placeholder="Flowbite"
                  required
                />
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
                  class="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  //   placeholder="flowbite.com"
                  requi
                  red
                />
              </div>
              <div>
                <label
                  for="response"
                  class="block mb-2 text-sm font-medium text-gray-900 lg:float-left"
                >
                  Response
                </label>
                <textarea
                  type="text"
                  name="response"
                  id="response"
                  class="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  //   placeholder="flowbite.com"
                  required
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

export default AdminHelpdesk;
