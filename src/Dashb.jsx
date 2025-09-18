import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const API_URL = "http://localhost:8083/api/notes"; // Spring Boot URL

  // ✅ Fetch notes on load
  useEffect(() => {
    axios.get(API_URL)
      .then(res => setNotes(res.data))
      .catch(err => console.error("Error fetching notes:", err));
  }, []);

  // ✅ Add note
  const handleAddNote = async () => {
    if (newNote.trim() === "") return;

    try {
      const res = await axios.post(API_URL, { content: newNote });
      setNotes([...notes, res.data]); // append newly created note
      setNewNote("");
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  // ✅ Start editing
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(notes[index].content);
  };

  // ✅ Save edited note
  const handleSave = async (index) => {
    const note = notes[index];
    try {
      const res = await axios.put(`${API_URL}/${note.id}`, { content: editText });
      const updatedNotes = [...notes];
      updatedNotes[index] = res.data; // update with backend response
      setNotes(updatedNotes);
      setEditIndex(null);
      setEditText("");
    } catch (err) {
      console.error("Error updating note:", err);
    }
  };

  // ✅ Delete note
  const handleDelete = async (index) => {
    const note = notes[index];
    try {
      await axios.delete(`${API_URL}/${note.id}`);
      setNotes(notes.filter((_, i) => i !== index));
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  // --- STYLES (same as before) ---
  const styles = {
    body: {
      margin: 0,
      fontFamily: "'Inter', sans-serif",
      background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
        url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80")
        center / cover no-repeat fixed`,
      color: "#f1f5f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px",
    },
    title: { marginBottom: "10px", fontSize: "2.2rem" },
    subtitle: { margin: 0, opacity: 0.8 },
    nav: { margin: "20px 0" },
    navLink: {
      margin: "0 12px",
      color: "#93c5fd",
      textDecoration: "none",
      fontWeight: 600,
    },
    notesContainer: {
      background: "rgba(29, 29, 61, 0.85)",
      padding: "25px",
      borderRadius: "12px",
      width: "80%",
      maxWidth: "700px",
      marginTop: "20px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
    },
    emptyText: {
      textAlign: "center",
      color: "#cbd5e1",
      margin: "20px 0",
      fontStyle: "italic",
    },
    noteCard: {
      background: "#1e293b",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    noteText: { flex: 1, marginRight: "10px" },
    editInput: {
      flex: 1,
      padding: "8px",
      borderRadius: "6px",
      border: "none",
      outline: "none",
    },
    button: {
      padding: "8px 12px",
      background: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: 600,
      marginLeft: "6px",
    },
    addNote: {
      marginTop: "20px",
      display: "flex",
      gap: "10px",
    },
    input: {
      flex: 1,
      padding: "12px",
      borderRadius: "6px",
      border: "none",
      outline: "none",
    },
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.title}>📒 Dashboard</h1>
      <p style={styles.subtitle}>Welcome! Create and modify your notes.</p>

      <nav style={styles.nav}>
        <Link to="/profile" style={styles.navLink}>Profile</Link>
        <Link
          to="/"
          style={styles.navLink}
          onClick={(e) => {
            const confirmed = window.confirm("Are you sure you want to logout?");
            if (!confirmed) e.preventDefault();
          }}
        >
          Logout
        </Link>
      </nav>

      <div style={styles.notesContainer}>
        {notes.length === 0 ? (
          <p style={styles.emptyText}>No notes yet. Start by adding one!</p>
        ) : (
          notes.map((note, index) => (
            <div key={note.id} style={styles.noteCard}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={styles.editInput}
                  />
                  <button style={styles.button} onClick={() => handleSave(index)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span style={styles.noteText}>{note.content}</span>
                  <button style={styles.button} onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button style={styles.button} onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </>
              )}
            </div>
          ))
        )}

        <div style={styles.addNote}>
          <input
            type="text"
            placeholder="Write a new note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            style={styles.input}
          />
          <button style={styles.button} onClick={handleAddNote}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
