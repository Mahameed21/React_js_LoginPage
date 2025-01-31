import "./App.css";
import Home from "./Screens/home";
import Login from "./Screens/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Screens/profile";
import Navbar from "./Components/navbar";
import { useState } from "react";
import { UserProvider } from "./context/context";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <UserProvider>
    <Router>
      {/* {isLoggedIn && <Navbar />} */}
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Login onLogin={handleLogin} />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
