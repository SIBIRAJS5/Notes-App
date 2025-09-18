import React from "react";
import { Link } from "react-router-dom";   // ✅ Import Link

export default function Ab_us() {
  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
      background: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("https://cavignac.com/wp-content/uploads/2023/04/cavignac-hackers-on-the-jobsite.jpg") center / cover no-repeat fixed`,
      display: "flex",
      flexDirection: "column",
    },
    navbar: {
      background: "rgba(37, 37, 58, 0.7)",
      backdropFilter: "blur(6px)",
      fontFamily: "'Inter', sans-serif",
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
    },
    navBrand: {
      color: "white",
      fontWeight: "bold",
      fontSize: "20px",
      textDecoration: "none",
    },
    navLink: {
      color: "white",
      fontWeight: 500,
      marginLeft: "auto",
      textDecoration: "none",
      transition: "color 0.2s",
    },
    pageContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: "bold",
    },
    hero: {
      maxWidth: "900px",
      background: "rgba(29, 29, 61, 0.7)",
      borderRadius: "12px",
      padding: "28px",
      backdropFilter: "blur(3px)",
      textAlign: "center",
      color: "#fff",
      marginBottom: "40px",
    },
    features: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
    },
    featureBox: {
      background: "rgba(97, 91, 223, 0.2)",
      borderRadius: "12px",
      padding: "20px",
      width: "280px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
      textAlign: "center",
      backdropFilter: "blur(3px)",
      color: "#fff",
    },
    footer: {
      background: "#4f5ccf",
      color: "white",
      textAlign: "center",
      padding: "15px",
    },
  };

  return (
    <div style={styles.body}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <a href="#" style={styles.navBrand}>NotesApp</a>
        <Link to="/" style={styles.navLink}>Home</Link> {/* ✅ Fixed */}
      </nav>

      {/* About Us Content */}
      <div style={styles.pageContent}>
        <div style={styles.hero}>
          <h1>About Us</h1>
          <p>We created NotesApp to keep your notes safe, secure, and accessible anywhere.</p>
        </div>

        {/* Features */}
        <section style={styles.features}>
          <div style={styles.featureBox}>
            <h4>🔒 Secure Login</h4>
            <p>Protected with strong authentication methods to keep your account safe.</p>
          </div>
          <div style={styles.featureBox}>
            <h4>📝 Smart Notes</h4>
            <p>Organize and access your notes anytime, with autosave & search.</p>
          </div>
          <div style={styles.featureBox}>
            <h4>☁️ Cloud Backup</h4>
            <p>Access your notes from anywhere with real-time cloud sync.</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Secure NotesApp | Built with 🔒 for privacy</p>
      </footer>
    </div>
  );
}
