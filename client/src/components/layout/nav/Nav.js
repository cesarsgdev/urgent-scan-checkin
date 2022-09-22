import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  BsCalendarEvent,
  BsFillPersonCheckFill,
  BsPeopleFill,
  BsCalendarWeekFill,
} from "react-icons/bs";
import { FaCog, FaUserCog } from "react-icons/fa";

const Nav = ({ mobileMenuStatus, setMobileMenuStatus }) => {
  const nav = useRef();

  return (
    <>
      <nav
        ref={nav}
        className={`mainMenu fixed ${
          !mobileMenuStatus ? "translate-x-[-100%]" : "translate-x-0"
        } px-5 py-10 text-white bg-aqua-100 w-[66%] top-0 left-0 h-[100%] transition duration-500 z-[10000] md:translate-x-0 md:relative md:w-[auto] md:bg-transparent md:text-gray-900 md:p-0`}
      >
        <ul className=" mainMenu flex h-[100%] flex-col items-center gap-4 font-bold text-lg md:flex-row">
          <li>
            <NavLink
              onClick={() => {
                setMobileMenuStatus(!mobileMenuStatus);
              }}
              className={({ isActive }) =>
                isActive ? `activeLink` : "notActive"
              }
              to="/admin/events"
            >
              <BsCalendarWeekFill className="text-[16px]" />
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setMobileMenuStatus(!mobileMenuStatus);
              }}
              className={({ isActive }) =>
                isActive ? `activeLink` : "notActive"
              }
              to="/admin/checkins"
            >
              <BsFillPersonCheckFill className="text-[16px]" />
              Checkins
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setMobileMenuStatus(!mobileMenuStatus);
              }}
              className={({ isActive }) =>
                isActive ? `activeLink` : "notActive"
              }
              to="/admin/users"
            >
              <BsPeopleFill className="text-[16px]" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setMobileMenuStatus(!mobileMenuStatus);
              }}
              className={({ isActive }) =>
                isActive ? `activeLink` : "notActive"
              }
              to="/admin/account"
            >
              <FaUserCog className="text-[16px]" />
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setMobileMenuStatus(!mobileMenuStatus);
              }}
              className={({ isActive }) =>
                isActive ? `activeLink` : "notActive"
              }
              to="/admin/settings"
            >
              <FaCog className="text-[16px]" />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
