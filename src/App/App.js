import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// Pages

import { Login, NavBar, Signup, UserHome, HomePage } from "../components";
import PrivateRoute from "../Utils/Auth";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<Login name="login" displayName="Log In" />}
        />
        <Route
          path="/signup"
          element={<Signup name="signup" displayName="Sign Up" />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<UserHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
