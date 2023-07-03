import { Help } from "@mui/icons-material";
import React,{useEffect,useState} from "react";
import './Helpdesk.css'
import Sidebar from "./Sidebar";
import FaceIcon from '@mui/icons-material/Face';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Helpdesk = () => {
     const token = localStorage.getItem("jwttoken");
    const navigate = useNavigate();
    const [userData, setuserData] = useState({
        data: {
            vendor: {
                
            }
        }
    })
     // const dispatch = useDispatch();
     // const VendorBasic = useSelector(
     //   (state) => state.VendorInfo.VendorBasicDetails
     // );

     useEffect(() => {
       const userDetailsCookie = Cookies.get("signincookie");
       if (!userDetailsCookie) {
         navigate("/login");
       }
       // console.log(JSON.parse(userDetailsCookie));
       else{
        setuserData(JSON.parse(userDetailsCookie))
       }
     }, [navigate]);
    const formsubmit = async (e) => {
        e.preventDefault();
        console.log("Function works!");
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData)
        const id = toast.loading("Please wait...");
       await axios.post(
         "/vendors/addQuery",
           {
               data:
                   formData
           },
              {
      headers: {
        authorization: `${token}`
      }
    })
      .then((res) => {

        console.log(res);
        // const jwtToken = res.data.token;
        // axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
        toast.update(id, {
          render: "Details Saved",
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 4000,
        });

      })
      .catch((res) => {
        console.log(res.message);
        toast.update(id, {
          render: "Incorrect Details",
          type: "error",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
      });


    };
    return (
        <div className='appone'>
            <div className='Head-class'>
                <Sidebar />
                <div className="container">
                    <form onSubmit={(event) => {
                        formsubmit(event);

                    }}>
                        <div className="white-bar">
                            <span class="name">{ userData.data.vendor.PrimaryEmailID}</span>
                            <div class="icon">
                                <FaceIcon />
                            </div>
                        </div>

                        <div class="w-[80%] mx-auto mt-5">

                            <div className="md-1">
                                <h4 className="help-desk"><Help className="help-class" />Help Desk</h4>
                            </div>

                            <div className='head-closed'>
                                <div className='closed-class'>
                                    <div class="form-container">
                                        <div className='hero-head'>
                                            <label for="subject" class="form-label">Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="form-container">
                                        <div className='hero-head'>
                                            <label for="description" class="form-label">Description</label>
                                            <textarea type="textarea" rows="10" cols="60" id="description" name="description" className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nextbutton">
                                <button type="submit" className="next-btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div >
            </div>

        </div>
    )
}

export default Helpdesk;