import { Link, NavLink, useNavigate} from "react-router-dom";
import '../Styles/navbar.css'

import { useAuth } from '../context/context';

const Navbar = () => {

  const { userData, userLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout(); // Clear authentication
    navigate("/login"); // Redirect to login page
  };
  return (
      <div className="navbarContainer">
        <div className="hiddenLinks">
        <NavLink to="/" className="navLink" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/profile" className="navLink" activeclassname="active">
          Profile
        </NavLink>
        
        {/* Show "Logout" if user is logged in, otherwise show "Login" */}
        {userData ? (
          <button className="logoutButton" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="navLink" activeclassname="active">
            Login
          </NavLink>
        )}
      </div>
      </div>
  );
};

export default Navbar