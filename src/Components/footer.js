import "../Styles/footer.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaInstagramSquare, FaFacebook, FaLinkedin , FaYoutube  } from "react-icons/fa";

const Footer = () => {

  const openFaceBookPage = ()=>{
    window.open("https://www.facebook.com", "_blank")
  }

  const openInstagramPage = ()=>{
    window.open("https://www.instgram.com", "_blank")
  }

  const openLinkedInPage  = ()=>{
    window.open("https://www.linkedIn.com", "_blank")
  }
const openYoutubePage  = ()=>{
  window.open("https://www.youtube.com", "_blank")
}

  return (
    <div className="footerContainer">
      <div className="leftFooter">
        <NavLink className="footerLink" activeclassname="footerActive" to='/aboutUs' >
          About Us
        </NavLink>
        <NavLink className="footerLink" activeclassname="footerActive" to='/contactUs'>
          Contact Us
        </NavLink>
        <NavLink className="footerLink" activeclassname="footerActive">
          Settings
        </NavLink>
      </div>
      <div className="rightFooter">
        
        <div className="iconsContainer" onClick={openInstagramPage}>
          <FaInstagramSquare className="instaIcon" />
          <span className="iconsText">Follow us on Instagram</span>
        </div>

        <div className="iconsContainer" onClick={openFaceBookPage}>
          <FaFacebook  className="faceBookIcon" />
          <span className="iconsText">Like us on FaceBook</span>
        </div>

        <div className="iconsContainer" onClick={openLinkedInPage}>
          <FaLinkedin   className="linkedInIcon" />
          <span className="iconsText">Connect us on LinkedIn</span>
        </div>

        <div className="iconsContainer" onClick={openYoutubePage}>
          <FaYoutube    className="youtubeIcon" />
          <span className="iconsText">See React on Youtube</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
