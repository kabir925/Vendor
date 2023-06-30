import React from "react";
import axios from "axios";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Signup.css'
import { useNavigate } from "react-router-dom";
const Signup = () => {

    const navigate=useNavigate();
    const formsubmit = (e) => {
        e.preventDefault();
        console.log("Working")
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData)
        
        const id=toast.loading("Please wait...")
        axios.post("https://new-vendor-backend.vercel.app/api/v1/vendors/auth/signUp",{
            data:formData,
        })
        .then ((res)=> {
            console.log(res);
            const jwtToken = res.data.token;
            console.log(jwtToken);
            localStorage.setItem("jwttoken",jwtToken); 
            toast.update(id,{
                render: "Signing Up!",
                type: "success",
                isLoading: false,
                closeOnClick: true,
                autoClose: 4000,
            });
        })
        .catch((res) => {
            console.log(res.message);
            toast.update(id, {
              render: "Invalid Details Entered",
              type: "error",
              isLoading: false,
              closeOnClick: true,
              autoClose: 5000,
            });
          });
    };
    return (
      <div>
        <section className="hero-section-1">
          <div className="md-1">{/* <h1>hello</h1> */}</div>
          <form
            onSubmit={(event) => {
              formsubmit(event);
            }}
          >
            <div class="md-hero">
              <div className="md-3">
                <label for="PrimaryEmailID" class="form-label-1">
                  Email
                </label>
                <input
                  type="email"
                  id="PrimaryEmailID"
                  name="PrimaryEmailID"
                  className="form-control-1"
                  required
                />
              </div>
              <div className="md-3">
                <label for="Password" class="form-label-1">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  className="form-control-1"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />
              </div>

              <div className="md-3">
                <label for="PrimaryMobileNumber" class="form-label-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="PrimaryMobileNumber"
                  name="PrimaryMobileNumber"
                  className="form-control-1"
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  required
                />
              </div>
              <div className="md-3">
                <label for="NameOfTheCompany" class="form-label-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="NameOfTheCompany"
                  name="NameOfTheCompany"
                  className="form-control-1"
                  required
                />
              </div>
            </div>
            <div className="nextbutton">
              <button type="submit" className="signup-button">
                Signup
              </button>
            </div>
            <div className="md-3">
              {/* <label for="signinbutton" className="form-label-1">If you already have an accout please Signin</label> */}
              <p className="para-one">
                If you already have an account. Please Sign in!
              </p>
            </div>
            <div className="nextbutton">
              <button
                type="submit"
                className="signin-button"
                onClick={() => {
                  navigate("/login");
                }}
              >
                SignIn
              </button>
            </div>
          </form>
        </section>
      </div>
    );
}
export default Signup;