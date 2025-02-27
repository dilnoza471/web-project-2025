import { Link } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <header className="header">
      <div className="header-content">
        <nav className="nav-links">
          <Link to="/">Coffee Shop</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/rewards">Rewards</Link>
          {user ? (
            <a className={"log-btn"} onClick={handleLogout}>
              Log out
            </a>
          ) : (
            <Link to="/Login">Log in</Link>
          )}
          <Link className="view-cart-button" to="/cart">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
