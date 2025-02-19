import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import SignUp from "./SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
