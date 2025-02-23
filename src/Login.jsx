import "./Login.css";
import Header from "./header.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpContainer = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    fetch("/users.json")
      .then((res) => res.json())
      .then((users) => {
        const userExists = users.some((u) => u.login === username);
        if (userExists) {
          setError("Username already exists");
        } else {
          const newUser = { login: username, password };
          localStorage.setItem("user", JSON.stringify(newUser));
          navigate("/");
        }
      })
      .catch(() => setError("Error checking user data"));
  };

  return (
    <section>
      <Header />
      <div className="leaves">
        <div className="set">
          <div><img src="/src/assets/bean_01.png" alt="Leaf 1" /></div>
          <div><img src="/src/assets/bean_02.png" alt="Leaf 2" /></div>
          <div><img src="/src/assets/bean_03.png" alt="Leaf 3" /></div>
          <div><img src="/src/assets/bean_04.png" alt="Leaf 4" /></div>
        </div>
      </div>
      <img src="/src/assets/sign6.png" className="bg" alt="Background" />

      <form className="login" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        <div className="inputBox">
          <input type="submit" value="Sign Up" id="btn" />
        </div>
        <div className="group">
          <p>Already have an account?</p>
          <button type="button" onClick={() => navigate("/SignUp")}>Login</button>
        </div>
      </form>
    </section>
  );
};

export default SignUpContainer;
