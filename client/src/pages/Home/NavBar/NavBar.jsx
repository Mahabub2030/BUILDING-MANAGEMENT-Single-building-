import { useState } from "react";
import { FaPlusCircle, FaBars, FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const links = (
    <>
      <div className="items-center justify-between flex">
        <NavLink to="/">
          <a className="text-xm mr-10 btn-xm">Home</a>
        </NavLink>
        <NavLink to="/listing">
          <a className="text-xm mr-10 btn-xm">Apartmen</a>
        </NavLink>
        <NavLink to="/agent">
          <a className="text-xm mr-10 btn-xm">Dashboardt</a>
        </NavLink>
        <NavLink to="/agency">
          <a className="text-xm btn-xm">Agency</a>
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm flex items-center justify-between h-[90px]  border w-full sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BMS || System</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Conditional Rendering for Login/Logout */}
      <div className="navbar-end gap-4 p-4">
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)} // Logout action
            className="btn btn-primary"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/SignInForm">
              <div className="btn btn-secondary">
                <FontAwesomeIcon icon={faUser} /> Sign In
              </div>
            </NavLink>
            <NavLink to="/SignupForm">
              <div className="btn btn-outline">
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
