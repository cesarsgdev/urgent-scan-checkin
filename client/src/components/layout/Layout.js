import { Outlet, Navigate } from "react-router-dom";
import Header from "./header/Header";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import useUser from "../contexts/UserContext";

const Layout = () => {
  const token = localStorage.getItem("token");
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const { isExpired, checkToken } = useUser();

  useEffect(() => {
    checkToken();
  }, [location.pathname]);
  return (
    <>
      <Header>
        <Logo />
        <Nav
          mobileMenuStatus={mobileMenu}
          setMobileMenuStatus={setMobileMenu}
        />
        <BiMenuAltRight
          size={36}
          className="md:hidden"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        />
      </Header>
      {!token || isExpired ? <Navigate to="/login"></Navigate> : <Outlet />}
    </>
  );
};

export default Layout;
