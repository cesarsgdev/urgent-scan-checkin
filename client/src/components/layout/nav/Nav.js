import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="flex gap-4 font-bold text-lg">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-aqua-100`
                  : "transition duration-500 hover:text-aqua-100"
              }
              to="/admin/events"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-aqua-100`
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
