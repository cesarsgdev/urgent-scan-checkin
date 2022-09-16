import { Outlet, Navigate } from "react-router-dom";
import Header from "./header/Header";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const token = localStorage.getItem("token");
  const [isExpired, setIsExpired] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkToken = () => {
      if (token) {
        const decoded = jwt_decode(token);
        if (Date.now() >= decoded.exp * 1000) {
          localStorage.removeItem("token");
          setIsExpired(true);
        }
      }
    };

    checkToken();
  }, [location.pathname]);
  return (
    <>
      <Header>
        <Logo />
        <Nav />
      </Header>
      {!token || isExpired ? <Navigate to="/login"></Navigate> : <Outlet />}
    </>
  );
};

export default Layout;
