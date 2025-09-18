import { Link } from 'react-router-dom'
import { useState } from 'react'

function Front() {
  const [btnHover, setBtnHover] = useState(false)
  const [linkHover, setLinkHover] = useState(false)
  const [getStartHover, setGetStartHover] = useState(false)

  const styles = {
    body: {
      margin: 0,
      fontFamily: "'Inter', sans-serif",
      minHeight: "100vh",
      width: "100vw",
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url("https://cavignac.com/wp-content/uploads/2023/04/cavignac-hackers-on-the-jobsite.jpg")
        center / cover no-repeat fixed`,
      display: "flex",
      flexDirection: "column",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 24px",
      background: "rgba(37, 37, 58, 0.7)",
      color: "#e0e7ff",
      fontFamily: "'Inter', sans-serif",
    },
    logo: {
      fontSize: "1.6em",
      fontWeight: 700,
      fontFamily: "'Poppins', sans-serif",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
    },
    navLink: {
      color: linkHover ? "#908d8d" : "white",
      textDecoration: "none",
      fontWeight: 500,
      transition: "color 0.2s",
    },
    pageContent: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      padding: "24px",
    },
    hero: {
      maxWidth: "900px",
      background: "rgba(29, 29, 61, 0.7)",
      borderRadius: "12px",
      padding: "28px",
      backdropFilter: "blur(6px)",
      textAlign: "center",
      color: "#e0e7ff",
    },
    heroH1: {
      margin: "0 0 8px 0",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    heroP: {
      margin: "0 0 20px 0",
      fontSize: "1.1rem",
      fontFamily: "'Inter', sans-serif",
    },
    authActions: {
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
    },
    btnSignin: {
      background: btnHover ? "#e0e7ff" : "#fff",
      color: btnHover ? "#3730a3" : "#423ae5",
      padding: "10px 18px",
      borderRadius: "6px",
      fontWeight: 600,
      border: "none",
      cursor: "pointer",
      fontFamily: "'Inter', sans-serif",
      transition: "0.3s",
    },
    btnGetStart: {
      background: getStartHover ? "#22c55e" : "#16a34a",
      color: "white",
      padding: "12px 24px",
      borderRadius: "6px",
      fontWeight: 700,
      border: "none",
      cursor: "pointer",
      fontFamily: "'Inter', sans-serif",
      transition: "0.3s",
    },
    link: {
      color: "#61bef0",
      fontWeight: 500,
      textDecoration: "none",
    },
  }

  return (
    <div style={styles.body}>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
        rel="stylesheet"
      />

      <nav style={styles.navbar}>
        <div style={styles.logo}>NotesApp</div>
        <div style={styles.navLinks}>
          <Link
            to="/Ab_us"
            style={styles.navLink}
            onMouseEnter={() => setLinkHover(true)}
            onMouseLeave={() => setLinkHover(false)}
          >
            About Us
          </Link>
        </div>
      </nav>

      <div style={styles.pageContent}>
        <div style={styles.hero}>
          <h1 style={styles.heroH1}>Welcome to Notes App</h1>
          <p style={styles.heroP}>Securely store your notes after logging in.</p>

          <div style={styles.authActions}>
            <Link to="/Login">
              <button
                style={styles.btnSignin}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
              >
                Log In
              </button>
            </Link>

            <Link to="/Signin" style={styles.link}>
              Don’t have an account? Create account to store your notes safely
            </Link>

            {/* ✅ New Get Started Button */}
            <Link to="/Dashboard">
              <button
                style={styles.btnGetStart}
                onMouseEnter={() => setGetStartHover(true)}
                onMouseLeave={() => setGetStartHover(false)}
              >
                🚀 Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Front
