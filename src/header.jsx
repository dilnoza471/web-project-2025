import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="nav-links">
          <Link to="/">Coffee Shop</Link>
          <Link to="/menu">Menu</Link>
          <Link to='/rewards'>Rewards</Link>
          <a href='#contact'>Contact</a>
          <Link to="/SignUp">Sign Up</Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
