import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  // ✅ Hardcoded default users
  const defaultUsers = [
    { username: "admin", password: "admin123" },
    { username: "test", password: "test123" },
    { username: "sibi", password: "sibi123" }
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = defaultUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert("✅ Login successful!");
      navigate("/dashboard"); // redirect to dashboard
    } else {
      setError("❌ Invalid username or password");
    }
  };

  // --- STYLES (same as before) ---
  const bodyStyle = {
    margin: 0,
    fontFamily: "'Inter', sans-serif",
    minHeight: "100vh",
    width: "100vw",
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                url("https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1600&q=80")
                center / cover no-repeat fixed`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const loginBoxStyle = {
    background: "rgba(29, 29, 61, 0.8)",
    padding: "35px",
    borderRadius: "12px",
    backdropFilter: "blur(6px)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    width: "350px",
    color: "#e0e7ff",
    textAlign: "center"
  };

  const formControlStyle = {
    marginBottom: "15px",
    borderRadius: "8px",
    padding: "10px",
    width: "100%",
    border: "1px solid #ccc"
  };

  const btnPrimaryStyle = {
    width: "100%",
    borderRadius: "8px",
    background: "#4f46e5",
    border: "none",
    color: "white",
    padding: "10px",
    cursor: "pointer"
  };

  const btnPrimaryHover = {
    background: "#4338ca"
  };

  const extraLinksStyle = {
    marginTop: "15px",
    fontSize: "0.9em"
  };

  const linkStyle = {
    color: "#c7d2fe",
    textDecoration: "none"
  };

  return (
    <div style={bodyStyle}>
      <div style={loginBoxStyle}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            required
            style={formControlStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={formControlStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            style={btnPrimaryStyle}
            onMouseOver={(e) => e.currentTarget.style.background = btnPrimaryHover.background}
            onMouseOut={(e) => e.currentTarget.style.background = btnPrimaryStyle.background}
          >
            Login
          </button>
        </form>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        <div style={extraLinksStyle}>
          <p>
            Don’t have an account?{" "}
            <Link to="/Signin" style={linkStyle}>Sign Up</Link>
          </p>
        </div>

        <div style={{ marginTop: "1px" }}>
          <Link to="/" style={linkStyle}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
