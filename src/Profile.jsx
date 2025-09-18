import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h2 style={{ color: "white", textAlign: "center" }}>⚠️ No user data found. Please Sign In.</h2>;
  }

  const { fullName, email, username } = user;

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "'Inter', sans-serif",
        background: `linear-gradient(rgba(59, 59, 59, 0.55), rgba(95, 93, 93, 0.55)),
                    url("https://blogs-images.forbes.com/josephliu/files/2019/06/brooke-cagle-1181672-unsplash-1200x673.jpg")
                    center / cover no-repeat fixed`,
        color: "#f1f5f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "rgba(18, 18, 53, 0.85)",
          padding: "30px",
          borderRadius: "12px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
        }}
      >
        <h1 style={{ marginBottom: "15px", fontSize: "2rem" }}>👤 Profile</h1>
        <div style={{ margin: "15px 0", textAlign: "left" }}>
          <p><b>Full Name:</b> {fullName}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Username:</b> {username}</p>
        </div>
        <nav style={{ marginTop: "20px" }}>
          <Link to="/dashboard" style={{ margin: "0 12px", color: "#93c5fd", textDecoration: "none", fontWeight: 600 }}>Back to Dashboard</Link>
          <Link
          to="/"
             style={{ margin: "0 12px", color: "#93c5fd", textDecoration: "none", fontWeight: 600 }}
               onClick={(e) => {
                const confirmed = window.confirm("Are you sure you want to logout?");
                  if (!confirmed) e.preventDefault(); // Prevent navigation if user cancels
           }}
         >
          Logout
        </Link>



        </nav>
      </div>
    </div>
  );
}

export default Profile;
