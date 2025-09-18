import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Front from "./Front";
import Login from "./Login";
import Ab_us from "./Ab_us";
import Signin from "./Signin";
import Dashboard from "./Dashb";
import Profile from "./Profile";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Ab_us" element={<Ab_us />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
