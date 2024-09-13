/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// create a context called AuthContext here by calling the createContext()

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(userData) {
    setUser(userData);
  }

  const logout = () => {
    setUser(null);
  };

  return (
    // add the object to the value prop which contains user, login,and logout
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
