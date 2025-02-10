import "./App.css";
import Home from "./Screens/home";
import Login from "./Screens/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Screens/profile";
import Navbar from "./Components/navbar";
import { useState } from "react";
import { UserProvider } from "./context/context";
import ProtectedRoute from "./protectedRoute/protectedRoute";
import Footer from "./Components/footer";
import ContactUs from "./Screens/ContactUs";
import AboutUs from "./Screens/AboutUs";
import SignUpScreen from "./Screens/SignUp";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpScreen/>}/>
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Route>

        </Routes>
        <Footer/>
      </Router>
    </UserProvider>
  );
}

export default App;
