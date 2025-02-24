import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUp from "./SignUp";
import Login from "./Login";
import Menu from "./menu.jsx";
import Rewards from "./rewards.jsx";
import Cart from "./Cart.jsx";

const App = () => {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path={'/cart'}  element={<Cart />} />
        </Routes>
    </Router>
  );
};

export default App;
