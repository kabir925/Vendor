import React from "react";
import Sidebar from "../../Sidebar.jsx";
import { Help } from "@mui/icons-material";
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
    <div className="appone">
      <div className="Head-class">
        <Sidebar />
        <div className="container">
          <form
            onSubmit={(event) => {
              formsubmit(event);
            }}
          >
            <div className="white-bar">
              <span class="name">Admin</span>
              <div class="icon">
                <FaceIcon />
              </div>
            </div>

            <div class="w-[80%] mx-auto mt-5">
              <div className="md-1">
                <h4 className="help-desk">
                  <Help className="help-class" />
                  Help Desk
                </h4>
              </div>

              <div className="head-closed">
                <div className="closed-class">
                  <div class="form-container">
                    <div className="hero-head">
                      <label for="subject" class="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-container">
                    <div className="hero-head">
                      <label for="Description" class="form-label">
                        Description
                      </label>
                      <textarea
                        type="textarea"
                        rows="6"
                        cols="60"
                        id="Description"
                        name="Description "
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-container">
                    <div className="hero-head">
                      <label for="Response" class="form-label">
                        Response
                      </label>
                      <textarea
                        type="textarea"
                        rows="6"
                        cols="60"
                        id="Response"
                        name="Response "
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="nextbutton">
                <button type="submit" className="next-btn">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminHelpdesk;
