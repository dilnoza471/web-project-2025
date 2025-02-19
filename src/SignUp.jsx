import React from "react";
import "./SignUp.css";
import Header from './header.jsx'

const SignUpContainer = () => {
  return (
    <section>
      <Header />
      <div className="leaves">
        <div className="set">
          <div><img src="/src/assets/bean_01.png" alt="Leaf 1" /></div>
          <div><img src="/src/assets/bean_02.png" alt="Leaf 2" /></div>
          <div><img src="/src/assets/bean_03.png" alt="Leaf 3" /></div>
          <div><img src="/src/assets/bean_04.png" alt="Leaf 4" /></div>
          <div><img src="/src/assets/bean_01.png" alt="Leaf 1" /></div>
          <div><img src="/src/assets/bean_02.png" alt="Leaf 2" /></div>
          <div><img src="/src/assets/bean_03.png" alt="Leaf 3" /></div>
          <div><img src="/src/assets/bean_04.png" alt="Leaf 4" /></div>
        </div>
      </div>
      <img src="/src/assets/bgcafe.jpg" className="bg" alt="Background" />
      <img src="/src/assets/girl.png" className="girl" alt="Girl" />

      <div className="login">
        <h2>Sign In</h2>
        <div className="inputBox">
          <input type="text" placeholder="Username" />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Password" />
        </div>
        <div className="inputBox">
          <input type="submit" value="Login" id="btn" />
        </div>
        <div className="group">
          <a href="#">Forget Password</a>
          <a href="#">Signup</a>
        </div>
      </div>
    </section>
  );
};

export default SignUpContainer;
