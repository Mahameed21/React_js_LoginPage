import { Link, NavLink} from "react-router-dom";
import '../Styles/navbar.css'

const Navbar = () => {
  return (
      <div className="navbarContainer">
        <div className="hiddenLinks">
          <NavLink to="/home" className="navLink"> Home </NavLink>
          <NavLink to="/profile" className="navLink"> Profile </NavLink>
        </div>
      </div>
  );
};

export default Navbar