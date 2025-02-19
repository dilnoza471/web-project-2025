import React from "react";
import "./SignUp.css";
import Header from "./header"; // Import the Header component

const SignUp = () => {
  return (
    <>
      <Header /> {/* Add the Header at the top */}
      <div className="signUp">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section">
                  <h6>
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section">
                            <h4>Log In</h4>
                            <div className="form-group">
                              <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group">
                              <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <a href="#" className="btn">Submit</a>
                            <p>
                              <a href="#0" className="link">Forgot your password?</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section">
                            <h4>Sign Up</h4>
                            <div className="form-group">
                              <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group">
                              <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group">
                              <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <a href="#" className="btn">Submit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
