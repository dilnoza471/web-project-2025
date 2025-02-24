import { useState, useEffect } from 'react';
import './menu.css';
import Header from "./header.jsx";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("/menu.json")
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error("Error loading menu:", error));
  }, []);

  const filteredMenu = menuItems.filter(item =>
    category === "All" ? true : item.type === category
  );

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="menu-container">
      <Header />
      <div className={'categories'}>
        <a className={'category-button'} onClick={() => setCategory("All")}>All</a>
        <a className={'category-button'} onClick={() => setCategory('coffee')}>Coffee</a>
        <a className={'category-button'} onClick={() => setCategory('Sweet pastries')}>Sweet Pastry</a>
        <a className={'category-button'} onClick={() => setCategory('Savory pastries')}>Savory Pastry</a>
      </div>
      <h1 className="menu-title">Our Coffee Menu</h1>
      <div className="menu-grid">
        {filteredMenu.map(item => (
          <div className="menu-item" key={item.id}>
            <img src={`/${item.id}.jpg`} alt={item.name} className="menu-item-image" />
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
