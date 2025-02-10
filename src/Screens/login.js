import React, { useState } from "react";
import "../Styles/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";



const Login = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const {userLogin } = useAuth()

  const navigate = useNavigate();


  console.log("errors :", errors);

  const validate = () => {
    let newErrors = {};

    if (!fullName) {
      newErrors.fullName = "full name is required";
    } else if (!mobile) {
      newErrors.mobile = "mobile number is required";
    } else if (mobile.length <10) {
      newErrors.mobile = "Please enter 10 digit mobile number";
    }else if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    } else if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const userData = {fullName, email, mobile};
      userLogin(userData)
      console.log("Login Data:", { fullName, mobile, email });
      navigate("/");
    }
  };

  return (
    <div className="loginMainContainer" >
      <h1 className="headerText">Login Form</h1>

      <div className="formOuterContainer">
        <form onSubmit={onSubmit} className="loginForm">
          <div className="innerLoginContainer">
            
            <div className="labelContainer1">
              <label className="labelNameText">Full Name</label> 
              <input
                type="text"
                placeholder="Enter your full Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                  errors.fullName = "";
                }}
                className="nameInputStyle"
                value={fullName}
              />
            </div>
            <p className="loginErrorMessage">{errors.fullName}</p>

            <div className="labelContainer1">
              <label className="labelNameText">Mobile</label>

              <input
                type="text"
                placeholder="Enter your mobile number"
                onChange={(e) => {
                  setMobile(e.target.value);
                  errors.mobile = "";
                }}
                className="nameInputStyle"
                maxLength={10}
                value={mobile}
              />
            </div>

            <p className="loginErrorMessage">{errors.mobile}</p>


            <div className="labelContainer1">
              <label className="labelNameText">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  errors.email = "";
                }}
                className="nameInputStyle"
                value={email}
              />
            </div>

            <p className="loginErrorMessage">{errors.email}</p>


            <div className="labelContainer1">
              <label className="labelNameText">Password</label>

              <div className="inputContainer">
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    errors.password = "";
                  }}
                  className="nameInputStyle"
                  value={password}
                />
              </div>
            </div>
            <p className="loginErrorMessage">{errors.password}</p>

          </div>
          <button className="submitLoginButton" type="submit">Submit</button>
        </form>
        <p className="donHaveAccount" >Don't have an account? {' '} <NavLink to='/signup' className='signUpLinkText'>Sign Up</NavLink></p>

      </div>
                  
    </div>
  );
};

export default Login;
