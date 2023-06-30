import React,{useState,useEffect} from 'react'
import TailwindSidebar from '../TailwindSidebar'
import  FaceIcon  from '@mui/icons-material/Face';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const ViewAttachments = () => {
     const token = localStorage.getItem("jwttoken");
     const navigate = useNavigate();
     const [userData, setuserData] = useState({
       data: {
         vendor: {
           PrimaryEmailID: "",
         },
       },
     });
     const [Data, setData] = useState({
         
       
     });
     useEffect(() => {
       const userDetailsCookie = Cookies.get("signincookie");
       if (!userDetailsCookie) {
         navigate("/login");
         }
         console.log(JSON.parse(userDetailsCookie))
         setuserData(JSON.parse(userDetailsCookie));
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
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <TailwindSidebar />
        <div className="bg-gray-200 w-full">
          <div className="bg-white w-full lg:h-12">
            <div className="lg:float-right pt-2">
              <span className="name">
                {userData.data.vendor.PrimaryEmailID}
              </span>
              <div className="icon">
                <FaceIcon />
              </div>
            </div>
          </div>
          <div className="w-[80%] mx-auto my-5">
            <div className="relative overflow-x-auto">
              <div className="h-12 bg-gray-800 text-white pt-3 text-left pl-5">
                Attachments
              </div>
              <table className="w-full text-sm  text-gray-500 ">
                <tbody>
                  <tr className="bg-white border-b text-left">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      PAN Number
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.PAN_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
                    >
                      GST Number
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.GST_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
                    >
                      VAT Registration Number
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.VAT_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
                    >
                      TIN NO.
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.TIN_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
                    >
                      Sales Tax
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.SalesTax_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
                    >
                      MSED Registration
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.CertificationOfIncorporation_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
                    >
                      Certificate of Incorporation
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.CertificationOfIncorporation_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
                    >
                      Memorandum of Association
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.Memorandum_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
                    >
                      Article Of Association
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.ArticleOfAssociation_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
                    >
                      Cancelled Cheque
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.CancelledCheque_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left"
                    >
                      Bank Details(Bank Name, Bank Address,Bank Account No. and
                      Bank IFSC No.)
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={Data.BankDetails_Attach}
                        target="blank"
                        className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-gray-100 group"
                      >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-gray-200 rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          view
                        </span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <button
                onClick={() => {
                    navigate("/attachments");                  
                }}
                className="inline-block my-5 float-right  bg-blue-500 rounded bg-primary px-8    pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Update Attachments
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAttachments