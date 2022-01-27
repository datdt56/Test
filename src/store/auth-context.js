import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userInfo: null,
  logout: () => {},
  login: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedInfo = localStorage.getItem("userInfo")
    if (storedLogin === "1" && storedInfo) {
      setIsLoggedIn(true);
      setUserInfo(storedInfo)
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  const onLogin = (email, password) => {
    if (email === "google@gmail.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("userInfo",email);
      setIsLoggedIn(true);
      setUserInfo(email);
    } else {
        alert("Hãy nhập đúng email và password")
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userInfo,
        login: onLogin,
        logout: onLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
