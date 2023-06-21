import React from "react";
import './Signin.css'

const Signin=()=> {
    const formsubmit = (e) => {
        e.preventDefault();
        console.log("Working")
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData)
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
                            <label for="emailadd" class="form-label-1">Email</label>
                            <input type="email" id="emailadd" name="emailadd" className="form-control-1" required />
                        </div>
                        <div className='md-3'>
                            <label for="pass" class="form-label-1">Password</label>
                            <input type="password" id="pass" name="pass" className="form-control-1" required/>
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