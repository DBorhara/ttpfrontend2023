import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { me } from "../redux/user";

export default function ProtectedRoute({ isloggedIn }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  return isloggedIn ? <Outlet /> : <Navigate to="/login" />;
}
