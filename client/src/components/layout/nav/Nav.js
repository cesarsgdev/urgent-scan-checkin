import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const Nav = ({ mobileMenuStatus, setMobileMenuStatus }) => {
  const nav = useRef();

  return (
    <>
      <nav
        ref={nav}
        className={`mainMenu fixed ${
          !mobileMenuStatus ? "translate-x-[-100%]" : "translate-x-0"
        } px-5 py-10 text-white bg-aqua-100 w-[66%] top-0 left-0 h-[100%] transition duration-500 md:block md:relative md:w-[100%] md:bg-transparent md:text-gray-900 md:p-0`}
      >
        <ul className=" mainMenu flex h-[100%] flex-col items-center gap-4 font-bold text-lg md:flex-row">
          <li>
            <NavLink
              onClick={() => {
                setMobileMenuStatus(!mobileMenuStatus);
              }}
              className={({ isActive }) =>
                isActive
                  ? `text-aqua-200 md:text-aqua-100`
                  : "transition duration-500 hover:text-aqua-100"
              }
              to="/admin/events"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setMobileMenuStatus(!mobileMenuStatus);
              }}
              className={({ isActive }) =>
                isActive
                  ? `text-aqua-200 md:text-aqua-100`
                  : "transition duration-500 hover:text-aqua-100"
              }
              to="/admin/checkins"
            >
              Checkins
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
