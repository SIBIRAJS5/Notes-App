import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { createUser } from "./service/UserService"; 
 
function Signin() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !username || !password) {
      setError("⚠️ All fields are required!");
      return;
    }
    if (password.length < 6) {
      setError("⚠️ Password must be at least 6 characters!");
      return;
    }

    createUser({ fullName, email, username, password })
      .then((res) => {
        setUser(res.data);       
        setError("");
        navigate("/dashboard");  
      })
      .catch((err) => {
        console.error(err);
        setError("⚠️ Failed to create user. Try again!");
      });
  };

  return (
    <div
      style={{
        margin: 0,
        minHeight: "100vh",
        background:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("https://images.unsplash.com/photo-1581091012184-5c64d6e66b9d?auto=format&fit=crop&w=1600&q=80") center / cover no-repeat fixed',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(29, 29, 61, 0.8)",
          padding: "35px",
          borderRadius: "12px",
          backdropFilter: "blur(6px)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
          width: "400px",
          color: "#e0e7ff",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Create Account</h2>

        {error && <p style={{ color: "tomato", marginBottom: "15px" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} style={inputStyle} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />

          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>

        <div style={{ marginTop: "15px", fontSize: "0.9em" }}>
          <p>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#c7d2fe", textDecoration: "none" }}>Login</Link>
          </p>
        </div>
        <div>
          <Link to="/" style={{ color: "#c7d2fe", textDecoration: "none", display: "inline-block", marginTop: "10px" }}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  marginBottom: "15px",
  borderRadius: "8px",
  padding: "10px",
  width: "100%",
  border: "1px solid #ccc",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  borderRadius: "8px",
  background: "#10b981",
  border: "none",
  color: "white",
  padding: "10px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "0.3s",
};

export default Signin;
