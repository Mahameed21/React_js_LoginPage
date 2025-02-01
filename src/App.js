import "./App.css";
import Home from "./Screens/home";
import Login from "./Screens/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Screens/profile";
import Navbar from "./Components/navbar";
import { useState } from "react";
import { UserProvider } from "./context/context";
import ProtectedRoute from "./protectedRoute/protectedRoute";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          </Route>

        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
