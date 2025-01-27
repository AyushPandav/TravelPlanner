import "./Plans.css"
import { useState } from 'react';

const Plans = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText, placeholder] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Implement authentication logic here
  };
  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="textbox-container">
      <input
        type="text"
        className="textbox"
        placeholder={placeholder || "Enter text..."}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
        <button type="submit" className="Btn">Login</button>
      </form>
      <p>
        Don&apos;t have an account? <a href="#">Sign up</a>
      </p>
    </div>
  </div>
  )
}

export default Plans
