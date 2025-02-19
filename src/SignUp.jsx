import React from "react";
import "./SignUp.css";
import Header from './header.jsx'

const SignUpContainer = () => {
  return (
    <section>
      <Header />
      <div className="leaves">
        <div className="set">
          <div><img src="/src/assets/leaf_01.png" alt="Leaf 1" /></div>
          <div><img src="/src/assets/leaf_02.png" alt="Leaf 2" /></div>
          <div><img src="/src/assets/leaf_03.png" alt="Leaf 3" /></div>
          <div><img src="/src/assets/leaf_04.png" alt="Leaf 4" /></div>
          <div><img src="/src/assets/leaf_01.png" alt="Leaf 1" /></div>
          <div><img src="/src/assets/leaf_02.png" alt="Leaf 2" /></div>
          <div><img src="/src/assets/leaf_03.png" alt="Leaf 3" /></div>
          <div><img src="/src/assets/leaf_04.png" alt="Leaf 4" /></div>
        </div>
      </div>
      <img src="/src/assets/bg.jpg" className="bg" alt="Background" />
      <img src="/src/assets/girl.png" className="girl" alt="Girl" />
      <img src="/src/assets/trees.png" className="trees" alt="Trees" />
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
