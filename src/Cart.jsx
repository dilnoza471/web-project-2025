import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import Header from "./header.jsx";
function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

    const handleOrder = () => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      clear();
    };
    const clear = ()=>{
        setCart([]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
        {showPopup && (
          <div className="popup">
            <p>Order placed successfully!</p>
          </div>
        )}
      <Header />
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price.toFixed(2)}</span>
              <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-actions">
        <button className="cart-button" onClick={() => navigate("/")}>Back to Menu</button>
        {cart.length > 0 && <button className="cart-button" onClick={handleOrder}>Checkout</button>}
        <button onClick={clear} >Clear</button>
      </div>
    </div>
  );
}

export default Cart;
