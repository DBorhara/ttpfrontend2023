import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/store";

const LinkButton = ({ to, children, onClick }) => (
  <NavLink to={to} onClick={onClick}>
    {children}
  </NavLink>
);

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => !!state.user.id);

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

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
