import { useState } from "react";
import "../Styles/contact.css";
import background from "../assets/background.jpg"; // Import image
import { FaLocationDot, FaFax } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";


const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();


  const validate = () => {
    let newErrors = {};

    if (!name) {
      newErrors.name = "full name is required";
    }  else if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    } 

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
    //  const userData = {name, email};
      console.log("Login Data:", { name, email });
      alert(`${name}, your request has been sent successfully!`);
      setTimeout(()=>{
        navigate("/aboutUs");

      }, 800)
      setName('')
      setEmail('')
    }
  };

  return (
    <div
      className="contactContainer"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div className="mainContactBox">
        <div className="contactBox">
          <div className="innerIconView">
            <FaLocationDot className="locationIcon" />
          </div>
          <p className="locText1">OUR MAIN OFFICE</p>
          <p className="locText">Near Multiplex, Marathalli, Bangalore</p>
        </div>
        <div className="contactBox">
          <div className="innerIconView">
            <IoCall className="locationIcon" />
          </div>
          <p className="locText1">PHONE NUMBER</p>
          <p className="locText">123-456-7840</p>
          <p className="locText">1800-123-456 (TOLL FREE)</p>
        </div>
        <div className="contactBox">
          <div className="innerIconView">
            <FaFax className="locationIcon" />
          </div>

          <p className="locText1">FAX</p>
          <p className="locText">123-456-7840</p>
        </div>
        <div className="contactBox">
          <div className="innerIconView">
            <TfiEmail className="locationIcon" />
          </div>

          <p className="locText1">Email</p>
          <p className="locText">abc@gmail.com</p>
        </div>
      </div>

      <div className="contactPageView">
        <p className="contactUsText">Contact Us</p>

          <form onSubmit={onSubmit} className="contactUsForm">
            <div className="innerFormContainer">
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => {
                  setName(e.target.value);
                  errors.name = "";

                }}
                className="nameInput"
                value={name}
              />
                <p className="errorMessage">{errors.name}</p>

              <input
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                  errors.email = "";

                }}
                className="nameInput"
                value={email}
                
              />
                <p className="errorMessage">{errors.email}</p>

              <textarea
                type="text"
                placeholder="Enter Message"
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                className="nameInput1"
                value={msg}
              />
            </div>
            <button className="submitButton" type="submit">
              Submit
            </button>
          </form>

      </div>
    </div>
  );
};

export default ContactUs;
