import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const authorizedUser = useSelector((state) => !!state.user.id);

  return authorizedUser ? <Outlet /> : <Navigate to="/login" />;
}
