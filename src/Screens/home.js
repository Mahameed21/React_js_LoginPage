import { useLocation } from "react-router-dom"
import { useUserContext } from "../context/context";

const Home = ()=>{
    const route = useLocation();
    const {userData} = useUserContext();
    console.log('userData :', userData)

    const {fullName, mobile, email} = route.state || {}
    console.log(fullName, mobile, email)
    return (
        <div>
            <p>Welcome To Home Page</p>
        </div>
    )
}

export default Home