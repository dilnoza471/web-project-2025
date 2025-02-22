import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUp from "./SignUp";
import Menu from "./menu.jsx";
import Rewards from "./rewards.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/menu"  element={<Menu />} />
        <Route path='/rewards' element={<Rewards />} />
      </Routes>
    </Router>
  );
};

export default App;
