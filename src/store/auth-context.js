import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  userInfo: null,
  logout: () => {},
  login: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedInfo = localStorage.getItem("userInfo")
    if (storedInfo) {
      setUserInfo(storedInfo)
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null);
  };

  const onLogin = (email, password) => {
    if (email === "google@gmail.com" && password === "123456") {
      localStorage.setItem("userInfo",email);
      setUserInfo(email);
    } else {
        alert("Hãy nhập đúng email và password")
    }
  };

  return (
    <AuthContext.Provider
      value={{
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
