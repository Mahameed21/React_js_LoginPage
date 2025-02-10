import { BsPersonCircle } from "react-icons/bs";
import "../Styles/profile.css";
import { useAuth } from "../context/context";

const Profile = () => {
  const { userData } = useAuth();
 // console.log("userData :", userData);

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color:'#a100ff',
        }}
      >
        MY PROFILE
      </h1>
      <div className="profileContainer">
        <BsPersonCircle className="profilePic" />
        <div className="innerContainer">
          <p className="dataContainer">
            <strong style={{width:90, color:'#a100ff'}}>Full Name</strong> : {userData?.fullName}
          </p>
          <p className="dataContainer">
            <strong style={{width:90, color:'#a100ff'}}>Mobile</strong>: {userData?.mobile}
          </p>
          <p className="dataContainer">
            <strong style={{width:90, color:'#a100ff'}}>Email</strong> : {userData?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
