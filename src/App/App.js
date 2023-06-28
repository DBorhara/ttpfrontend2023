import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Pages
import Home from "../pages/Home";
import Shoes from "../pages/Shoes";
import Shoppers from "../pages/Shoppers";

function App() {
  return (
    <Router>
      {/* <div className="App">
        <Home />
      </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allShoes" element={<Shoes />} />
        <Route path="/allShoppers" element={<Shoppers />} />
      </Routes>
    </Router>
  );
}

export default App;
