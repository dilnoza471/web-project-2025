import { useState, useEffect } from "react";
import "./menu.css";
import Header from "./header.jsx";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [show, setShow] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error loading menu:", error));
  }, []);

  const filteredMenu = menuItems.filter((item) =>
    category === "All" ? true : item.type === category,
  );

  const addToCart = (item) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Log in before ordering");
      navigate("/SignUp");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      setShow(true);
      setTimeout(() => setShow(false), 1000);
    }
  };

  return (
    <div className="menu-container">
      <Header />
      <div className={"categories"}>
        <a className={"category-button"} onClick={() => setCategory("All")}>
          All
        </a>
        <a className={"category-button"} onClick={() => setCategory("coffee")}>
          Coffee
        </a>
        <a
          className={"category-button"}
          onClick={() => setCategory("Sweet pastries")}
        >
          Sweet Pastry
        </a>
        <a
          className={"category-button"}
          onClick={() => setCategory("Savory pastries")}
        >
          Savory Pastry
        </a>
      </div>
      <h1 className="menu-title">Our Coffee Menu</h1>
      <div className="menu-grid">
        {show && (
          <div className="popup">
            <p>Added</p>
          </div>
        )}
        {filteredMenu.map((item) => (
          <div className="menu-item" key={item.id}>
            <img
              src={`/${item.id}.jpg`}
              alt={item.name}
              className="menu-item-image"
            />
            <div className="menu-item-header">
              <h3 className="item-name">{item.name}</h3>
              <span className="item-price">${item.price.toFixed(2)}</span>
              <button onClick={() => addToCart(item)}>Add</button>
            </div>
            <p className="item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
