import { useState, useEffect } from 'react';
import './menu.css';
import Header from "./header.jsx";
import {useNavigate} from "react-router-dom"; // Import the CSS file for styling

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  fetch("/menu.json")
    .then(response => response.json())
    .then(data => setMenuItems(data))
    .catch(error => console.error("Error loading menu:", error));
}, []);


  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const placeOrder = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if(!user){
          alert("Log in before ordering")
          navigate('/SignUp');
      }else{
          alert("Order placed successfully! Please pick up and pay at the counter.");
          setCart([]);
      }

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
