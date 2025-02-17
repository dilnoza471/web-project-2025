
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Coffee Shop</h1>
          <nav className="nav-links">
            <a href="#about">About Us</a>
            <a href="#reserve">Reserve</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2 className="curlytext">Experience the Best Coffee</h2>
          <p>Freshly brewed, serve with love</p>
          <button className="cta-button">Reserve a Table</button>
        </div>
        <div className="hero-content">
          <img src="/src/assets/about.png" alt="Coffee Beans" />
        </div>
      </section>



      <section id="body-content" className="body-content">
        <h2>Why Our Coffee?</h2>
        <p>At Coffee Shop, we take pride in sourcing the best coffee beans and brewing them to perfection. Whether you
          are a fan of espresso, lattes, or cappuccinos, we are got something for every coffee lover!</p>

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
