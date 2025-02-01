// context.js
import React, { createContext, useState, useContext } from "react";

// Create a context
const AuthContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const userLogin = (data) => {
    setUserData(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const userLogout = () => {
    setUserData(null)
    localStorage.removeItem("user");
  };


  return (
    <AuthContext.Provider value={{ userData, userLogin, userLogout}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the context
// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

export const useAuth = () => useContext(AuthContext);
