import {Link } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <a href="#"><h1>Coffe shop</h1></a>
          <nav className="nav-links">
            <a href="#about">About Us</a>
            <a href="#reserve">Reserve</a>
            <a href="#contact">Contact</a>
            <Link to="/Menu">Go to Menu</Link>

          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Experience the Best Coffee</h2>
          <p>Freshly brewed, served with love</p>
          <button
            onClick={() => document.getElementById("reserve").scrollIntoView({ behavior: "smooth" })}
            className="cta-button"
          >
            Reserve Now
          </button>
        </div>
      </section>

      <section id="about" className="about-us">
        <h2>About Us</h2>
        <p>Welcome to Coffee Shop! We serve the finest coffee with a cozy atmosphere perfect for relaxing and catching up with friends. Our mission is to provide you with an unforgettable coffee experience.</p>
        <img src="/src/assets/about.png" alt="About Coffee Shop" />
      </section>

      <section id="body-content" className="body-content">
        <h2>Why Our Coffee?</h2>
        <p>At Coffee Shop, we take pride in sourcing the best coffee beans and brewing them to perfection. Whether you are a fan of espresso, lattes, or cappuccinos, we are got something for every coffee lover!</p>
        <div className="body-images">
          <img src="/coffee.jpg" alt="Coffee Beans" />
          <img src="/coffee2.jpg" alt="Latte Art" />
        </div>
      </section>

      <section id="reserve" className="reserve">
        <h2>Reserve a Table</h2>
        <form className="reservation-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="date" required />
          <button type="submit">Reserve</button>
        </form>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Have any questions? We would love to hear from you!</p>
          <p>Email: contact@coffeeshop.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;