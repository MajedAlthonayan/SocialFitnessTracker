import React from "react";
import "./Navbar.css";
import { Link, NavLink, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* materialize css classes to darken nav bar */}
      <nav className="nav-wrapper">
        <div className="row">
          <Link to="/" className="col s2 push-s5 brand-logo">
            <h4>The Journey</h4>
          </Link>
        </div>
      </nav>

      <Outlet />
      <nav className="footer nav-wrapper">
        <div className="container row ">
          <ul className="center row">
            <li className="center col s2 push-s1">
              <NavLink className="titles" to="/">
                Home
              </NavLink>
            </li>
            <li className="center col s2 push-s1">
              <NavLink className="titles" to="/">
                Leaderboards
              </NavLink>
            </li>
            <li className="center col s2 push-s1">
              <NavLink className="titles" to="/">
                Post
              </NavLink>
            </li>
            <li className="center col s2 push-s1">
              <NavLink className="titles" to="/">
                Notification
              </NavLink>
            </li>
            <li></li>
            <li className="center col s2 push-s1">
              <NavLink className="titles" to="/">
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
