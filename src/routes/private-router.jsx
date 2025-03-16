import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const isAuthenticated = () => {
  return !!localStorage.getItem("Token");
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate
      to="/"
      replace
    />
  );
};

PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default PrivateRoute;
