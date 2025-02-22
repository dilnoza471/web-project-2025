import { useState, useEffect } from 'react';
import './menu.css';
import Header from "./header.jsx"; // Import the CSS file for styling

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchedMenuItems = [
      { id: 1, name: 'Espresso', description: 'Strong coffee made by forcing steam through finely-ground coffee beans.', price: 3.00 },
      { id: 2, name: 'Cappuccino', description: 'Espresso topped with hot milk and steamed milk foam.', price: 4.50 },
      { id: 3, name: 'Latte', description: 'Espresso mixed with steamed milk and a light layer of foam.', price: 4.00 },
      { id: 4, name: 'Macchiato', description: 'Espresso with a dollop of foamed milk on top.', price: 3.50 },
      { id: 5, name: 'Americano', description: 'Espresso mixed with hot water.', price: 2.50 },
    ];
    setMenuItems(fetchedMenuItems);
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const placeOrder = () => {
    alert("Order placed successfully! Please pick up and pay at the counter.");
    setCart([]);
  };
  const clear = () =>{
      setCart(() => []);
  }

  return (
    <div className="menu-container">
      <Header />
      <h1 className="menu-title">Our Coffee Menu</h1>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div className="menu-item" key={item.id}>
            <div className="menu-item-header">
              <h3 className="item-name">{item.name}</h3>
              <span className="item-price">${item.price.toFixed(2)}</span>
              <button onClick={() => addToCart(item)}>Add</button>
            </div>
            <p className="item-description">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list-disc pl-5">
          {cart.map((item) => (
            <li className={"text-gray-500"} key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
          <>
        <button onClick={placeOrder} className={'align-center'}>
          Place Order
        </button>
        <button onClick={clear} className={'align-center'}>
          Clear
        </button></>
      )}
    </div>
  );
}

export default Menu;
