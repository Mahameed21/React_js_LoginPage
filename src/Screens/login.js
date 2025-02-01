import React, { useState } from "react";
import "../Styles/login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";
import BannerImage from "../assets/background.jpg";



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
    } else if (!mobile || mobile.length <10) {
      newErrors.mobile = "mobile number is required";
    } else if (!email) {
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
          <div className="innerFormContainer">
            <div className="labelContainer1">
              <label className="labelText">Full Name</label> 
              <input
                type="text"
                placeholder="Enter your full Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                  errors.fullName = "";
                }}
                className="nameInput"
                value={fullName}
              />
            </div>
            <p className="errorMessage">{errors.fullName}</p>

            <div className="labelContainer1">
              <label className="labelText">Mobile</label>

              <input
                type="text"
                placeholder="Enter your mobile number"
                onChange={(e) => {
                  setMobile(e.target.value);
                  errors.mobile = "";
                }}
                className="nameInput"
                maxLength={10}
                value={mobile}
              />
            </div>

            <p className="errorMessage">{errors.mobile}</p>


            <div className="labelContainer1">
              <label className="labelText">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  errors.email = "";
                }}
                className="nameInput"
                value={email}
              />
            </div>

            <p className="errorMessage">{errors.email}</p>


            <div className="labelContainer1">
              <label className="labelText">Password</label>

              <div className="inputContainer">
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    errors.password = "";
                  }}
                  className="nameInput"
                  value={password}
                />
              </div>
            </div>
            <p className="errorMessage">{errors.password}</p>

          </div>
          <button className="submitButton" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
