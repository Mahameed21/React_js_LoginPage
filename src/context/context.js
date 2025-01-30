// context.js
import React, { createContext, useState, useContext } from "react";

// Create a context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const storeUserData = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, storeUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the context
export const useUserContext = () => {
  return useContext(UserContext);
};
