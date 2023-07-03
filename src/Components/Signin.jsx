import React, { useEffect } from "react";
import axios from "axios";
import './Signin.css'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Signin=()=> {
    const navigate=useNavigate();
    useEffect(()=>{
        if(Cookies.get('signincookie')) {
            navigate('/profile')
            return 
        }
    },[])
    const setUserCookie=(data)=>
    { 
        console.log(data);
        Cookies.set("signincookie", JSON.stringify(data));
        navigate('/basicdetails');
    }
    const formsubmit = (e) => {
        e.preventDefault();
        console.log("Working")
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData)

        const id=toast.loading("Please wait...")
        // axios.post("https://new-vendor-backend.vercel.app/api/v1/vendors/auth/signIn",{
       
        axios
          .post("/vendors/auth/signIn", {
            data: formData,
          })
          .then((res) => {
            const jwtToken = res.data.token;

            localStorage.setItem("jwttoken", jwtToken);
            toast.update(id, {
              render: "Logged in..",
              type: "success",
              isLoading: false,
              closeOnClick: true,
              autoClose: 2000,
            });
            setUserCookie(res);
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
    return(
        
        <div>
            <section className="hero-section-1">
                <div className="md-1">
                </div>
                <form onSubmit={(event) => {
                    formsubmit(event);
                    

                }}>
                    <div class="md-hero">
                        <div className='md-3'>
                            <label for="Email" class="form-label-1">Email</label>
                            <input type="email" id="Email" name="Email" className="form-control-1" required />
                        </div>
                        <div className='md-3'>
                            <label for="Password" class="form-label-1">Password</label>
                            <input type="password" id="Password" name="Password" className="form-control-1"  required/>
                        </div>
                    </div>
                    <div className="nextbutton">
                        <button type="submit" className="signin-button">
                            Signin
                        </button>
                    </div>
                </form>

            </section>

        </div>
    )
}

export default Signin;