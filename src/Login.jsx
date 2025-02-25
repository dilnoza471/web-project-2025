import "./Login.css";
import Header from "./header.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogInContainer = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(""); // State for login input
  const [password, setPassword] = useState(""); // State for password input
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/users.json")
      .then((res) => res.json())
      .then((users) => {
        const user = users.find(
          (u) => u.login === login && u.password === password,
        );
        if (user) {
          localStorage.setItem("user", JSON.stringify(user)); // Store user session
          navigate("/"); // Redirect to home page
        } else {
          setError("Invalid login or password");
        }
      })
      .catch(() => setError("Error fetching user data"));
  };

  return (
    <section>
      <Header />
      <div className="leaves">
        <div className="set">
          <div>
            <img src="/src/assets/bean_01.png" alt="Leaf 1" />
          </div>
          <div>
            <img src="/src/assets/bean_02.png" alt="Leaf 2" />
          </div>
          <div>
            <img src="/src/assets/bean_03.png" alt="Leaf 3" />
          </div>
          <div>
            <img src="/src/assets/bean_04.png" alt="Leaf 4" />
          </div>
          <div>
            <img src="/src/assets/bean_01.png" alt="Leaf 1" />
          </div>
          <div>
            <img src="/src/assets/bean_02.png" alt="Leaf 2" />
          </div>
          <div>
            <img src="/src/assets/bean_03.png" alt="Leaf 3" />
          </div>
          <div>
            <img src="/src/assets/bean_04.png" alt="Leaf 4" />
          </div>
        </div>
      </div>
      <img src="/src/assets/sign6.png" className="bg" alt="Background" />

      <form className="login" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Username"
            value={login}
            onChange={(e) => setLogin(e.target.value)} // Update state
          />
        </div>
        <div className="inputBox">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state
          />
        </div>
        <div className="inputBox">
          <p style={{ color: "red", "text-align": "center" }}>{error}</p>
          <input type="submit" value="Login" id="btn" />
        </div>
        <div className="group">
          <a href="#">Forget Password</a>
          <button onClick={() => navigate("/SignUp")}>Sign up</button>
        </div>
      </form>
    </section>
  );
};

export default LogInContainer;
