import { useState } from "react";
import { FaPlusCircle, FaBars, FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const links = (
    <>
      <div className="items-center justify-between flex sm:flex">
        <NavLink to="/">
          <a className="text-xm mr-10 btn btn-outline btn-sm w-32">Home</a>
        </NavLink>
        <NavLink to="/apartment">
          <a className="text-xm mr-10 btn btn-outline btn-sm w-32">Apartmen</a>
        </NavLink>
        <NavLink to="/agent">
          <a className="text-xm mr-10 btn btn-outline btn-sm w-32">
            Dashboardt
          </a>
        </NavLink>
        <NavLink to="/agency">
          <a className="text-xm btn btn-outline btn-sm w-32">Agency</a>
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm flex items-center justify-between h-[90px] border w-full sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn  p-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-4"
          >
            {links}
          </ul>
        </div>

        <NavLink to="/">
          <a className="text-xm btn  w-32">BMS || System</a>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-2 pr-4">
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="btn btn-primary btn-sm"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/SignInForm">
              <div className="btn btn-secondary btn-sm w-32">
                <FontAwesomeIcon icon={faUser} /> Sign In
              </div>
            </NavLink>
            <NavLink to="/SignupForm">
              <div className="btn btn-outline btn-sm w-32 ">
                <FontAwesomeIcon icon={faUser} /> Sign Up
              </div>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
