
import { useAuth } from '../context/context';
import { useNavigate } from "react-router-dom";

const Logout = ()=>{
    const { userData, userLogout } = useAuth();
  const navigate = useNavigate();
  
    return(
        <div></div>
    )
}

export default Logout