import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { me } from "../redux/user";
// Pages

import { Login, NavBar, SignUp, UserHome, HomePage } from "../components";
import ProtectedRoute from "../Utils/Auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMe = () => {
      dispatch(me());
    };
    fetchMe();
  }, [dispatch]);

  const isLoggedIn = useSelector((state) => !!state.user.id);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/home" element={<UserHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
