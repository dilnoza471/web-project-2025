import { useState, useEffect } from 'react';
import './menu.css';


import {Link} from "react-router-dom"; // Import the CSS file for styling

function Menu() {
  // Example menu data
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // In a real app, you could fetch this data from an API or local storage
    const fetchedMenuItems = [
      { id: 1, name: 'Espresso', description: 'Strong coffee made by forcing steam through finely-ground coffee beans.', price: '$3.00' },
      { id: 2, name: 'Cappuccino', description: 'Espresso topped with hot milk and steamed milk foam.', price: '$4.50' },
      { id: 3, name: 'Latte', description: 'Espresso mixed with steamed milk and a light layer of foam.', price: '$4.00' },
      { id: 4, name: 'Macchiato', description: 'Espresso with a dollop of foamed milk on top.', price: '$3.50' },
      { id: 5, name: 'Americano', description: 'Espresso mixed with hot water.', price: '$2.50' },
      // Add more items as needed
    ];

    setMenuItems(fetchedMenuItems);
  }, []);

  return (
    <div className="menu-container">
        <header className="header">
              <Link to="/"><h1 className="home">Coffee Shop</h1></Link>

        </header>

      <h1 className="menu-title">Our Coffee Menu</h1>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div className="menu-item" key={item.id}>
            <div className="menu-item-header">
              <h3 className="item-name">{item.name}</h3>
              <span className="item-price">{item.price}</span>
            </div>
            <p className="item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;