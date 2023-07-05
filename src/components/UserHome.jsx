import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const UserHome = () => {
  const email = useSelector((state) => state.user.email);

  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  );
};

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
};

export default UserHome;
