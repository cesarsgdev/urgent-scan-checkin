import { createContext, useContext, useReducer } from "react";
import { useAPI } from "../../hooks/useAPI";
import loginReducer, { userState } from "../../reducers/loginReducer";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const User = createContext(userState);

export const UserContext = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, userState);
  const API = useAPI();

  const logIn = async (userDetails) => {
    const user = await API.login(userDetails);
    console.log(user);
    if (user.success) {
      dispatch({
        type: "SET_LOGGED_IN",
      });
      localStorage.setItem("token", user.token);
      <Navigate to="/admin" />;
    } else {
      console.log(user.message);
    }
  };

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch({
      type: "SET_LOGGED_IN",
    });
    <Navigate to="/login" />;
  };

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      if (Date.now() >= decoded.exp * 1000) {
        localStorage.removeItem("token");
        return false;
      } else {
        return true;
      }
    }
  };

  const values = {
    logIn,
    logOut,
    checkToken,
  };

  return <User.Provider value={values}>{children}</User.Provider>;
};

const useUser = () => {
  const context = useContext(User);

  return context;
};

export default useUser;
