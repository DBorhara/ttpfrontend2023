import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/store";

const LinkButton = ({ to, children, onClick }) => (
  <NavLink to={to} onClick={onClick}>
    {children}
  </NavLink>
);

const NavBar = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();
    dispatch(logout());
    navigate("/login");
  };
  console.log("isLoggedIn", isLoggedIn);
  return (
    <div>
      <h1>TTP Front End</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            <LinkButton to="/home">Home</LinkButton>
            <LinkButton onClick={handleLogOut}>Logout</LinkButton>
          </div>
        ) : (
          <div>
            <LinkButton to="/login">Login</LinkButton>
            <LinkButton to="/signup">Sign Up</LinkButton>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default NavBar;
